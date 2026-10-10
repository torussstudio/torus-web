import { cn } from "@/lib/utils";
import { t } from "./styles";

export type ReflectionsData = {
  heading: string;
  /** optional short line above the statement (Exult) */
  intro?: string;
  statement: string;
  note: string;
};

export default function ReflectionsSection({ data: d }: { data: ReflectionsData }) {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-[1fr_1.6fr] xl:min-h-785 xl:grid-cols-[698fr_1222fr]")}>
      <div className="relative flex min-h-200 items-center border-b pl-24 md:min-h-[380px] md:border-r md:border-b-0 md:pl-40 xl:min-h-0 xl:border-r xl:border-b-0 xl:pl-165">
        {/* outlined half-circle */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px -bottom-px left-[35%] w-100 rounded-r-full border border-l-0 md:-right-px md:left-[38%] md:w-auto xl:-right-px xl:left-305 xl:w-auto"
        />
        <h2 data-reveal className={cn(t.h2, "relative xl:-mt-11")}>
          {d.heading}
        </h2>
      </div>

      <div className="flex flex-col justify-center px-24 pt-40 pb-48 md:px-48 md:py-64 xl:py-60 xl:pr-60 xl:pl-121">
        {d.intro && (
          <p data-reveal className={cn(t.body, "mb-16 xl:mb-41")}>
            {d.intro}
          </p>
        )}
        <p data-reveal className={cn(t.lead, "xl:max-w-975")}>
          {d.statement}
        </p>
        <p data-reveal className={cn(t.body, "mt-20 leading-[1.5] xl:mt-52 xl:max-w-790 xl:leading-[1.2]")}>
          {d.note}
        </p>
      </div>
    </section>
  );
}
