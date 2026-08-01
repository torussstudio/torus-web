import Image from "next/image";
import { bullets } from "@/lib/constants";

function DotGridIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <rect
        x="0"
        y="0"
        width="4"
        height="4"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="0"
        y="10"
        width="4"
        height="4"
        fill="currentColor"
        opacity="0.5"
      />
      <rect x="10" y="5" width="4" height="4" fill="currentColor" />
    </svg>
  );
}



export default function StudioHowWeThink() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      {/* Hero-yude same max-width container & padding scale continue cheyyunnu,
          full page-il consistent width kittan (1728px freeze, same breakpoints).
          Top padding reduce cheythu — munpu ivide vere whitespace koodi undayirunnu. */}
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2 sm:pt-3 lg:pt-4 pb-14 sm:pb-16 lg:pb-24">
        {/* ============ HEADING ============ */}
        {/* Ee row-inu matram width kurachu, centered aakki — image grid-inu
            athinte own full width venam, athukond wrapper heading-il oteungi. */}
        <div className="lg:max-w-[80%] xl:max-w-[68%] 2xl:max-w-[62%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-6">
          <h2 className="lg:col-span-6 font-nova text-[2.1rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[3.4rem] xl:text-[3.6rem] leading-[1.05] tracking-[0.01em] text-[#181818]">
            HOW
            <br />
            WE THINK
          </h2>

          <p className="lg:col-span-4 lg:col-start-9 self-start pt-2 font-nixie text-[13px] sm:text-[17px] leading-[1.7] text-[#181818] text-left lg:text-right">
            We believe good design often <br></br> behaves quietly.
          </p>
        </div>

        {/* ============ 3-IMAGE GRID + GREEN QUOTE ============ */}
        <div className="mt-10 sm:mt-12 lg:mt-16 lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6 items-start">
          {/* Col 1 — tall portrait image, defines the row height */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
            <Image
              src="/images/artwork1.avif"
              alt="How we think"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Col 2 — shorter image on top, green quote fills the remaining
              height so its bottom aligns with col 1's bottom edge */}
          <div className="flex flex-col gap-6 sm:gap-8 h-full">
            <div className="relative w-full h-[190px] sm:h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
              <Image
                src="/images/curiosity.avif"
                alt="How we think"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="font-nixie text-[13px] sm:text-[25px] leading-[1.7] text-[#80c46c] max-w-[200px] sm:max-w-[200px] mx-auto text-start">
              Like good architecture. Or good editing in cinema. Or a
              well-written sentence that does not need to explain itself twice.
            </p>
          </div>

          {/* Col 3 — shorter square-ish image, top-aligned like col 2 */}
          <div className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[310px] overflow-hidden">
            <Image
              src="/images/digital.avif"
              alt="How we think"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ============ IMAGE + PARAGRAPH/BULLETS ============ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 -mx-5 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden">
            <Image
              src="/images/objects.avif"
              alt="How we think"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-7 flex flex-col pl-5 sm:pl-8 md:pl-12 lg:pl-0 pr-5 sm:pr-8 md:pr-12 lg:pr-10 xl:pr-20">
            <p className="font-nixie text-[14px] sm:text-[17px] leading-[1.75] text-[#181818]">
              We&apos;re interested in the invisible layers surrounding
              experiences: emotional tone, pacing, atmosphere, clarity,
              behaviour, and coherence.
            </p>
            <p className="font-nixie text-[14px] sm:text-[17px] leading-[1.75] text-[#181818] mt-5">
              Often, these subtleties influence perception far more than loud
              visuals alone.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col">
              {bullets.map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4 sm:py-5 border-b border-black/50 first:border-t"
                >
                  <DotGridIcon className="mt-3 shrink-0 text-[#181818]" />
                  <p className="font-nixie text-[13px] sm:text-[14px] leading-[1.6] text-[#181818]">
                    {text.split("\n").map((line, j) => (
        <span key={j}>
          {line}
          {j < text.split("\n").length - 1 && <br />}
        </span>
      ))}

                  </p>
                </div>
              ))}
            </div>

            <p className="font-nixie text-[14px] sm:text-[17px] text-[#181818] mt-8 sm:mt-10">
              These invisible signals matter deeply to us.
            </p>
          </div>
        </div>

      {/* ============ CLOSING STATEMENT ============ */}
<div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
 <h3 className="lg:col-span-7 lg:ml-14 xl:ml-20 font-nova text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.3] tracking-normal text-[#6b6b6b]">
  So much of our work <br/> involves observing:{" "}
  <span className="text-[#80c46c]">
    how <br></br> people move through <br/> interfaces
  </span>
</h3>

<div className="lg:col-span-4 lg:col-start-9 lg:-ml-8 xl:-ml-10 mt-8 lg:mt-12 flex flex-col gap-4 pt-2">
  <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
    We think of branding less as <br /> decoration and more as direction.
  </p>
  <p className="font-nixie text-[13px] sm:text-[16px] leading-[1.75] text-[#181818]">
    Less about creating noise. More about <br /> creating clarity people can
    quietly feel.
  </p>
</div>
</div>
      </div>
    </section>
  );
}