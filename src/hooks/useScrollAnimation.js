import { useEffect, useRef } from "react";

/**
 * Returns a ref callback. Attach it to any element and it will
 * add the class "is-visible" when the element scrolls into view.
 */
export default function useScrollAnimation(options = {}) {
  const elements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    elements.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /** Call addRef(el) on each element you want to animate */
  const addRef = (el) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  return addRef;
}
