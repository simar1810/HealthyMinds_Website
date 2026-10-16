import Link from "next/link";
import Image from "next/image";
import type { BlogBlock, ParagraphPart } from "@/lib/blog/types";
import { isExternalBlogHref, linkifyText, type LinkAnchorDefinition } from "@/lib/blog/linkify";
import { resolveHeadingId } from "@/lib/blog/utils";

const linkClass =
  "font-semibold text-hm-primary underline underline-offset-4 transition hover:text-hm-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary";

function RichParagraph({
  parts,
  as: Tag = "p",
}: {
  parts: ParagraphPart[];
  as?: "p" | "span";
}) {
  const className =
    Tag === "p" ? "text-base leading-relaxed text-slate-600 sm:text-lg" : undefined;

  return (
    <Tag className={className}>
      {parts.map((part, index) =>
        part.type === "text" ? (
          <span key={`${index}-${part.value.slice(0, 12)}`}>{part.value}</span>
        ) : isExternalBlogHref(part.href) ? (
          <a
            key={`${part.href}-${index}`}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {part.label}
          </a>
        ) : part.href.includes("#") ? (
          <a key={`${part.href}-${index}`} href={part.href} className={linkClass}>
            {part.label}
          </a>
        ) : (
          <Link key={`${part.href}-${index}`} href={part.href} className={linkClass}>
            {part.label}
          </Link>
        ),
      )}
    </Tag>
  );
}

function renderLinkifiedText(
  text: string,
  linkAnchors: readonly LinkAnchorDefinition[] | undefined,
  as: "p" | "span" = "p",
) {
  if (!linkAnchors?.length) {
    if (as === "p") {
      return <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{text}</p>;
    }
    return <>{text}</>;
  }

  const parts = linkifyText(text, linkAnchors);
  const hasLink = parts.some((part) => part.type === "link");
  if (!hasLink) {
    if (as === "p") {
      return <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{text}</p>;
    }
    return <>{text}</>;
  }

  return <RichParagraph as={as} parts={parts} />;
}

function BlogBlockRenderer({
  block,
  linkAnchors,
}: {
  block: BlogBlock;
  linkAnchors?: readonly LinkAnchorDefinition[];
}) {
  switch (block.type) {
    case "paragraph":
      return renderLinkifiedText(block.text, linkAnchors, "p");
    case "richParagraph":
      return <RichParagraph parts={block.parts} />;
    case "heading": {
      const id = resolveHeadingId(block);
      const headingClass =
        block.level === 2
          ? "scroll-mt-32 font-heading text-2xl font-black leading-tight tracking-tight text-hm-on-surface sm:text-3xl"
          : "scroll-mt-32 font-heading text-xl font-bold leading-snug tracking-tight text-hm-on-surface sm:text-2xl";
      const Tag = block.level === 2 ? "h2" : "h3";
      return (
        <Tag id={id} className={headingClass}>
          {block.text}
        </Tag>
      );
    }
    case "list": {
      const ListTag = block.style === "ordered" ? "ol" : "ul";
      const listClass =
        block.style === "ordered"
          ? "list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-600 sm:text-lg marker:font-semibold marker:text-hm-primary"
          : "space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg";
      return (
        <ListTag className={listClass}>
          {block.items.map((item) => {
            const parts = linkAnchors?.length ? linkifyText(item, linkAnchors) : null;
            const hasLink = parts?.some((part) => part.type === "link");
            return (
              <li
                key={item.slice(0, 48)}
                className={
                  block.style === "unordered"
                    ? "relative pl-6 before:absolute before:left-0 before:top-[0.65em] before:h-2 before:w-2 before:rounded-full before:bg-hm-primary"
                    : undefined
                }
              >
                {hasLink && parts ? <RichParagraph as="span" parts={parts} /> : item}
              </li>
            );
          })}
        </ListTag>
      );
    }
    case "table":
      return (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-hm-surface-low">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider text-hm-on-surface sm:px-5 sm:py-4"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={row.join("-")} className="border-b border-slate-200">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={`px-4 py-3 align-top text-slate-600 sm:px-5 sm:py-4 ${
                          cellIndex === 0 ? "font-semibold text-hm-on-surface" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="border-t border-slate-200 px-5 py-3 text-xs leading-relaxed text-slate-600">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "image":
      return (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={block.src}
            alt={block.alt}
            width={1200}
            height={800}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {block.caption ? (
            <figcaption className="border-t border-slate-200 px-5 py-3 text-sm text-slate-600">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "callout":
      return (
        <aside
          className={`rounded-2xl border px-6 py-5 sm:px-8 sm:py-6 ${
            block.variant === "highlight"
              ? "border-hm-primary/30 bg-hm-primary/[0.06]"
              : "border-slate-200 bg-hm-surface-low"
          }`}
        >
          {block.title ? (
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-hm-primary">
              {block.title}
            </p>
          ) : null}
          <p
            className={`${block.title ? "mt-2" : ""} text-base leading-relaxed text-hm-on-surface sm:text-lg`}
          >
            {block.text}
          </p>
        </aside>
      );
    case "divider":
      return <hr className="border-slate-200" />;
    default:
      return null;
  }
}

export function BlogArticleBody({
  blocks,
  linkAnchors,
}: {
  blocks: BlogBlock[];
  linkAnchors?: readonly LinkAnchorDefinition[];
}) {
  return (
    <article className="space-y-8 sm:space-y-10">
      {blocks.map((block, index) => (
        <BlogBlockRenderer key={`${block.type}-${index}`} block={block} linkAnchors={linkAnchors} />
      ))}
    </article>
  );
}
