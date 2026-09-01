import React from "react";
import Link from "next/link";
import { CONTACT, whatsappLink } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-100 bg-white pb-12 pt-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-4 sm:px-6 lg:px-12">
        <div className="mb-[80px] flex w-full flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="flex w-full flex-col gap-[36px] lg:w-auto">
            <span className="text-[32px] font-black uppercase tracking-[0.1em] text-[#4F46E5]">
              HealthyMinds
            </span>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/plans"
                className="text-[13px] font-semibold tracking-tight text-[#878E99] hover:text-[#4F46E5]"
              >
                Plans & Packages
              </Link>
              <Link
                href="/menu"
                className="text-[13px] font-semibold tracking-tight text-[#878E99] hover:text-[#4F46E5]"
              >
                Menu
              </Link>
              <Link
                href="/faq"
                className="text-[13px] font-semibold tracking-tight text-[#878E99] hover:text-[#4F46E5]"
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className="text-[13px] font-semibold tracking-tight text-[#878E99] hover:text-[#4F46E5]"
              >
                Contact
              </Link>
              <a
                href={whatsappLink("Hi HealthyMinds, I'd like to know more about meal plans.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold tracking-tight text-[#878E99] hover:text-[#4F46E5]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[11.5px] font-semibold text-[#A0A5AE]">
              © 2026 HealthyMinds
            </span>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-[11.5px] font-semibold text-[#A0A5AE] transition-colors hover:text-[#2F3337]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[11.5px] font-semibold text-[#A0A5AE] transition-colors hover:text-[#2F3337]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="text-[12px] font-extrabold text-[#2F3337] hover:text-[#4F46E5]"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </footer>
  );
};
