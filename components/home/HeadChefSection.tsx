import React from "react";
import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/nutritionist_rad/";

export const HeadChefSection = () => {
  return (
    <section
      id="chef"
      className="scroll-mt-28 border-y border-slate-200/80 bg-white py-24"
      aria-labelledby="head-chef-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-hm-surface-low shadow-xl ring-1 ring-slate-200/60 lg:mx-0">
              <Image
                src="/Radhey.jpg"
                alt="Radhey, Head Chef at Healthy Minds Restaurant"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority={false}
              />
            </div>
            <div className="mt-4 max-w-[14rem] rounded-xl border border-slate-200/90 bg-hm-surface px-4 py-3 shadow-md lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 lg:max-w-[13rem]">
              <p className="font-heading text-xs font-black uppercase tracking-widest text-hm-primary">
                Head chef
              </p>
              <p className="font-heading text-lg font-bold text-hm-on-surface">Radhey</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">The kitchen</p>
            <h2
              id="head-chef-heading"
              className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-tighter text-hm-on-surface md:text-5xl"
            >
              Flavor with a nutrition lens
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Radhey leads our menu and kitchen direction—where chef-driven plates meet real-world nutrition. He
              shapes how we think about balance on the line, what makes the weekly rotation, and how every box should
              feel worth opening.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You&apos;ll spot him behind the standards we hold for ingredients, portions, and the story each dish
              tells. Follow along for menu drops, behind-the-scenes prep, and the occasional reality check on what
              &quot;healthy&quot; should taste like.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105"
              >
                Follow @nutritionist_rad
              </Link>
              <Link
                href="/#menu"
                className="inline-flex items-center justify-center rounded-xl border-2 border-hm-primary/30 px-8 py-3.5 text-sm font-bold text-hm-primary transition hover:bg-red-50"
              >
                See the menu
              </Link>
            </div>
            {/* <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-400">
              Full bio &amp; press — coming soon
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
