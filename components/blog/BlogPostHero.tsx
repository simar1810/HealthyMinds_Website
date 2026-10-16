import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog/types";
import { formatBlogDate } from "@/lib/blog/utils";

export function BlogPostHero({ post }: { post: BlogPost }) {
  return (
    <section className="border-b border-slate-200 bg-hm-surface px-4 pb-10 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-14 sm:pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li>
              <Link
                href="/"
                className="rounded-sm transition hover:text-hm-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/blog"
                className="rounded-sm transition hover:text-hm-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-hm-on-surface" aria-current="page">
              {post.category}
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">
            {post.category}
          </p>
          <h1 className="font-heading mt-3 text-3xl font-black leading-tight tracking-tight text-hm-on-surface sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{post.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-8 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-hm-on-surface">{post.author.name}</p>
              {post.author.role ? <p className="text-xs">{post.author.role}</p> : null}
            </div>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span>
              {post.readTimeMinutes} min read
            </span>
          </div>
        </div>

        {post.coverImage ? (
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
