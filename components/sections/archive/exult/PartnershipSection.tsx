import { cn } from "@/lib/utils";
import { exultPartnership as d } from "@/lib/constants";
import Media from "../Media";
import { t } from "../styles";

export default function PartnershipSection() {
  return (
    <section className={cn(t.inner, "flex flex-col border-b py-48 md:flex-row md:items-center md:gap-32 md:py-64 md:pr-40 xl:flex-row xl:items-center xl:gap-0 xl:py-90 xl:pr-0")}>
      {/* half-capsule panel */}
      <div className="w-[calc(100%-24px)] rounded-r-full border border-l-0 py-36 pr-64 pl-24 md:w-[62%] md:shrink-0 md:py-56 md:pr-88 md:pl-40 xl:grid xl:min-h-637 xl:w-1115 xl:shrink-0 xl:grid-cols-[147fr_968fr] xl:p-0">
        <div className="flex items-center pb-16 xl:justify-center xl:border-r xl:pb-0">
          <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
            {d.label}
          </span>
        </div>

        <div className="self-center xl:py-40 xl:pl-107">
          <p data-reveal className={cn(t.lead, "xl:max-w-720")}>
            {d.lead}
          </p>
          <p data-reveal className={cn(t.body, "mt-18 xl:mt-26 xl:max-w-697")}>
            {d.body}
          </p>
        </div>
      </div>

      <Media
        media={d.image}
        className="mx-24 mt-32 aspect-[572/638] h-auto w-auto md:m-0 md:flex-1 xl:m-0 xl:ml-81 xl:h-638 xl:w-572 xl:flex-none xl:shrink-0 xl:aspect-auto"
        sizes="(max-width: 1023px) 100vw, 30vw"
      />
    </section>
  );
}
