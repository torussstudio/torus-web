import { cn } from "@/lib/utils";
import { tsaChallenge as c } from "@/lib/constants";
import Lines from "../Lines";
import { t } from "../styles";

export default function ChallengeSection() {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[272fr_725fr_923fr]")}>
      <div className={cn(t.sideLabel, "md:col-span-2 xl:col-span-1 xl:row-span-3 xl:pt-96")}>
        <span className={t.label}>{c.label}</span>
      </div>

      <h2 data-reveal className={cn(t.h2, "px-24 pt-14 md:px-40 md:pb-48 xl:pb-0 xl:pt-74 xl:pr-0 xl:pl-89")}>
        <Lines lines={c.heading} />
      </h2>

      <div className="px-24 pt-28 pb-48 md:px-40 md:pt-20 xl:col-start-3 xl:pt-92 xl:pr-0 xl:pb-83 xl:pl-131 xl:*:max-w-645">
        <p data-reveal className={t.body}>
          {c.intro}
        </p>
        <p data-reveal className={cn(t.body, "mt-24 xl:mt-48")}>
          {c.leadIn}
        </p>
        <p data-reveal className={cn(t.lead, "mt-6")}>
          {c.highlight}
        </p>
      </div>

      {/* MEDIA — placeholder until the image is provided */}
      <div
        data-reveal="media"
        aria-hidden="true"
        className="relative aspect-[4/3] w-full bg-[#38362e] md:col-span-2 md:aspect-[1648/512] xl:col-span-2 xl:col-start-2"
      />

      <div className="px-24 py-36 md:px-40 md:py-48 xl:pt-73 xl:pr-0 xl:pb-78 xl:pl-89">
        <p data-reveal className={cn(t.body, "xl:max-w-518")}>
          {c.left}
        </p>
      </div>

      <div className="border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-48 xl:border-l xl:pt-73 xl:pr-0 xl:pb-78 xl:pl-131">
        {c.right.map((text, i) => (
          <p
            key={i}
            data-reveal
            className={cn(t.body, "xl:max-w-608", i > 0 && "mt-18 xl:mt-30")}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
