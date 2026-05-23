"use client";

import Image from "next/image";
import { HiArrowTurnDownRight } from "react-icons/hi2";

import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "w-full",
        "bg-[#e9e8e6]",
        "border-t",
        "border-black/40"
      )}
    >
      {/* TOP GRID */}
      <div
        className={cn(
          "grid",
          "grid-cols-[96px_1fr]",
          "md:grid-cols-[96px_1fr]",
          "border-b",
          "border-black/40",
          "max-md:grid-cols-1"
        )}
      >
        {/* LEFT VERTICAL */}
        <div
          className={cn(
            "border-r",
            "border-black/40",
            "flex",
            "items-center",
            "justify-center",
            "max-md:hidden"
          )}
        >
          <span
            className={cn(
              "text-[28px]",
              "tracking-[0.22em]",
              "uppercase",
              "text-black/40",
              "font-think",
              "font-normal"
            )}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Get In Touch
          </span>
        </div>

        {/* MOBILE LABEL */}
        <div
          className={cn(
            "hidden",
            "max-md:flex",
            "items-center",
            "justify-center",
            "h-[52px]",
            "border-b",
            "border-black/40"
          )}
        >
          <span
            className={cn(
              "text-[16px]",
              "tracking-[0.22em]",
              "uppercase",
              "text-black/40",
              "font-think",
              "font-normal"
            )}
          >
            Get In Touch
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HERO AREA */}
          <div
            className={cn(
              "grid",
              "grid-cols-[0.78fr_1.22fr]",
              "border-b",
              "border-black/40",
              "max-md:grid-cols-1"
            )}
          >
            {/* IMAGE */}
            <div
              className={cn(
                "relative",
                "h-[420px]",
                "border-r",
                "border-black/40",
                "max-md:h-[260px]",
                "max-md:border-r-0",
                "max-md:border-b",
                "max-md:border-black/40"
              )}
            >
              <Image
                src="/trust-hero.jpg"
                alt="Footer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>

            {/* TEXT */}
            <div
              className={cn(
                "px-[42px]",
                "pt-[120px]",
                "max-md:px-[24px]",
                "max-md:pt-[40px]",
                "max-md:pb-[40px]"
              )}
            >
              <h2
                className={cn(
                  "text-[60px]",
                  "leading-[0.92]",
                  "tracking-[-0.03em]",
                  "uppercase",
                  "text-[#111]",
                  "font-display",
                  "md:text-[48px]",
                  "max-md:text-[36px]",
                  "max-md:leading-[1]"
                )}
              >
                LET'S SHAPE WHAT'S NEXT.
              </h2>

              <p
                className={cn(
                  "mt-[34px]",
                  "max-w-[520px]",
                  "text-[17px]",
                  "leading-[1.25]",
                  "text-black/60",
                  "font-rethink",
                  "max-md:mt-[20px]",
                  "max-md:text-[15px]"
                )}
              >
                If you're building, rethinking, or evolving something
                meaningful, we'd love to understand where you are headed. No
                pitch. No rush. Just a light conversation to begin with.
              </p>
            </div>
          </div>

          {/* SOCIAL ROW */}
          <div
            className={cn(
              "grid",
              "grid-cols-[1fr_620px]",
              "max-md:grid-cols-1",
              "max-lg:grid-cols-1"
            )}
          >
            {/* SOCIALS */}
            <div
              className={cn(
                "h-[104px]",
                "border-r",
                "border-black/40",
                "flex",
                "items-center",
                "px-[72px]",
                "max-lg:border-r-0",
                "max-lg:border-b",
                "max-lg:border-black/40",
                "max-md:h-auto",
                "max-md:px-[24px]",
                "max-md:py-[28px]",
                "max-md:justify-center"
              )}
            >
              <div
                className={cn(
                  "flex",
                  "items-center",
                  "gap-[72px]",
                  "max-md:gap-[28px]",
                  "max-md:flex-wrap",
                  "max-md:justify-center"
                )}
              >
                {[
                  "INSTAGRAM",
                  "BEHANCE",
                  "LINKEDIN",
                  "PINTEREST",
                ].map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "text-[20px]",
                      "tracking-[0.18em]",
                      "uppercase",
                      "text-black/45",
                      "font-think",
                      "cursor-pointer",
                      "hover:text-black",
                      "transition-colors",
                      "max-md:text-[13px]",
                      "max-md:tracking-[0.12em]"
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className={cn(
                "h-[104px]",
                "flex",
                "items-center",
                "justify-center",
                "max-md:h-[80px]"
              )}
            >
              <button
                className={cn(
                  "group",
                  "flex",
                  "items-center",
                  "gap-2",
                  "hover:gap-4",
                  "transition-all",
                  "duration-300",
                  "text-[#8BAF72]",
                  "mr-[55px]",
                  "cursor-pointer",
                  "max-md:mr-0"
                )}
              >
                <HiArrowTurnDownRight
                  className={cn(
                    "text-[24px]",
                    "stroke-[0.2]",
                    "mb-[8px]",
                    "transition-transform",
                    "duration-300",
                    "group-hover:translate-x-[4px]",
                    "max-md:text-[20px]"
                  )}
                />

                <span
                  className={cn(
                    "text-[20px]",
                    "tracking-[0.04em]",
                    "uppercase",
                    "font-rethink",
                    "max-md:text-[16px]"
                  )}
                >
                  Start A Conversation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div
        className={cn(
          "grid",
          "grid-cols-2",
          "border-b",
          "border-black/40",
          "max-md:grid-cols-1"
        )}
      >
        {/* LEFT */}
        <div
          className={cn(
            "px-[94px]",
            "py-[54px]",
            "max-md:px-[24px]",
            "max-md:py-[36px]",
            "max-md:border-b",
            "max-md:border-black/40"
          )}
        >
          <div
            className={cn(
              "flex",
              "items-center",
              "gap-[48px]",
              "text-[20px]",
              "tracking-[0.16em]",
              "uppercase",
              "text-black/80",
              "font-think",
              "max-md:gap-[24px]",
              "max-md:text-[15px]"
            )}
          >
            <span>10°46'41.5"N</span>

            <span className="text-black/40">|</span>

            <span>76°39'22.0"E</span>
          </div>

          <h1
            className={cn(
              "mt-[32px]",
              "text-[100px]",
              "leading-none",
              "tracking-[0.08em]",
              "uppercase",
              "text-black/10",
              "font-display",
              "whitespace-nowrap",
              "max-lg:text-[72px]",
              "max-md:text-[48px]",
              "max-md:mt-[20px]",
              "max-md:whitespace-normal"
            )}
          >
            TORUSS STUDIO
          </h1>
        </div>

        {/* RIGHT */}
        <div
          className={cn(
            "px-[90px]",
            "py-[54px]",
            "flex",
            "flex-col",
            "gap-[38px]",
            "ml-[160px]",
            "max-lg:ml-0",
            "max-lg:px-[48px]",
            "max-md:px-[24px]",
            "max-md:py-[36px]",
            "max-md:gap-[24px]"
          )}
        >
          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-black/80",
              "font-think",
              "max-md:text-[15px]"
            )}
          >
            +91-81296 75834
          </span>

          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-black/80",
              "font-think",
              "max-md:text-[15px]"
            )}
          >
            INFO@TORUSS.STUDIO
          </span>

          <span
            className={cn(
              "text-[18px]",
              "tracking-[0.12em]",
              "uppercase",
              "text-black/80",
              "font-think",
              "whitespace-nowrap",
              "max-md:text-[15px]",
              "max-md:whitespace-normal"
            )}
          >
            PALAKKAD, KERALA, INDIA - 678001
          </span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className={cn(
          "h-[94px]",
          "flex",
          "items-center",
          "justify-center",
          "max-md:h-auto",
          "max-md:py-[28px]",
          "max-md:px-[16px]"
        )}
      >
        <span
          className={cn(
            "text-[20px]",
            "tracking-[0.16em]",
            "uppercase",
            "text-black/70",
            "font-think",
            "max-md:text-[12px]",
            "max-md:tracking-[0.10em]",
            "max-md:text-center"
          )}
        >
          © 2026 TORUSS STUDIO. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}