import React from "react";
import { Analytics } from "@vercel/analytics/react";
import LaunchPage from "./components/LaunchPage";
import FullSite from "./FullSite";

const showFullSite = import.meta.env.VITE_SITE_MODE === "full";

export default function App() {
  return (
    <>
      {showFullSite ? <FullSite /> : <LaunchPage />}
      <Analytics />
    </>
  );
}
