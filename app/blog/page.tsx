import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog/registry";
import { formatBlogDate } from "@/lib/blog/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Healthy Minds Restaurant",
  },
  description:
    "Guides from Chef Radhey and the Healthy Minds kitchen on protein, plates, and meal plans in Dubai.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-hm-surface px-4 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-24 sm:pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
      <div className="mx-auto max-w-5xl">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
          Blog
        </p>
        <h1 className="font-heading mt-3 text-4xl font-black tracking-tight text-hm-on-surface sm:text-5xl">
          From the kitchen
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Numbers, plates, and the checks Chef Radhey uses before a meal plan leaves Business Bay.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
            No articles yet. The menu and plans are still open.
          </p>
        ) : (
          <ul className="mt-12 space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-hm-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary sm:grid-cols-[12rem_minmax(0,1fr)]"
                >
                  {post.coverImage ? (
                    <div className="relative h-48 sm:h-auto sm:min-h-44">
                      <Image
                        src={post.coverImage.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-hm-primary">
                      {post.category}
                    </p>
                    <h2 className="font-heading mt-2 text-2xl font-black leading-tight text-hm-on-surface group-hover:text-hm-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
                    <p className="mt-4 text-xs font-semibold text-slate-500">
                      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                      <span aria-hidden> · </span>
                      {post.readTimeMinutes} min read
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
