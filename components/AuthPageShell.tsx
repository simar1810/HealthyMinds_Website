"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

type Props = {
  children: React.ReactNode;
  /** When set, shown inside the card above children */
  title?: string;
  subtitle?: React.ReactNode;
  maxWidthClass?: string;
};

export function AuthPageShell({
  children,
  title,
  subtitle,
  maxWidthClass = "max-w-[440px]",
}: Props) {
  const showHeader = title != null || subtitle != null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hm-surface px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-hm-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-40 h-72 w-72 rounded-full bg-hm-tertiary/10 blur-3xl"
        aria-hidden
      />
      <div className={`relative mx-auto w-full ${maxWidthClass}`}>
        <div className="mb-10 flex flex-col items-center text-center">
          <Link
            href="/"
            className="inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hm-surface"
          >
            <BrandLogo className="!h-12 sm:!h-14 md:!h-16" priority />
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
          {showHeader ? (
            <div className="mb-8 text-center">
              {title ? (
                <h1 className="font-heading text-2xl font-black uppercase tracking-tight text-hm-on-surface sm:text-3xl">
                  {title}
                </h1>
              ) : null}
              {subtitle ? (
                <div className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-slate-600">
                  {subtitle}
                </div>
              ) : null}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
}
