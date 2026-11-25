"""Registra no Rustrak o deploy concluído e seu intervalo de commits."""

import json
import os
import re
import subprocess
from dataclasses import dataclass
from datetime import UTC, datetime
from http import HTTPStatus
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

RUSTRAK_URL = 'https://logs.bodymotion.pro'
RELEASES = '/api/0/organizations/_/releases/'
SHA = re.compile(r'[0-9a-f]{40}')


@dataclass(frozen=True)
class Deploy:
    projeto: int
    sha: str
    repositorio: str
    nome: str
    url: str


class SemRedirecionamento(HTTPRedirectHandler):
    @staticmethod
    def redirect_request(*_args, **_kwargs):
        return None


def git(*args):
    return subprocess.check_output(
        ['git', *args], text=True, stderr=subprocess.DEVNULL
    ).splitlines()


def requisitar(token, metodo, caminho, dados=None, *, ausente=False):
    req = Request(
        RUSTRAK_URL + caminho,
        data=json.dumps(dados).encode() if dados is not None else None,
        method=metodo,
        headers={
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json',
        },
    )
    cliente = build_opener(SemRedirecionamento())
    try:
        with cliente.open(req, timeout=20) as resposta:
            return json.load(resposta)
    except HTTPError as exc:
        if ausente and exc.code == HTTPStatus.NOT_FOUND:
            return None
        raise SystemExit(
            f'Rustrak respondeu HTTP {exc.code} em {metodo} {caminho}.'
        ) from None
    except URLError:
        raise SystemExit(
            f'Falha de comunicação com o Rustrak em {metodo} {caminho}.'
        ) from None


def commits_da_release(sha, anteriores):
    publicados = {
        item['version']
        for item in anteriores
        if item.get('dateReleased') and item.get('commitCount')
    }
    historia = git('rev-list', '--first-parent', sha)
    base = next(
        (commit for commit in historia[1:] if commit in publicados), None
    )
    if base is None:
        base = historia[1] if len(historia) > 1 else None
    return git('rev-list', '--topo-order', f'{base}..{sha}') if base else [sha]


def registrar(api, deploy, data):
    caminho = f'{RELEASES}{deploy.sha}/'
    release = api('GET', caminho, ausente=True)
    if release is None:
        release = api(
            'POST',
            RELEASES,
            {
                'version': deploy.sha,
                'projects': [deploy.projeto],
                'url': deploy.url,
            },
        )
    if {project['id'] for project in release['projects']} != {deploy.projeto}:
        raise SystemExit('A release retornou um escopo de projeto inesperado.')

    ajuste = {}
    if not release.get('dateReleased'):
        ajuste['dateReleased'] = data
    if not release.get('commitCount'):
        anteriores = api(
            'GET', f'/api/0/projects/_/{deploy.projeto}/releases/'
        )
        ajuste['commits'] = [
            {'id': commit, 'repository': deploy.repositorio}
            for commit in commits_da_release(deploy.sha, anteriores)
        ]
    if ajuste:
        release = api('PUT', caminho, ajuste)

    deploys = caminho + 'deploys/'
    if not any(
        d.get('environment') == 'production' and d.get('name') == deploy.nome
        for d in api('GET', deploys)
    ):
        api(
            'POST',
            deploys,
            {
                'projects': [deploy.projeto],
                'environment': 'production',
                'name': deploy.nome,
                'url': deploy.url,
                'dateFinished': data,
            },
        )
    print(
        f'Deploy {deploy.nome} registrado no projeto {deploy.projeto}, '
        f"release {deploy.sha}, {release['commitCount']} commit(s)."
    )


def deploy_do_ambiente():
    deploy = Deploy(
        int(os.environ['RUSTRAK_PROJECT_ID']),
        os.environ['RUSTRAK_DEPLOY_SHA'],
        os.environ['GITHUB_REPOSITORY'],
        os.environ['RUSTRAK_DEPLOY_NAME'],
        os.environ['RUSTRAK_DEPLOY_URL'],
    )
    if not SHA.fullmatch(deploy.sha) or not re.fullmatch(
        r'[A-Za-z0-9_-]{1,64}', deploy.nome
    ):
        raise SystemExit('SHA ou identificador do deploy inválido.')
    if (
        not re.fullmatch(r'[\w.-]+/[\w.-]+', deploy.repositorio)
        or deploy.projeto <= 0
    ):
        raise SystemExit('Projeto ou repositório inválido.')
    destino = urlsplit(deploy.url)
    host_permitido = re.fullmatch(
        r'github\.com|[a-z0-9-]+\.vercel\.app', destino.netloc
    )
    if (
        destino.scheme != 'https'
        or not host_permitido
        or destino.query
        or destino.fragment
    ):
        raise SystemExit('URL do deploy inválida.')
    return deploy


def main():
    token = os.environ.get('RUSTRAK_RELEASE_TOKEN', '')
    if not token:
        raise SystemExit('O token de releases do Rustrak não foi configurado.')
    deploy = deploy_do_ambiente()
    try:
        git('merge-base', '--is-ancestor', deploy.sha, 'HEAD')
    except subprocess.CalledProcessError:
        raise SystemExit(
            'O SHA publicado não pertence ao histórico da branch verificada.'
        ) from None

    def api(metodo, caminho, dados=None, **opcoes):
        return requisitar(token, metodo, caminho, dados, **opcoes)

    registrar(api, deploy, datetime.now(UTC).isoformat())


if __name__ == '__main__':
    main()
