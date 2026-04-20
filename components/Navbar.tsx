"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { MenuOverlay } from "./MenuOverlay";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { href: "/#menu", label: "Menu", match: "menu" },
  { href: "/#features", label: "Features", match: "features" },
  { href: "/#chef", label: "Chef", match: "chef" },
  { href: "/#community", label: "Community", match: "community" },
  { href: "/#faq", label: "FAQ", match: "faq" },
] as const;

const SECTION_IDS = ["menu", "features", "chef", "community", "faq"] as const;

const LG = "(min-width: 1024px)";

function useHash() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const refreshHash = useCallback(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
  }, []);

  useLayoutEffect(() => {
    refreshHash();
  }, [pathname, refreshHash]);

  useEffect(() => {
    const onChange = () => refreshHash();
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, [refreshHash]);

  return { hash, refreshHash };
}

function useScrollSpyActiveId(enabled: boolean) {
  type SectionId = (typeof SECTION_IDS)[number];
  const [activeId, setActiveId] = useState<SectionId>(SECTION_IDS[0]);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    let raf = 0;
    const measure = () => {
      const navOffset = 120;
      const y = window.scrollY + navOffset;
      let current: SectionId = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return activeId;
}

function NavbarUserMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, logout } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex shrink-0 items-center gap-2">
      {isAuthenticated ? (
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 text-hm-on-surface shadow-sm transition hover:border-hm-primary/35 hover:shadow"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-hm-primary to-hm-primary-mid text-xs font-bold text-white">
              {initials}
            </div>
            <span className="hidden max-w-[120px] truncate text-sm font-semibold sm:inline">
              {user?.name || "Account"}
            </span>
            <svg
              className={`h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isDropdownOpen ? (
            <div className="absolute right-0 top-full z-[80] mt-2 w-[240px] rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
              <div className="border-b border-slate-100 px-4 py-3">
                <p className="truncate text-sm font-semibold text-hm-on-surface">
                  {user?.name || "User"}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {user?.email ||
                    (user?.phone
                      ? `+${user.countryCode} ${user.phone}`
                      : "")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  logout();
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-sm font-semibold text-hm-primary transition hover:bg-red-50"
              >
                Log out
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export const Navbar = () => {
  const pathname = usePathname();
  const { hash, refreshHash } = useHash();
  const scrollId = useScrollSpyActiveId(pathname === "/");
  const hashSlug =
    hash.startsWith("#") && hash.length > 1 ? hash.slice(1) : "";
  const activeSlug = hashSlug || scrollId;

  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const panelCloseRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const DRAWER_TOP = "calc(env(safe-area-inset-top, 0px) + 5.5rem)";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia(LG);
    const closeIfDesktop = () => {
      if (mq.matches) setOpen(false);
    };
    closeIfDesktop();
    mq.addEventListener("change", closeIfDesktop);
    return () => mq.removeEventListener("change", closeIfDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => panelCloseRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const navLinkClass = (match: string) => {
    const active = pathname === "/" && activeSlug === match;
    return [
      "relative rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors md:px-3.5",
      active
        ? "text-hm-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-hm-primary md:after:left-3.5 md:after:right-3.5"
        : "text-slate-600 hover:bg-slate-100 hover:text-hm-primary",
    ].join(" ");
  };

  return (
    <header className="fixed top-0 z-50 w-full pt-[env(safe-area-inset-top,0px)]">
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[55] bg-hm-on-surface/45 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed right-0 z-[60] flex w-full max-w-[min(100vw,20rem)] flex-col overflow-hidden border-l border-slate-200/90 bg-white shadow-2xl lg:hidden"
            style={{
              top: DRAWER_TOP,
              height:
                "calc(100dvh - env(safe-area-inset-top, 0px) - 5.5rem - env(safe-area-inset-bottom, 0px))",
            }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
              <BrandLogo className="!h-12 max-w-[min(220px,62vw)] sm:!h-14" />
              <button
                ref={panelCloseRef}
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-hm-on-surface transition hover:border-hm-primary hover:text-hm-primary"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:px-4"
              aria-label="Mobile menu"
            >
              {navLinks.map(({ href, label, match }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex min-h-12 items-center rounded-xl px-4 text-sm font-bold uppercase tracking-widest transition ${
                    pathname === "/" && activeSlug === match
                      ? "bg-red-50 text-hm-primary"
                      : "text-slate-600 hover:bg-hm-surface-low hover:text-hm-primary"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    requestAnimationFrame(refreshHash);
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/plans"
                className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-5 text-sm font-bold text-white shadow-md transition active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                View plans
              </Link>
              <button
                type="button"
                className="mt-2 flex min-h-12 items-center justify-center rounded-xl border-2 border-hm-primary/25 px-5 text-sm font-bold uppercase tracking-wide text-hm-primary transition hover:bg-hm-surface-low"
                onClick={() => {
                  setFullMenuOpen(true);
                  setOpen(false);
                }}
              >
                Full menu
              </button>
              <Link
                href="/auth/login"
                className="mt-2 flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-slate-600 transition hover:bg-hm-surface-low"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/plans"
                className="mt-1 flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-hm-on-surface transition hover:bg-hm-surface-low"
                onClick={() => setOpen(false)}
              >
                Get started
              </Link>
            </nav>
          </div>
        </>
      ) : null}

      <div className="border-b border-slate-200/90 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5 lg:gap-8" aria-label="Main">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 shrink-0 items-center py-1"
            onClick={() => setOpen(false)}
          >
            <BrandLogo priority className="!h-[3.25rem] max-w-[min(300px,72vw)] sm:!h-[3.75rem] md:!h-[4.25rem] lg:!h-[4.75rem]" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClass(match)}
                onClick={() => requestAnimationFrame(refreshHash)}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-3 md:flex md:gap-4">
              {!isAuthenticated ? (
                <Link
                  href="/auth/login"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-hm-primary"
                >
                  Sign in
                </Link>
              ) : (
                <NavbarUserMenu />
              )}
              {!isAuthenticated ? (
                <Link
                  href="/plans"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 active:scale-[0.98]"
                >
                  Get started
                </Link>
              ) : (
                <Link
                  href="/plans"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 active:scale-[0.98]"
                >
                  View plans
                </Link>
              )}
            </div>

            <div className="flex items-center gap-2 md:hidden">
              {isAuthenticated ? <NavbarUserMenu /> : null}
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-hm-on-surface transition hover:border-hm-primary hover:text-hm-primary"
                aria-expanded={open}
                aria-controls={open ? menuId : undefined}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MenuOverlay
        isOpen={fullMenuOpen}
        onClose={() => setFullMenuOpen(false)}
      />
    </header>
  );
};
