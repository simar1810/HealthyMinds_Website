import React from "react";
import Image from "next/image";

const featured = {
  quote:
    "Finally, healthy food that actually tastes like it was made in a kitchen, not a factory.",
  handle: "@sarah_wellness",
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQs0KwgyMFhOilXaAnYKPB1LrFZRCVKGf6pSHNcLhuSeH6KM99c96aewzPjw5l7FkVOFfNlm-1VTMmbzjb2McVdlTsPKowisQIWqKLhLS_tbh3qTf-x7s0eM7Jjns4fXWn7oyo8BhRLQ3uXxXpKSRRkM8tGHJZqEnzN7H3-2zxGhqIdA0CtSkj9y6ugSjU4oPW8g1WRBiIZOJvbM11wjRIIxQBlrPfTcSuVZY7L9jDCw2Fl0gSJFQ1r2ZRNMB224mhCBFCJIzg4TtC",
};

const gridImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuALb__T2g3_yYveIco71Od2_zkMVOiC7jPu3kW60Cngjg8VLxgnGMflI5L_jIuaBTjQ_sT8EUf1UpViKKrjTR4t64uD71cJBEv_QB0dq-mr74O7Y2qB2V_3-c9gFIlR-bFX6huaHfQ-Z_M80Xa_9xQnmUlJORzbU00BKxNZyv3gZcd2ocUryrA5oSYlM-j2H-M4LcBtT2oviAnYLcWWyCHyE3KOAkI9eSSUoPFM_vPyvt22-nAHK2hQnxrJ3803ENNRnUSXHYOCv1Z2",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOzyHYson5KGwgLJjNnKgw3ClPEjj19c1ZIfkqw-8HzhuO5Q9QmoaxXtWfYMW6hkXOIIHB4OYs6IGWEfwotRBHrHksDq9vRstmns-iz-xblVT2taTaPjJ-5ZyKodnYE6mTNLlhU29Ga9dzOeTls94HPGuMZX7lUNaYjI_dZlZPBiGLqP4rDFwp3XC__IcqOCyulnWgtcx6z3uJXiXbDZuprggOI9Dhv-EawBVQIxK4v2-9M7szZQg1wcJSkM3K4EDBiKmZ6TEWw1Iq",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPlz8-gIVDmoknld2Xz_GYhwk7Ra5Bap_7Xa_kuaMb-QCkX1KtCqYrBHg0XILBjGAeMm1o2bZOwEmse0RcFNyAeN7mjdohVcwtm05wK1wdzBbiqmqiq-2N6xQqnuQe--UQLeX0gqe4FUmwJxHJZ-L5EDEXIPbaoAyWDRT5vOLrSAGUikgTeLC_-JRR2JgYiQ6v1Gtg_Zsb_MrRmNjJ1sPRPKGQhIcgyn0V0JsPh4nT0TIx6MxPToBtjeG0n03AzULij35G737KZeBi",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyY1UirLtTZOKErtA6znd_8aqiZxSKox8cHk21iZSBCp7y_T_FfKiK5ma6CDCvcju2funwsnRILdf0AdnoJ8dKS-CK2F93Q2xgpAcGoycmjvn7ipVg5bnyk8IViEwbcCeQCIgXUsgD3rOmI4NJpoQ3WgxY66WyoKVut6cqVIlU0ehBbm0ArtbzCfr6dp91EL-TF2wIruHTNFFHPxrqM5au6FKjo5sxsMy7ykoXVXYxhtbJz8zszM3JfNwpRwJjWs-lqYMjKPnMvpxM",
];

export const CommunitySection = () => {
  return (
    <section id="community" className="scroll-mt-28 overflow-hidden bg-hm-surface-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          <div className="md:w-1/2">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
              Community feed
            </span>
            <h2 className="font-heading mb-12 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-hm-on-surface md:text-7xl">
              Real People.
              <br />
              Real Plates.
            </h2>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={featured.img}
                alt="Healthy Minds community member with a fresh meal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="mb-2 text-xl font-bold italic">&ldquo;{featured.quote}&rdquo;</p>
                <p className="font-sans text-sm font-bold uppercase tracking-widest">
                  — {featured.handle}
                </p>
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 md:mt-24">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={gridImages[0]} alt="" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={gridImages[1]} alt="" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={gridImages[2]} alt="" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={gridImages[3]} alt="" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
