import { cn } from "@/lib/utils";
import { tsaQuestion as q } from "@/lib/constants";
import Media from "../Media";
import { t } from "../styles";

export default function QuestionSection() {
  return (
    <section className={cn(t.inner, "flex flex-col border-b py-48 md:flex-row md:items-center md:gap-32 md:py-64 md:pr-40 xl:gap-0 xl:pr-0 xl:flex-row xl:items-center xl:py-90")}>
      {/* half-capsule panel */}
      <div className="w-[calc(100%-24px)] rounded-r-full border border-l-0 py-36 pr-64 pl-24 md:w-[62%] md:shrink-0 md:py-56 md:pr-88 md:pl-40 xl:grid xl:min-h-637 xl:w-1115 xl:shrink-0 xl:grid-cols-[147fr_968fr] xl:p-0">
        <div className="flex items-center pb-16 xl:justify-center xl:border-r xl:pb-0">
          <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
            {q.label}
          </span>
        </div>

        <div className="self-center xl:py-40 xl:pl-125 xl:*:max-w-640">
          <p data-reveal className={t.body}>
            {q.body}
          </p>
          <p data-reveal className={cn(t.lead, "mt-18 xl:mt-28")}>
            {q.question}
          </p>
        </div>
      </div>

      <Media
        media={q.image}
        className="mx-24 mt-32 aspect-[572/640] h-auto w-auto md:m-0 md:flex-1 xl:m-0 xl:flex-none xl:ml-81 xl:aspect-auto xl:h-640 xl:w-572 xl:shrink-0"
        sizes="(max-width: 1023px) 100vw, 30vw"
      />
    </section>
  );
}
