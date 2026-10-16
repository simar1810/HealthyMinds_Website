import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogPost } from "@/lib/blog/types";

function BlogTableOfContents({ items }: { items: { id: string; text: string }[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
        On this page
      </p>
      <ol className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-flex min-h-11 items-center text-sm leading-snug text-slate-600 transition hover:text-hm-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BlogPostLayout({
  post,
  toc,
  children,
}: {
  post: BlogPost;
  toc: { id: string; text: string }[];
  children: ReactNode;
}) {
  return (
    <section className="bg-hm-surface px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <div className="min-w-0">{children}</div>
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <BlogTableOfContents items={toc} />
            <div className="rounded-2xl border border-hm-primary/25 bg-hm-primary/[0.06] p-6">
              <p className="font-heading text-lg font-bold leading-snug text-hm-on-surface">
                {post.cta.heading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.cta.text}</p>
              <Link
                href={post.cta.buttonHref}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-hm-primary px-6 text-sm font-bold text-white transition hover:bg-hm-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
              >
                {post.cta.buttonLabel}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
