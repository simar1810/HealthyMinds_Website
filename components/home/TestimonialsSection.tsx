import React from "react";
import Image from "next/image";

const posters = [
  {
    src: "/hm-stories/transform-90d.jpg",
    alt: "90-day Healthy Minds transformation, 121 kg to 71 kg",
    stats: "90 days · 121 kg → 71 kg · 50 kg",
  },
  {
    src: "/hm-stories/transform-45d.jpg",
    alt: "45-day Healthy Minds transformation, 87 kg to 75 kg",
    stats: "45 days · 87 kg → 75 kg · 12 kg",
  },
] as const;

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 bg-hm-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
          Testimonials
        </span>
        <h2 className="font-heading mb-8 text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-12 sm:text-5xl sm:leading-[0.9] sm:tracking-tighter md:text-7xl">
          Real Results.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {posters.map((poster) => (
            <figure key={poster.src} className="min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-2xl">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption
                className="notranslate mt-4 text-sm font-semibold tabular-nums tracking-tight text-hm-on-surface sm:text-base"
                translate="no"
              >
                {poster.stats}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
