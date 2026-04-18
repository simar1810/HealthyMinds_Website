"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Pick Your Plan",
    description:
      "Choose from Weight Loss, Muscle Gain, or Healthy Balance to suit your lifestyle goals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5eIDoINzq0cPVz1r-5sNSO2T0aAaekp49zbo7KGU930SReFW139SoIAxhLwjpYi1nl9h3FSflAnAXd0wqFTttzQSsRJmkQrA7tPUVwKIJoax876jTZbr6UbmrbfPX8AsECF6WTlXXQihsrCml4jkjB0wv0iXA7xlwL8wAZ4zCUdTS7BAarSmUmWyD_yrgBeCajdRxavc9u4-TfnA4eROeV2-W7Ag-sqAknRAPLJn9wk0NcAbIKA4Aj36Kd01bNC0ZxgtZ6qWFBkNZ",
  },
  {
    id: "02",
    title: "Choose Your Plates",
    description:
      "Select from over 30 rotating weekly recipes that fit your macronutrient needs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCm3U0Dl8zyI2k4s90yXdAhxGoOBqzv_Bf77h4W88tO94A-IZxwki1R1gjuocVzTaz91N02TRBR4pLEsacrecAPuqGVXIojlQJjeNZ072oFS1Bp-aZbzziLJ6p9G3kNEuwbDfCU2PRwQS3xnqt9bjp0ehhDcGUF4A58cizcvE9qHsgPNOIkhGdGD-hiMGA5mBEj16XlaPJIHD-ijGbR4BPDz8lCHGgivQMVDHa-_KfUBrY3pIq4beigwplaD__08mL06fq3yvCWQrMT",
  },
  {
    id: "03",
    title: "Eat on Autopilot",
    description:
      "Delivered fresh. Ready in minutes. No grocery shopping, no prepping, no cleaning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCKMeutCZwoJ5j-_Te-tGjhM4Wvo1jqTxAJc4PyRPC3Zdb3my3-kOpHZdtsJockGft-oRk8lGJnl-YWuM6J5UHMoL_R9MGcAf7pljjzurfHC3pu2Lv7xDmwobb4Kf8S6JWPgYIhZsbS7_wypiUn6SfoWWeY23Y6g8A6W0jorA4jfLS7-xYM2EongyD56KPTolga-fLvAdjnVuQxpi5S0OWKUPFftaBkcnOHWnc1OJOwnz2EPb0Eq6DNZ4UxspOlBYTsJDM_q5bD_8P",
  },
];

export const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
      <div className="mb-16 flex flex-col items-center space-y-6 text-center">
        <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-hm-on-surface md:text-5xl">
          Three Steps. Zero Drama.
        </h2>
        <Link
          href="/plans"
          className="rounded-xl bg-hm-primary px-8 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-hm-primary-mid"
        >
          View plans
        </Link>
      </div>
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3">
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
