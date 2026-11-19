import { HiArrowTurnDownRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { footerContent as f, practices } from "@/lib/constants";
import Lines from "@/components/sections/archive/Lines";
import SideLabel from "@/components/sections/archive/SideLabel";
import { t } from "@/components/sections/archive/styles";
import ContactForm from "./ContactForm";

const bigLink =
  "group inline-flex items-center gap-12 font-trial text-[length:clamp(26px,7.4vw,56px)] leading-[1.1] break-all transition-opacity duration-300 hover:opacity-60 md:text-[length:clamp(40px,6.4vw,64px)] xl:gap-28 xl:break-normal xl:text-[length:max(40px,calc(var(--spacing)*96))]";

/**
 * Contact page — long, quiet, built from the same bordered grid as the
 * archive / home pages:
 *   1  statement
 *   2  what the visit is about + details (form)
 *   3  email · phone · studio · social
 * Everything comes from lib/constants (footerContent, practices).
 */
export default function ContactSection() {
  const phone = f.contact.find((c) => c.href?.startsWith("tel:"));
  const email = f.contact.find((c) => c.href?.startsWith("mailto:"));
  const address = f.contact.find((c) => !c.href);

  const interests = practices.map((p) => ({
    id: p.id,
    title: p.title.join(" "),
    description: p.description.join(" "),
  }));

  return (
    <section className={t.inner}>
      {/* 1 — statement */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label="Contact" />

        <div className="px-24 pt-24 pb-48 md:px-40 md:pt-56 md:pb-72 xl:px-0 xl:pt-150 xl:pr-98 xl:pb-130 xl:pl-98">
          <h1
            data-reveal
            className="font-trial text-[length:clamp(40px,10.5vw,84px)] leading-[1.04] tracking-normal xl:text-[length:max(54px,calc(var(--spacing)*148))]"
          >
            {f.cta.label}.
          </h1>

          <div className="mt-32 grid grid-cols-1 gap-16 md:mt-48 md:grid-cols-2 md:gap-48 xl:mt-96 xl:grid-cols-[760fr_768fr] xl:gap-0">
            {f.paragraphs.map((lines, i) => (
              <p key={i} data-reveal className={cn(t.intro, "xl:max-w-610")}>
                <Lines lines={lines} />
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 2 — form */}
      <ContactForm
        email={email?.href?.replace("mailto:", "") ?? ""}
        interests={interests}
      />

      {/* 3 — details */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label="Studio" />

        <div>
          <div
            data-reveal
            className="border-b px-24 py-32 md:px-40 md:py-48 xl:px-98 xl:pt-70 xl:pb-80"
          >
            <span className={t.label}>Write to us</span>
            <a href={email?.href} className={cn(bigLink, "mt-12 xl:mt-30")}>
              <span>{email?.label}</span>
              <HiArrowTurnDownRight
                aria-hidden="true"
                className="hidden size-[0.55em] shrink-0 text-[#3da32e] transition-transform duration-300 group-hover:translate-x-6 md:block"
              />
            </a>
          </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[600fr_560fr_488fr]">
          <li data-reveal className="px-24 py-32 md:px-40 md:py-56 xl:px-0 xl:pt-90 xl:pr-40 xl:pb-96 xl:pl-98">
            <span className={t.label}>Call</span>
            <p className="mt-12 text-[length:clamp(20px,3.6vw,26px)] leading-[1.2] tracking-[0.05em] xl:text-[length:max(20px,calc(var(--spacing)*40))] xl:mt-28 xl:whitespace-nowrap">
              <a href={phone?.href} className="transition-opacity duration-200 hover:opacity-60">
                {phone?.label}
              </a>
            </p>
          </li>

          <li data-reveal className="border-t px-24 py-32 md:border-t-0 md:border-l md:px-40 md:py-56 xl:px-0 xl:pt-90 xl:pr-40 xl:pb-96 xl:pl-60">
            <span className={t.label}>Visit</span>
            <p className="mt-12 text-[length:clamp(20px,3.6vw,26px)] leading-[1.2] tracking-[0.05em] xl:text-[length:max(20px,calc(var(--spacing)*40))] xl:mt-28 xl:max-w-420">{address?.label}</p>
          </li>

          <li data-reveal className="border-t px-24 py-32 md:border-t-0 md:border-l md:px-40 md:py-56 xl:px-0 xl:pt-90 xl:pr-40 xl:pb-96 xl:pl-60">
            <span className={t.label}>Follow</span>
            <ul className="mt-12 space-y-6 xl:mt-28 xl:space-y-12">
              {f.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(t.body, "inline-flex items-center gap-12 uppercase transition-opacity duration-200 hover:opacity-60 xl:gap-16")}
                  >
                    <s.icon aria-hidden="true" className="size-[1em] shrink-0" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}
