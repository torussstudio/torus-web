import Image from "next/image";

export default function StudioClosing() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EAE7E2]">
      {/* MAX-WIDTH WRAPPER — StudioHero-il use cheytha athe container thanne,
          consistency nilanirthan (max-w-[1728px], athe px/py breakpoints) */}
<div className="relative max-w-[1728px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2 sm:pt-3 lg:pt-4 pb-10 sm:pb-14 lg:pb-20">
        {/* ============ TOP: intro paragraph + staggered image pair ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-6 items-start">
          {/* LEFT — intro copy, StudioHero-nte "LEFT" paragraph block-inte
              athe col-start/col-span aayth (col-start-2, col-span-3) */}
          <div className="lg:col-span-3 lg:col-start-1 flex flex-col">
            <p className="font-nixie text-[14px] sm:text-[17px] leading-[1.75] text-[#181818]  max-w-[420px] sm:max-w-[380px] lg:max-w-[340px]">
              The businesses, spaces, and ideas people remember most are rarely
              the loudest ones.
              <br />
              <br />
              They are usually the ones that feel coherent.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8 lg:gap-10 xl:gap-14">
            <div className="relative w-full sm:flex-[1] h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[580px] overflow-hidden">
              <Image
                src="/images/studio.avif"
                alt="Hands pinning notes to a wall"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 44vw"
                className="object-cover"
              />
            </div>

            <div className="relative w-full sm:flex-1 h-[150px] sm:h-[190px] md:h-[220px] lg:h-[250px] xl:h-[270px] overflow-hidden">
              <Image
                src="/images/objects.avif"
                alt="Person working at a desk"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 34vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ============ BOTTOM: green manifesto lines + closing CTA copy ============ */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-6 items-start">
          <h2
            className="
    lg:col-span-6 lg:col-start-1
    font-nova
    text-[2.1rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.1rem] xl:text-[3.6rem] 2xl:text-[4rem]
    leading-[1.15]
    tracking-[0.005em]
    text-[#80c46c]
  "
          >
            Thoughtfully shaped.
            <br />
            Emotionally clear.
            <br />
            Human.
            <br />
            Alive.
          </h2>

          <p className="lg:col-span-4 lg:col-start-8 lg:pl-4 font-nixie text-[14px] sm:text-[17px] leading-[1.75] text-[#181818] max-w-[380px] lg:max-w-[300px] xl:max-w-[330px]">
            If you care deeply about perception, atmosphere, clarity, culture,
            and meaningful long-term work, we&apos;d love to begin a
            conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
