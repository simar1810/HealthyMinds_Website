import React from "react";
import Image from "next/image";

const images = [
  "/hm-stories/plates-salad-pizza.jpg",
  "/hm-stories/plates-rainbow-boxes.jpg",
  "/hm-stories/plates-bento-dark.jpg",
  "/hm-stories/customers-pink-bowl.jpg",
  "/hm-stories/plates-hand-box.jpg",
  "/hm-stories/plates-teal-tray.jpg",
] as const;

function ImageStrip({ suffix }: { suffix: string }) {
  return (
    <>
      {images.map((src) => (
        <div
          key={`${src}-${suffix}`}
          className="relative h-64 w-64 shrink-0 overflow-hidden rounded-lg"
        >
          <Image src={src} alt="Healthy Minds meal" fill className="object-cover" sizes="256px" />
        </div>
      ))}
    </>
  );
}

export const InstagramFeed = () => {
  return (
    <section className="overflow-x-clip border-y border-hm-surface-container py-12">
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-hm-marquee gap-4 pr-4 motion-reduce:animate-none">
          <ImageStrip suffix="a" />
          <ImageStrip suffix="b" />
        </div>
      </div>
    </section>
  );
};
