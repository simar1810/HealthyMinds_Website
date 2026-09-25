"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconStarFilled } from "@/components/icons/HmFeatureIcons";

const HERO_IMAGE = "/hm-stories/plates-rainbow-boxes.jpg";

const AVATARS = [
  { src: "/hm-stories/customers-burj.jpg", position: "18% 20%" },
  { src: "/hm-stories/customers-burj.jpg", position: "78% 22%" },
  { src: "/hm-stories/customers-mall.jpg", position: "22% 18%" },
] as const;

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hm-surface px-4 pb-16 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:px-6 md:py-24 landscape:max-md:pb-10 landscape:max-md:pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="space-y-6 md:col-span-6 md:space-y-8">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
            The Editorial Harvest
          </span>
          <h1 className="font-heading text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-hm-on-surface sm:text-5xl sm:leading-[0.95] sm:tracking-tighter md:text-7xl">
            Fuel Your Week <br /> the Right Way
          </h1>
          <p className="max-w-full text-base leading-relaxed text-slate-600 break-words sm:text-lg md:text-xl">
            A curated culinary experience delivered to your door. We treat your health like a
            masterfully edited publication.
          </p>
          <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:gap-6 sm:pt-4">
            <Link
              href="/auth/login"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:shadow-xl sm:w-auto sm:px-10 sm:text-lg"
            >
              Get started
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden>
                {AVATARS.map((avatar) => (
                  <div
                    key={`${avatar.src}-${avatar.position}`}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={avatar.src}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: avatar.position }}
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold">
                <span className="block text-hm-primary">290K+ Customers</span>
                <span className="font-normal text-slate-500">19M+ Meals Served</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-6">
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl bg-hm-surface-container shadow-2xl">
            <Image
              src={HERO_IMAGE}
              alt="Healthy Minds chef-prepared meal boxes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute bottom-3 left-3 z-20 max-w-[min(16rem,calc(100%-1.5rem))] rounded-xl bg-white p-4 shadow-xl sm:p-6 md:-bottom-6 md:-left-12 md:max-w-xs">
            <div className="mb-2 flex items-center gap-2">
              <IconStarFilled className="h-5 w-5 text-hm-primary" />
              <span className="font-heading text-sm font-bold tracking-tight">CHEF FAVORITES</span>
            </div>
            <p className="text-sm text-slate-600">
              The Miso-Glazed Salmon Bowl was recently voted #1 by our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
