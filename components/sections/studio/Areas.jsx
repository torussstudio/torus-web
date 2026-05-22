"use client";

import { useState } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

const practices = [
  {
    number: "01",
    title: "STRATEGY &\nIDENTITY SYSTEMS",
    desc: "Building brands with clarity, character, and long-term coherence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "02",
    title: "DIGITAL\nEXPERIENCES",
    desc: "From websites to product interfaces, we create digital experiences that balance usability, storytelling, and visual clarity.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "03",
    title: "COMMUNICA-\nTION&CONTENT",
    desc: "Creating systems of expression across campaigns, content, and ongoing brand communication.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    items: [
      "UI/UX Design",
      "Website Design & Development",
      "Interaction Design",
      "Digital Systems",
      "Motion & Microinteractions",
    ],
  },

  {
    number: "04",
    title: "CREATIVE\nDIRECTION",
    desc: "Developing visual systems and narratives that guide products, campaigns, and evolving cultural identities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Campaign Direction",
      "Art Direction",
      "Brand Systems",
      "Visual Storytelling",
      "Motion Direction",
    ],
  },

  {
    number: "05",
    title: "OBJECTS &\nINSTALLATIONS",
    desc: "Exploring physical experiences through objects, environments, and tactile systems.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Spatial Design",
      "Installation Concepts",
      "Material Systems",
      "Interactive Objects",
      "Exhibition Design",
    ],
  },
];

