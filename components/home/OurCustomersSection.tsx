import React from "react";
import Image from "next/image";
import { SectionPlansCta } from "@/components/home/SectionPlansCta";

const customers = [
  {
    src: "/hm-stories/customers-burj.jpg",
    alt: "Farhana Bodi with Nutritionist Chef Radhey in Dubai, Burj Khalifa behind them",
    name: "Farhana Bodi",
    role: "Netflix · Dubai Bling",
    story:
      "Global fashion icon and Dubai Bling star Farhana Bodi has kept an 11-year culinary partnership with Nutritionist Chef Radhey, the culinary brain behind NutriChef Dubai. Her routine skips restrictive fad diets. The plates are clean, macro-balanced fuel for filming and travel.",
    plate: [
      "Omega-3 rich salmon cakes for radiant, camera-ready skin.",
      "Fresh avocado for sustained energy and healthy fats.",
    ],
  },
  {
    src: "/hm-stories/customers-mall.jpg",
    alt: "Sahil Khan with Nutritionist Chef Radhey in Dubai",
    name: "Sahil Khan",
    role: "Dubai · Fitness",
    story:
      "Sahil Khan, in Dubai. He is known for the films Style and Xcuse Me, then built a fitness career around training and nutrition. As a VVIP customer, his Healthy Minds plates stay high-protein and ready between those days.",
    plate: [
      "High-protein plates between training sessions.",
      "Weighed meals, ready when the day is already full.",
    ],
  },
] as const;

export const OurCustomersSection = () => {
  return (
    <section
      id="customers"
      className="scroll-mt-28 bg-hm-surface-low py-16 sm:py-24"
      aria-labelledby="vvip-customers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
          VVIP Customers
        </span>
        <h2
          id="vvip-customers-heading"
          className="font-heading mb-8 text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-12 sm:text-5xl sm:leading-[0.9] sm:tracking-tighter md:text-7xl"
        >
          People We Cook For.
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
          {customers.map((customer) => (
            <article
              key={customer.name}
              className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/70"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={customer.src}
                  alt={customer.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hm-primary">
                  {customer.role}
                </p>
                <h3
                  className="notranslate font-heading mt-2 text-2xl font-black tracking-tight text-hm-on-surface"
                  translate="no"
                >
                  {customer.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{customer.story}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-hm-on-surface">
                  {customer.plate.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hm-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <SectionPlansCta />
      </div>
    </section>
  );
};
