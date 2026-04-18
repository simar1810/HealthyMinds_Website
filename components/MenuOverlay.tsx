"use client";
import React, { useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { LanguageSelect } from "@/components/LanguageSelect";

const navLinks = [
  { name: "Home", href: "/", hasChild: false },
  { name: "Plans", href: "/plans", hasChild: false },
  { name: "Menu", href: "/menu", hasChild: false },
];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export const MenuOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const mounted = useIsClient();

  useEffect(() => {
    if (!mounted) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-full w-full flex-col bg-white lg:flex-row">
        <div className="relative z-10 hidden h-full flex-col border-r-2 border-border-subtle shadow-xl lg:flex lg:w-[58%] xl:w-[62%]">
          <div className="relative flex-1 overflow-hidden bg-burgundy-deep">
            <Image
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover object-center opacity-80"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-deep/95 via-primary/40 to-brand-green/30" />
            <div className="absolute bottom-10 left-10 max-w-lg">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-white/90">
                Healthy Minds Restaurant
              </p>
              <p className="font-heading mt-3 text-4xl font-bold uppercase leading-none tracking-tight text-white xl:text-5xl">
                Bold food. Calm routine.
              </p>
            </div>
          </div>

          <div className="flex h-[140px] shrink-0 items-center justify-between gap-4 border-t-4 border-primary bg-burgundy px-10">
            <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-white md:text-xl">
              Get the app
            </h2>
            <div className="flex gap-2">
              <div className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-white/40 px-2.5 py-1.5 transition hover:bg-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2.7 13.9c-.8 0-1.8-.4-2.5-.4s-1.8.4-2.6.4c-1.2 0-2.3-1.1-3-2.1-1.3-1.9-1.3-5 .1-6.9.7-1 1.7-1.5 2.8-1.5 1 0 1.9.5 2.5.5s1.6-.6 2.7-.6c1.1 0 2.2.6 2.7 1.6-2.2 1.3-1.8 4.2.5 5.3-.6 1.4-1.6 3.1-3.2 3.7zM14.9 6c-.2 1.3-1.1 2.3-2.3 2.5-.2-1.3.9-2.5 2.1-2.9.1.1.2 0 .2.4z" />
                </svg>
                <div className="hidden flex-col sm:flex">
                  <span className="text-[7px] font-medium text-white/80">App Store</span>
                  <span className="text-xs font-bold text-white">iOS</span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-white/40 px-2.5 py-1.5 transition hover:bg-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
                  <path d="M3.6 20.4L18.8 12 3.6 3.6v16.8z" fillOpacity=".8" />
                  <path d="M18.8 12L3.6 20.4 12 12l-8.4-8.4L18.8 12z" fillOpacity=".5" />
                </svg>
                <div className="hidden flex-col sm:flex">
                  <span className="text-[7px] font-medium text-white/80">Google Play</span>
                  <span className="text-xs font-bold text-white">Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-full w-full flex-col overflow-y-auto bg-white px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top)+3rem)] sm:px-8 md:px-12 lg:w-[42%] lg:px-10 xl:w-[38%]">
          <button
            onClick={onClose}
            type="button"
            className="fixed right-4 top-[max(4.5rem,env(safe-area-inset-top)+0.75rem)] z-[110] flex h-11 w-11 items-center justify-center rounded-md border-2 border-border-subtle text-burgundy transition hover:border-primary hover:text-primary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav className="mt-4 flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={onClose}
                className="font-heading text-2xl font-bold uppercase tracking-wide text-burgundy transition hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex w-full flex-col gap-2 border-t-2 border-border-subtle pt-10">
            <div className="flex items-center gap-2 text-burgundy">
              <span className="font-heading text-xs font-bold uppercase tracking-wide">
                Language / اللغة
              </span>
            </div>
            <LanguageSelect selectId="healthy-minds-lang-menu" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