export default function AreasOfPractice() {
  const [active, setActive] = useState(0);

  const CARD_WIDTH = 340;

  const nextSlide = () => {
    setActive((prev) =>
      prev === practices.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? practices.length - 1 : prev - 1
    );
  };

  return (
  <section className="w-full min-h-screen bg-[#ebe9e6] overflow-hidden border-t border-black/40 pb-[72px]">
      <div className="pt-[72px]">
        <>
  <div className="w-full border-t border-black/20" />

<div className="grid grid-cols-[560px_1fr] min-h-[760px]">
      {/* <div className="grid grid-cols-[560px_1fr] h-full "> */}
        
        {/* ======================================
            LEFT PANEL
        ====================================== */}
        <div
          className="
            border-r
            border-black/40
            px-[74px]
            pt-[58px]
            pb-[52px]
            flex
            flex-col
          "
        >
          {/* TITLE */}
          <div>
            <h2
              className="
                text-[66px]
                leading-[0.92]
                tracking-[-0.05em]
                uppercase
                text-[#171717]
                font-display
                pl-[30px]
              "
            >
              AREAS
              <br />
              OF PRACTICE
            </h2>

            <p
              className="
                mt-[42px]
                max-w-[360px]
                text-[18px]
                leading-[1.15]
                text-black/75
                font-rethink
                pl-[30px]
              "
            >
              Toruss works across a range of interconnected creative
              disciplines, spanning identity, digital, objects,
              communication, and collective initiatives.
            </p>
          </div>

          {/* FOOT */}
          <div className="mt-auto">
            
            {/* COUNT */}
            <div className="flex items-end gap-[10px] pl-[30px]">
              <span
                className="
                  text-[54px]
                  leading-none
                  tracking-[-0.06em]
                  text-[#171717]
                  font-think
                "
              >
               0{
  active === -1
    ? 2
    : Math.max(active + 1, 1)
}
              </span>

              <span
                className="
                  text-[54px]
                  leading-none
                  tracking-[-0.06em]
                  text-black/25
                  font-think
                "
              >
                /05
              </span>
            </div>

            {/* ARROWS */}
            <div className="mt-[92px] pl-[30px] flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="
                  text-[42px]
                  text-[#171717]
                  hover:opacity-60
                  transition-opacity
                  duration-300
                "
              >
                <HiOutlineArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="
                  text-[42px]
                  text-[#171717]
                  hover:opacity-60
                  transition-opacity
                  duration-300
                "
              >
                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================
            CAROUSEL VIEWPORT
        ====================================== */}
        <div className="w-[1020px] overflow-hidden border-b border-black/20">
          
          {/* TRACK */}
          <div
            className="
              flex
              h-full
              transition-transform
              duration-700
              ease-out
            "
           style={{
transform: `translateX(-${
  active >= practices.length - 1
    ? (practices.length - 2.82) * CARD_WIDTH
    : Math.min(active, practices.length - 3) * CARD_WIDTH
}px)`,
}}
          >
            {practices.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className="
                    relative
                    w-[340px]
                    flex-shrink-0
                    border-r
                    border-black/20
                    overflow-visible
                    cursor-pointer
                  "
                >
                  {/* ======================================
                      ACTIVE CARD
                  ====================================== */}
                  {isActive ? (
                    <div className="relative h-full">
                      
                      {/* IMAGE */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                        "
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/60" />

                      {/* CONTENT */}
                      <div
                        className="
                          relative
                          z-20
                          h-full
                          px-[30px]
                          pt-[24px]
                          pb-[28px]
                          flex
                          flex-col
                        "
                      >
                        {/* NUMBER */}
                        <span
                          className="
                            text-[20px]
                            tracking-[0.18em]
                            uppercase
                            text-[#85A56F]
                            font-think
                          "
                        >
                          — {item.number}
                        </span>

                        {/* TITLE */}
                        <h3
                          className="
                            mt-[18px]
                            whitespace-pre-line
                            text-[45px]
                            leading-[0.92]
                            tracking-[-0.05em]
                            uppercase
                            text-[#85A56F]
                            font-display
                          "
                        >
                          {item.title}
                        </h3>

                        {/* DIVIDER */}
                        <div className="mt-[28px] h-px w-full bg-white/45" />

                        {/* DESCRIPTION */}
                        <p
                          className="
                            mt-[22px]
                            text-[16px]
                            leading-[1.15]
                            text-white/90
                            font-rethink
                            max-w-[390px]
                          "
                        >
                          {item.desc}
                        </p>

                        {/* ITEMS */}
                        <div className="mt-[30px] space-y-[28px]">
                          {item.items.map((listItem, i) => (
                            <div
                              key={i}
                              className="
                                flex
                                items-center
                                gap-[16px]
                              "
                            >
                              {/* PIXELS */}
                              <div className="flex items-center gap-[5px]">
                                
                                <div className="flex flex-col gap-[5px]">
                                  <span className="w-[5px] h-[5px] bg-white block" />
                                  <span className="w-[5px] h-[5px] bg-white block" />
                                </div>

                                <div className="flex items-center h-[11px]">
                                  <span className="w-[5px] h-[5px] bg-white block" />
                                </div>
                              </div>

                              <span
                                className="
                                  text-[16px]
                                  text-white/92
                                  font-rethink
                                "
                              >
                                {listItem}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* FOOT */}
                        <div className="mt-auto flex items-center">
                         <button
  onClick={(e) => {
    e.stopPropagation();
    setActive(-1);
  }}
  className="
    group
    flex
    items-center
    gap-[10px]
    text-white
  "
>
                            <span
                              className="
                                text-[32px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-[4px]
                              "
                            >
                              ↳
                            </span>

                            <span
                              className="
                                text-[16px]
                                uppercase
                                tracking-[0.08em]
                                font-rethink
                              "
                            >
                              VIEW LESS
                            </span>
                          </button>
                        </div>

                        
                       {/* FLOAT BUTTON */}
<button
  onClick={(e) => {
    e.stopPropagation();

 setActive((prev) => {
  if (prev === -1) return 1;

  if (prev === practices.length - 1) {
    return prev - 1;
  }

  return prev + 1;
});
  }}
  className="
    absolute
    bottom-[118px]
    right-[-40px]
    w-[80px]
    h-[80px]
    bg-[#ebe9e6]
    border
    border-black/20
    flex
    items-center
    justify-center
    text-[42px]
    text-[#171717]
    z-50
    transition-all
    duration-300
    hover:translate-x-[4px]
  "
>
{active === -1 || active === practices.length - 1
  ? "←"
  : "→"}
</button>
                      </div>
                    </div>
                  ) : (
                    /* ======================================
                        INACTIVE CARD
                    ====================================== */
                    <div
                      className="
                        h-full
                        px-[28px]
                        pt-[28px]
                        pb-[24px]
                        flex
                        flex-col
                        bg-[#ebe9e6]
                      "
                    >
                      {/* IMAGE */}
                      <div
                        className="
                          w-full
                          h-[275px]
                          overflow-hidden
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            w-full
                            h-full
                            object-cover
                          "
                        />
                      </div>

                      {/* NUMBER */}
                      <span
                        className="
                          mt-[40px]
                          text-[20px]
                          tracking-[0.18em]
                          uppercase
                          text-black/35
                          font-think
                        "
                      >
                        — {item.number}
                      </span>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-[18px]
                          whitespace-pre-line
                          text-[42px]
                          leading-[0.92]
                          tracking-[-0.05em]
                          uppercase
                          text-black/18
                          font-display
                        "
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-[24px]
                          text-[16px]
                          leading-[1.15]
                          text-black/18
                          font-rethink
                          max-w-[230px]
                        "
                      >
                        {item.desc}
                      </p>

                      {/* FOOT */}
                      <div className="mt-auto">
                        <button
                          className="
                            group
                            flex
                            items-center
                            gap-[10px]
                            text-[#85A56F]/45
                          "
                        >
                          <span
                            className="
                              text-[32px]
                              transition-transform
                              duration-300
                              group-hover:translate-x-[4px]
                            "
                          >
                            ↳
                          </span>

                          <span
                            className="
                              text-[16px]
                              uppercase
                              tracking-[0.08em]
                              font-rethink
                            "
                          >
                            VIEW MORE
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
      </>
      </div>
    </section>
  );
}