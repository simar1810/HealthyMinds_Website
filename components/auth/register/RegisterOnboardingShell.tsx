"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { OnboardingProgress } from "@/components/auth/register/OnboardingProgress";

type Props = {
  children: React.ReactNode;
  step: number;
};

export function RegisterOnboardingShell({ children, step }: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hm-surface px-4 pb-28 pt-24 text-hm-on-surface sm:pt-28">
      <div
        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-hm-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[480px]">
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hm-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hm-surface"
          >
            <BrandLogo className="!h-11 sm:!h-12" priority />
          </Link>
        </div>
        <OnboardingProgress step={step} />
        {children}
      </div>
    </div>
  );
}
