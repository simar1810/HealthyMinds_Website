"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  el.scrollIntoView();
  root.style.scrollBehavior = previous;
}

/** App Router resets scroll after a cross-page hash link. Re-apply the hash once the page is ready. */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHash();
    const timer = window.setTimeout(scrollToHash, 300);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
