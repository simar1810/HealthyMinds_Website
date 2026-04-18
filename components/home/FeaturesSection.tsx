import React from "react";
import {
  IconTotalControl,
  IconChefCrafted,
  IconFreshDelivery,
  IconEcoPackaging,
} from "@/components/icons/HmFeatureIcons";

const features = [
  {
    title: "Total Control",
    description:
      "Modify your menu, skip weeks, or swap recipes with a single tap on our app.",
    Icon: IconTotalControl,
  },
  {
    title: "Chef Crafted",
    description:
      "Each meal is designed by Michelin-trained chefs to ensure gourmet quality every time.",
    Icon: IconChefCrafted,
  },
  {
    title: "Fresh Deliveries",
    description:
      "Never frozen. We deliver chilled to maintain nutrients and authentic texture.",
    Icon: IconFreshDelivery,
  },
  {
    title: "Thoughtful Packaging",
    description:
      "Fully recyclable and compostable containers—better for you and easier on the planet.",
    Icon: IconEcoPackaging,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="scroll-mt-28 bg-hm-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tighter text-hm-on-surface md:text-5xl">
            Built Like a Restaurant.
            <br />
            Priced Like a Plan.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="space-y-4 rounded-xl bg-hm-surface-low p-8 transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hm-primary-mid/10">
                <Icon className="h-7 w-7 text-hm-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-hm-on-surface">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
