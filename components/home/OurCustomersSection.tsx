import React from "react";
import Image from "next/image";

const customers = [
  {
    src: "/hm-stories/customers-burj.jpg",
    alt: "Healthy Minds customer",
    frame: "aspect-[3/4]",
  },
  {
    src: "/hm-stories/customers-mall.jpg",
    alt: "Healthy Minds customer",
    frame: "aspect-[3/4]",
  },
] as const;

export const OurCustomersSection = () => {
  return (
    <section
      id="customers"
      className="scroll-mt-28 bg-hm-surface-low py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
          Our Customers
        </span>
        <h2 className="font-heading mb-8 text-3xl font-black uppercase leading-[1.08] tracking-tight text-hm-on-surface sm:mb-12 sm:text-5xl sm:leading-[0.9] sm:tracking-tighter md:text-7xl">
          People We Cook For.
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {customers.map((customer) => (
            <div
              key={customer.src}
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${customer.frame}`}
            >
              <Image
                src={customer.src}
                alt={customer.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
