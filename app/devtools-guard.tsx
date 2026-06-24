"use client";

import { useEffect } from "react";

/**
 * Soft deterrent against opening browser devtools / viewing source.
 * Active in production builds only — dev keeps full devtools access.
 * NOTE: this cannot truly prevent inspection; it only discourages casual use.
 */
export function DevtoolsGuard() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;
      const isDevtoolsCombo =
        e.key === "F12" ||
        (ctrlOrMeta && e.shiftKey && (key === "i" || key === "j" || key === "c")) ||
        (ctrlOrMeta && key === "u");

      if (isDevtoolsCombo) {
        e.preventDefault();
      }
    };

    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("contextmenu", onContextMenu);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return null;
}
