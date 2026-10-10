import Link from "next/link";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { archiveHref, type ArchiveProjectSummary } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

// shared hover motion for the title / meta / thumbnail of a row
const motion =
  "transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export default function NextProjectSection({
  items,
  allHref,
}: {
  /** projects to list (the other archive projects) */
  items: ArchiveProjectSummary[];
  /** "All Archive" link — hidden until the archive listing page exists */
  allHref?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className={cn(t.inner, "px-24 py-48 md:px-40 md:py-64 xl:px-154 xl:pt-107", allHref ? "xl:pb-104" : "xl:pb-150")}>
      <div className={cn(t.body, "flex items-center gap-14 xl:gap-20")}>
        <span>Next Project</span>
        <span aria-hidden="true" className="h-px w-40 bg-[#38362e] xl:w-53" />
        <span>Archive</span>
      </div>

      <div className="mt-28 border-t md:mt-40 xl:mt-70">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={archiveHref(item.slug)}
            className="group grid grid-cols-[1fr_auto] items-center gap-x-16 gap-y-8 border-b py-20 transition-colors duration-[450ms] [grid-template-areas:'title_thumb'_'meta_thumb'] hover:bg-[#eae6dc] focus-visible:bg-[#eae6dc] motion-reduce:transition-none md:grid-cols-[1.3fr_1fr_auto] md:gap-x-24 md:px-16 md:py-24 md:[grid-template-areas:none] xl:px-0 xl:h-222 xl:grid-cols-[calc(var(--spacing)*837)_1fr_auto] xl:gap-0 xl:py-0 xl:[grid-template-areas:none]"
          >
            <span
              className={cn(
                motion,
                "text-[length:clamp(24px,5vw,34px)] leading-[1.2] tracking-[0.05em] [grid-area:title] md:text-[length:clamp(28px,3.4vw,42px)] md:[grid-area:auto]",
                "xl:text-[length:max(30px,calc(var(--spacing)*72))] xl:whitespace-nowrap xl:[grid-area:auto] xl:group-hover:translate-x-32 xl:group-focus-visible:translate-x-32",
              )}
            >
              {item.title}
            </span>

            <span
              className={cn(
                t.body,
                motion,
                "[grid-area:meta] md:[grid-area:auto] xl:group-hover:-translate-x-6 xl:group-focus-visible:-translate-x-6",
              )}
            >
              <span className="flex items-center gap-14 uppercase xl:gap-34">
                <span>{item.year}</span>
                <i aria-hidden="true" className="size-5 bg-[#38362e] xl:size-[max(5px,calc(var(--spacing)*8))]" />
                <span>{item.country}</span>
              </span>
              <span className="mt-4 block xl:mt-18">{item.category}</span>
            </span>

            <Media
              media={item.thumb}
              className={cn(
                motion,
                "h-70 w-96 [grid-area:thumb] md:h-[108px] md:w-[150px] md:[grid-area:auto] xl:h-152 xl:w-210 xl:[grid-area:auto] xl:group-hover:-translate-x-34 xl:group-focus-visible:-translate-x-34",
              )}
              sizes="220px"
            />
          </Link>
        ))}
      </div>

      {allHref && (
        <Link
          href={allHref}
          className="mt-36 flex items-center justify-center gap-8 text-[14px] leading-[1.3] tracking-[0.05em] uppercase text-[#3da32e] xl:mt-88 xl:gap-12 xl:text-[length:max(14px,calc(var(--spacing)*25.2))] [&:hover_svg]:translate-x-4"
        >
          <HiArrowTurnDownRight
            aria-hidden="true"
            className="-mt-4 size-14 transition-transform duration-300 xl:-mt-8 xl:size-[max(14px,calc(var(--spacing)*26))]"
          />
          <span>All Archive</span>
        </Link>
      )}
    </section>
  );
}
