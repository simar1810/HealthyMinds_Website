import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";

export function BlogCtaSection({ cta }: { cta: BlogPost["cta"] }) {
  return (
    <section className="border-t border-slate-200 bg-hm-surface-low px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-black leading-tight tracking-tight text-hm-on-surface sm:text-4xl">
          {cta.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{cta.text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={cta.buttonHref}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-hm-primary px-8 text-sm font-bold text-white transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
          >
            {cta.buttonLabel}
          </Link>
          <Link
            href="/menu"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-hm-primary px-8 text-sm font-bold text-hm-primary transition hover:bg-hm-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
          >
            Browse the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
