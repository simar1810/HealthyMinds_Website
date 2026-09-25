import React from "react";
import Image from "next/image";

const featured = {
  img: "/hm-stories/plates-rainbow-boxes.jpg",
  label: "Real plates.",
};

const gridImages = [
  "/hm-stories/plates-bento-dark.jpg",
  "/hm-stories/plates-hand-box.jpg",
  "/hm-stories/plates-teal-tray.jpg",
  "/hm-stories/plates-black-bag.jpg",
] as const;

export const CommunitySection = () => {
  return (
    <section id="community" className="scroll-mt-28 overflow-hidden bg-hm-surface-low py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
          <div className="w-full min-w-0 md:w-1/2">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
              Community feed
            </span>
            <h2 className="font-heading mb-8 text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-12 sm:text-5xl sm:leading-[0.9] sm:tracking-tighter md:text-7xl">
              Real People.
              <br />
              Real Plates.
            </h2>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={featured.img}
                alt="Healthy Minds meal boxes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white sm:p-8">
                <p className="font-heading text-base font-bold uppercase tracking-tight sm:text-xl">
                  {featured.label}
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full flex-1 grid-cols-2 gap-3 sm:gap-4 md:mt-24">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={gridImages[0]} alt="Healthy Minds plated meals" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={gridImages[1]} alt="Healthy Minds lunch box" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={gridImages[2]} alt="Healthy Minds daily tray" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={gridImages[3]} alt="Healthy Minds meal bag" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
