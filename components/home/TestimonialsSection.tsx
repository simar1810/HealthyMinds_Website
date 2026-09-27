import React from "react";
import Image from "next/image";

const posters = [
  {
    src: "/hm-stories/transform-90d.jpg",
    alt: "90-day Healthy Minds transformation poster, 121 kg to 71 kg",
    stats: "90 days · 121 kg → 71 kg · 50 kg",
    title: "90-day fat loss",
    detail:
      "A 90-day fat-loss plan from this kitchen. The poster records 121 kg to 71 kg — 50 kg down — on chef-plated, weighed meals.",
  },
  {
    src: "/hm-stories/transform-45d.jpg",
    alt: "45-day Healthy Minds transformation poster, 87 kg to 75 kg",
    stats: "45 days · 87 kg → 75 kg · 12 kg",
    title: "45-day cut",
    detail:
      "A 45-day cut from the same kitchen. The poster shows 87 kg to 75 kg — 12 kg down — with plates built for the day, not a fad week.",
  },
] as const;

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 bg-hm-surface py-16 sm:py-24"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
          Transformations
        </span>
        <h2
          id="results-heading"
          className="font-heading mb-8 text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-12 sm:text-5xl sm:leading-[0.9] sm:tracking-tighter md:text-7xl"
        >
          Real Results.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
          {posters.map((poster) => (
            <figure key={poster.src} className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/70">
              <div className="relative aspect-[4/5] bg-white">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hm-primary">
                  {poster.title}
                </p>
                <p
                  className="notranslate mt-2 text-sm font-semibold tabular-nums tracking-tight text-hm-on-surface sm:text-base"
                  translate="no"
                >
                  {poster.stats}
                </p>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{poster.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
