"use client";

import React from "react";
import { HOME_FAQS } from "@/components/home/homeFaqs";
import { SectionPlansCta } from "@/components/home/SectionPlansCta";

export const FAQSection = () => {
  return (
    <section id="faq" className="scroll-mt-28 bg-hm-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading mb-10 text-center text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-16 sm:text-4xl sm:tracking-tighter md:text-5xl">
          Straight Answers
        </h2>
        <div className="space-y-4">
          {HOME_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="faq-disclosure overflow-hidden rounded-xl bg-hm-surface-low open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 text-base font-bold text-hm-on-surface sm:items-center sm:gap-4 sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1 pr-1 leading-snug">{faq.question}</span>
                <span
                  className="faq-chevron inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200/80"
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-slate-200/80 px-4 pb-5 pt-0 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <SectionPlansCta />
      </div>
    </section>
  );
};
