"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { GoogleTranslate } from "@/components/GoogleTranslate";

const explore = [
  { href: "/menu", label: "Menu" },
  { href: "/plans", label: "Plans" },
  { href: "/#features", label: "Features" },
  { href: "/#community", label: "Community" },
] as const;

const help = [
  { href: "/#faq", label: "FAQ" },
  { href: "/auth/login", label: "Sign in" },
  { href: "/plans", label: "Get started" },
] as const;

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#7a4146] to-hm-footer text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #fff 0, transparent 45%),
            radial-gradient(circle at 80% 80%, #fff 0, transparent 40%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="mb-8 inline-block">
              <BrandLogo onDark />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              Chef-crafted meal plans and a menu that changes with the week—fresh, balanced, and
              built for real life.
            </p>
            <div className="mt-10 max-w-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Language
              </p>
              <div
                id="site-language"
                className="rounded-xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm"
              >
                <GoogleTranslate />
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Explore
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                {explore.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/80 transition hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Help
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                {help.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/80 transition hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="text-white/50">
                    Privacy &amp; terms are confirmed during signup.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-10 sm:flex-row sm:items-center">
          <p className="order-2 text-center text-xs text-white/45 sm:order-1 sm:text-left">
            © {new Date().getFullYear()} Healthy Minds Restaurant. All rights reserved.
          </p>
          <div className="order-1 flex flex-wrap items-center justify-center gap-2 sm:order-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
