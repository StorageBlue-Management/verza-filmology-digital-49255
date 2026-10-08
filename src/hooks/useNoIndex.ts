import { useEffect } from "react";

/** Adds <meta name="robots" content="noindex, follow"> while the page is mounted. */
export const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "robots");
    meta.setAttribute("content", "noindex, follow");
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);
};
