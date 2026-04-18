"use client";

import React from "react";
import Link from "next/link";
import { IconChevronDown } from "@/components/icons/HmFeatureIcons";

const faqs = [
  {
    question: "Am I tied into a contract?",
    answer:
      "No. You can pause, cancel, or skip weeks at any time through our easy-to-use dashboard. Your freedom is part of the recipe.",
  },
  {
    question: "Can I exclude specific ingredients?",
    answer:
      "Absolutely. Our smart menu filter allows you to hide meals containing nuts, dairy, or gluten. We tailor every delivery to your unique dietary requirements.",
  },
  {
    question: "How long do the meals last?",
    answer:
      'Our meals are delivered fresh and stay perfect in your refrigerator for up to 5 days. Each container has a clear "use by" date.',
  },
  {
    question: "What if I don't like a meal on my menu?",
    answer:
      "You have full control to swap any meal you don't like with another option from our weekly menu before the cutoff time.",
  },
  {
    question: "Can I enter my own macros?",
    answer:
      "Yes — use custom macro targets or build-your-own portions so each day lines up with your coach or nutrition plan.",
  },
  {
    question: "How do I pause my subscription?",
    answer:
      "Open your account dashboard, choose Manage subscription, and set a pause window. You can resume whenever you are ready.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="scroll-mt-28 bg-hm-surface px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading mb-16 text-center text-4xl font-black uppercase tracking-tighter text-hm-on-surface md:text-5xl">
          Straight Answers
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl bg-hm-surface-low open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold text-hm-on-surface [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <IconChevronDown className="shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-200/80 px-6 pb-6 pt-0 text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/plans"
            className="rounded-xl border-2 border-hm-primary px-8 py-3 text-sm font-bold text-hm-primary transition hover:bg-hm-primary hover:text-white"
          >
            View plans
          </Link>
        </div>
      </div>
    </section>
  );
};
