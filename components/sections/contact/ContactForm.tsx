"use client";

import { useState, type FormEvent } from "react";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import SideLabel from "@/components/sections/archive/SideLabel";
import { t } from "@/components/sections/archive/styles";

type Interest = { id: string; title: string; description: string };

const field =
  "mt-12 block w-full border-b border-[#bdb9ac] bg-transparent pb-14 text-[20px] leading-[1.3] tracking-[0.03em] text-[#171717] outline-none transition-colors duration-200 focus:border-[#38362e] xl:mt-22 xl:pb-24 xl:text-[length:max(18px,calc(var(--spacing)*34))]";

// number + title turn black while the field inside the label is focused
const focus = "transition-colors duration-200 group-focus-within:text-[#171717]";

const num = (n: number) => `[ ${String(n).padStart(2, "0")} ]`;

/**
 * Enquiry form in two bordered rows: what the visit is about (the studio's
 * five areas of practice, pick any) and the details. There is no mail backend
 * yet, so "Send" opens the visitor's email app with the message written out.
 */
export default function ContactForm({
  email,
  interests,
}: {
  email: string;
  interests: Interest[];
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const picked = data.getAll("interest").map(String);

    const lines = [
      get("message"),
      "",
      picked.length ? `Interested in: ${picked.join(", ")}` : "",
      get("company") ? `Company / project: ${get("company")}` : "",
      "",
      get("name"),
      get("email"),
    ].filter((l, i, a) => l !== "" || (a[i - 1] !== "" && i !== 0));

    const subject = `Enquiry from ${get("name")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* row — what brings you here */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label="Interested in" />

        <ul>
          {interests.map((it, i) => (
            <li key={it.id} data-reveal className={cn(i > 0 && "border-t")}>
              <label className="group flex cursor-pointer items-start gap-16 px-24 py-24 transition-colors duration-300 hover:bg-[#f1efe6] has-[:checked]:bg-[#eae6dc] md:gap-24 md:px-40 md:py-32 xl:grid xl:grid-cols-[120fr_760fr_768fr] xl:items-center xl:gap-0 xl:px-0 xl:py-0 xl:pt-48 xl:pb-50 xl:pl-98">
                <input
                  type="checkbox"
                  name="interest"
                  value={it.title}
                  className="peer sr-only"
                />

                <span className="flex items-center gap-14 xl:gap-20">
                  <span
                    aria-hidden="true"
                    className="size-10 border border-[#38362e] transition-colors duration-200 group-has-[:checked]:bg-[#3da32e] group-has-[:checked]:border-[#3da32e] xl:size-[max(10px,calc(var(--spacing)*14))]"
                  />
                  <span className={cn(t.tag, "xl:text-[length:max(11px,calc(var(--spacing)*18))]")}>
                    {num(i + 1)}
                  </span>
                </span>

                <span className="font-trial text-[length:clamp(24px,5vw,34px)] leading-[1.15] xl:text-[length:max(26px,calc(var(--spacing)*54))]">
                  {it.title}
                </span>

                <span className={cn(t.body, "hidden max-w-[460px] text-[#6e6c62] md:block xl:max-w-440")}>
                  {it.description}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* row — the details */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <SideLabel label="Your details" />

        <div className="grid grid-cols-1 gap-x-0 gap-y-32 px-24 py-40 md:grid-cols-2 md:gap-x-48 md:gap-y-48 md:px-40 md:py-64 xl:gap-x-100 xl:gap-y-80 xl:px-0 xl:py-0 xl:pt-110 xl:pr-160 xl:pb-120 xl:pl-98">
          <label data-reveal className="group block">
            <span className={cn(t.tag, focus)}>{num(1)}</span>
            <span className={cn(t.label, focus, "mt-6 xl:mt-10")}>Your name</span>
            <input name="name" type="text" required autoComplete="name" className={field} />
          </label>

          <label data-reveal className="group block">
            <span className={cn(t.tag, focus)}>{num(2)}</span>
            <span className={cn(t.label, focus, "mt-6 xl:mt-10")}>Email</span>
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>

          <label data-reveal className="group block md:col-span-2">
            <span className={cn(t.tag, focus)}>{num(3)}</span>
            <span className={cn(t.label, focus, "mt-6 xl:mt-10")}>Company or project (optional)</span>
            <input name="company" type="text" autoComplete="organization" className={field} />
          </label>

          <label data-reveal className="group block md:col-span-2">
            <span className={cn(t.tag, focus)}>{num(4)}</span>
            <span className={cn(t.label, focus, "mt-6 xl:mt-10")}>A little about what you&rsquo;re building</span>
            <textarea name="message" required rows={4} className={cn(field, "resize-none")} />
          </label>

          <div
            data-reveal
            className="flex flex-wrap items-center justify-between gap-x-32 gap-y-16 md:col-span-2 xl:mt-10"
          >
            <button
              type="submit"
              className="group inline-flex cursor-pointer items-center gap-10 text-[16px] leading-[1.3] tracking-[0.05em] text-[#3da32e] uppercase xl:gap-16 xl:text-[length:max(16px,calc(var(--spacing)*30))]"
            >
              <HiArrowTurnDownRight
                aria-hidden="true"
                className="-mt-4 size-16 transition-transform duration-300 group-hover:translate-x-4 xl:-mt-8 xl:size-[max(16px,calc(var(--spacing)*30))]"
              />
              <span>Send enquiry</span>
            </button>

            <span role="status" className={cn(t.label, "xl:text-[length:max(12px,calc(var(--spacing)*20))]")}>
              {sent ? "Opening your email app" : "No pitch. No rush."}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
