import Image from "next/image";
import { cultureGridImages } from "@/lib/constants";


export default function CultureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#161616]">
      <div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-28">
        {/* ============ HEADING + INTRO PARAGRAPH ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8">
          <h2
            className="
              lg:col-span-6 lg:col-start-2
              font-display
              text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.8rem] xl:text-[3.2rem] 2xl:text-[3.4rem]
              leading-[1.15] tracking-[0.01em]
              text-[#EDEDED]
            "
          >
            THE CULTURE OF
            <br />
            THE STUDIO
          </h2>

             <p className="lg:col-span-3 lg:col-start-6 lg:row-start-2 font-rethink text-[14px] sm:text-[16px] leading-[1.75] text-white/45 max-w-[300px] mt-2 lg:mt-4">
            The culture of the studio has evolved slowly through shared
            habits more than formal policies.
          </p>
        </div>

        {/* ============ 3-IMAGE GRID — para-yude same right-side column-il thanne start aavunnu ============ */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-3 gap-3 sm:gap-4">
            {cultureGridImages.map((img) => (
              <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ============ PARAGRAPH BELOW IMAGES — same column, wider max-width ============ */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12">
          <p className="lg:col-span-7 lg:col-start-6 font-rethink text-[13px] sm:text-[16px] leading-[1.85] text-white/40 max-w-[640px]">
            Through films watched together on Saturdays. Through
            conversations about books, architecture, psychology, cinema,
            philosophy, music, and business. Through workshops and creative
            experiments. Through travel. Through observing spaces, cities,
            and people. Through long discussions that quietly reshape the
            way we think.
          </p>
        </div>

        {/* ============ DIVIDER — full-bleed, HeroSection-le divider pattern ============ */}
         <div className="mt-14 lg:mt-20 h-px bg-white/10" />

        {/* ============ "EVEN SMALL THINGS MATTER" — label+para full width, then image1 (tall, left) beside image2+para (stacked, right) ============ */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <p className="font-rethink text-[15px] sm:text-[18px] leading-[1.6] text-[#EDEDED]">
            Even small things matter to us:
          </p>
          <p className="mt-4 font-rethink text-[13px] sm:text-[16px] leading-[1.85] text-white/40 max-w-[400px]">
            how the studio feels, how objects are arranged, how
            respectfully people collaborate, how clearly things are
            communicated, and whether the environment itself
            supports thoughtful work.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20 items-start">
            {/* Image 1 — tall, left-aligned with the label above */}
            <div className="relative w-full sm:w-[240px] lg:w-[260px] aspect-[3/4.4] overflow-hidden shrink-0">
              <Image
                src="/images/creative.avif"
                alt="Studio wall with planning notes"
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>

            {/* Image 2 (smaller, landscape) stacked above its paragraph */}
              <div className="flex flex-col gap-6 max-w-[620px] sm:ml-10 lg:ml-16 mt-18">
              <div className="relative w-[260px] sm:w-[320px] lg:w-[420px] aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/communication.avif"
                  alt="Close-up of a hands-on studio detail"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

            <p className="font-rethink text-[13px] sm:text-[16px] leading-[1.85] text-white/40">
                Over time, certain practices naturally became part of the
                studio rhythm:<br/> 
                <br></br> morning meditation sessions, collective screenings, shared meals, quiet working 
hours, creative discussions, and an ongoing effort to keep both the workspace 
and our thinking clear and intentional.
              </p>
            </div>
          </div>
        </div>

        {/* ============ CLOSING — big image (left) + quote (right) ============ */}
        <div className="mt-14 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
         <div className="relative lg:col-span-8 lg:col-start-1 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
            <Image
              src="/images/artwork1.avif"
              alt="Studio team collaborating in the workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover"
            />
          </div>

           <p className="lg:col-span-4 lg:col-start-9 lg:self-start font-rethink text-[14px] sm:text-[15px] leading-[1.85] text-white/45 max-w-[280px]">
            We don&apos;t see creativity as something that exists separately
            from life. The way we work, observe, rest, learn, speak,
            listen, and collaborate, all slowly shape the work itself.
          </p>
        </div>
      </div>
    </section>
  );
}