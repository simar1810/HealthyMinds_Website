"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const STEP_IMAGE = "/hm-stories/how-it-works-boxes.jpg";

const steps = [
  {
    id: "01",
    title: "Pick Your Plan",
    description:
      "Choose from Weight Loss, Muscle Gain, or Healthy Balance to suit your lifestyle goals.",
    image: STEP_IMAGE,
  },
  {
    id: "02",
    title: "Choose Your Plates",
    description:
      "Select from over 30 rotating weekly recipes that fit your macronutrient needs.",
    image: STEP_IMAGE,
  },
  {
    id: "03",
    title: "Eat on Autopilot",
    description:
      "Delivered fresh. Ready in minutes. No grocery shopping, no prepping, no cleaning.",
    image: STEP_IMAGE,
  },
];

export const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 grid grid-cols-[minmax(0,42%)_minmax(0,1fr)] items-center gap-4 sm:mb-16 sm:gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-hm-surface-low">
          <Image
            src="/hm-stories/how-it-works-start.jpg"
            alt="Healthy Minds customer holding a plate"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 42vw, 40vw"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start gap-4 text-left sm:gap-6">
          <h2
            className="notranslate font-heading max-w-full text-[1.65rem] font-black leading-[1.08] tracking-tight text-hm-on-surface sm:text-4xl md:text-5xl"
            translate="no"
          >
            Start Your Healthy Meal Plan
          </h2>
          <Link
            href="/plans"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-hm-primary px-8 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-hm-primary-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary sm:w-auto"
          >
            View plans
          </Link>
        </div>
      </div>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
        {steps.map((step) => (
          <div key={step.id} className="group flex flex-col items-center text-center">
            <div className="relative mb-8 aspect-square w-full overflow-hidden rounded-xl bg-hm-surface-low">
              <span className="absolute left-4 top-4 z-10 font-heading text-6xl font-black text-hm-primary/20">
                {step.id}
              </span>
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover object-center motion-reduce:transition-none transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:transform-none"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading mb-4 text-2xl font-bold text-hm-on-surface">{step.title}</h3>
            <p className="text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
