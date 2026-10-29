import { cn } from "@/lib/utils";
import { medtechChallenge as c } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";

export default function ChallengeSection() {
  return (
    <section className={cn(t.inner, "grid grid-cols-1 border-b md:grid-cols-2 xl:grid-cols-[272fr_735fr_913fr]")}>
      <div className={cn(t.sideLabel, "md:col-span-2 xl:col-span-1 xl:row-span-3 xl:pt-96")}>
        <span className={t.label}>{c.label}</span>
      </div>

      <h2 data-reveal className={cn(t.h2, "px-24 pt-14 md:px-40 md:pb-48 xl:pt-74 xl:pr-0 xl:pb-0 xl:pl-89")}>
        <Lines lines={c.heading} />
      </h2>

      {/* intro paras, then the lead-in + large highlight in the same column */}
      <div className="px-24 pt-28 pb-48 md:px-40 md:pt-20 xl:pt-93 xl:pr-0 xl:pb-96 xl:pl-121 xl:*:max-w-625">
        {c.intro.map((text, i) => (
          <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-33")}>
            {text}
          </p>
        ))}

        <p data-reveal className={cn(t.body, "mt-32 xl:mt-58 xl:max-w-560")}>
          {c.leadIn}
        </p>
        <p
          data-reveal
          className="mt-14 text-[length:clamp(22px,4vw,30px)] leading-[1.2] tracking-[0.05em] xl:mt-20 xl:max-w-590 xl:text-[length:max(20px,calc(var(--spacing)*43.9))]"
        >
          {c.highlight}
        </p>
      </div>

      {/* full-width image band */}
      <div className="border-t md:col-span-2">
        <Media
          media={c.image}
          className="aspect-[1648/513] h-auto xl:aspect-auto xl:h-513"
          sizes="(max-width: 1023px) 100vw, 86vw"
        />
      </div>

      <div className="border-t px-24 py-36 md:px-40 md:py-48 xl:pt-58 xl:pr-0 xl:pb-59 xl:pl-89">
        {c.left.map((text, i) => (
          <p key={i} data-reveal className={cn(t.body, "xl:max-w-522", i > 0 && "mt-16 xl:mt-26")}>
            {text}
          </p>
        ))}
      </div>

      <div className="border-t px-24 py-36 md:border-l md:px-40 md:py-48 xl:pt-58 xl:pr-0 xl:pb-59 xl:pl-121">
        {c.right.map((text, i) => (
          <p key={i} data-reveal className={cn(t.body, "xl:max-w-620", i > 0 && "mt-16 xl:mt-26")}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}