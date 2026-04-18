"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconStarFilled } from "@/components/icons/HmFeatureIcons";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB59vfaJ5t_jZFOXkFL7dHgp7SLcExlJgkm3J01n1TshleNGJJG1VMR2GjD3y7amHqFz2i0NwUu0x9VOZN5-PFNqQRbxIygyrFZrF-1bnNTyf-4wWTwrcwRM5SlEF7MyyVSlhF5Ufmnn_qkSq9ieEo4Sik6ZT0fCzeqk7mnnQSpv4QKKx4C4PmVCdan4OpVvpy74m-h7u788v3d07mvCVkAqtwkukqhilRzqDlcBhvrwjBSqCC1zTRgkfBHxkPJNVecs9EQdfKMLR0F";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hm-surface px-6 pb-16 pt-[calc(5.25rem+env(safe-area-inset-top,0px))] md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="space-y-8 md:col-span-6">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
            The Editorial Harvest
          </span>
          <h1 className="font-heading text-5xl font-extrabold leading-[0.9] tracking-tighter text-hm-on-surface md:text-7xl">
            Fuel Your Week <br /> the Right Way
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-slate-600 md:text-xl">
            A curated culinary experience delivered to your door. We treat your health like a
            masterfully edited publication.
          </p>
          <div className="flex flex-col gap-6 pt-4 sm:flex-row sm:items-center">
            <Link
              href="/plans"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-10 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:shadow-xl"
            >
              Get started
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div
                  className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                  aria-hidden
                />
                <div
                  className="h-10 w-10 rounded-full border-2 border-white bg-slate-300"
                  aria-hidden
                />
                <div
                  className="h-10 w-10 rounded-full border-2 border-white bg-slate-400"
                  aria-hidden
                />
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
              alt="Premium healthy salad bowl with salmon, avocado, and greens"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-2 z-20 max-w-xs rounded-xl bg-white p-6 shadow-xl md:-left-12">
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
