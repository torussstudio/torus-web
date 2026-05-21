import { HiArrowTurnDownRight } from "react-icons/hi2";

export default function CreativeGrid() {
  const cards = [
    {
      number: "01",
      title: "CREATIVE",
      icon: "●",
      desc: "Building brands, systems, and digital experiences with clarity, depth, and character.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      items: [
        "Brand Strategy & Systems",
        "Digital Experiences",
        "Communication Design",
        "Creative Direction",
      ],
      footerTitle: "100+",
      footerDesc: "projects across industries and geographies",
    },
    {
      number: "02",
      title: "EDITIONS",
      icon: "▲",
      desc: "An evolving collection of artworks, objects, merchandise, and experimental explorations.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      items: [
        "Artworks & Creative Explorations",
        "Merchandise",
        "Objects",
        "Publishing",
      ],
      footerTitle: "6000+",
      footerDesc: "artworks curated, created, & sourced since 2015",
    },
    {
      number: "03",
      title: "COHORT",
      icon: "■",
      desc: "Creating spaces for learning, dialogue, collaboration, and collective creative growth.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      items: [
        "Workshops",
        "Exhibitions",
        "Conversations",
        "Collective Initiatives",
      ],
      footerTitle: "",
      footerDesc:
        "A growing network of creators, students, artists, and collaborators",
    },
  ];

  return (
    <section className="w-screen min-h-screen bg-[#e7e5e1] px-[72px] py-[40px]">
      <div className="w-full min-h-[calc(100vh-80px)] border border-black/20 grid grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-r border-black/20 last:border-r-0 flex flex-col"
          >
            {/* TOP HEADER */}
            <div className="border-b border-black/20 px-6 py-4 flex items-center justify-between">
              <h2 className="text-[22px] md:text-[28px] font-display tracking-[-0.03em] text-[#1d1d1d]">
                {card.title}
              </h2>

              <div className="flex items-center gap-3 text-black/80">
                <span className="w-5 h-[1px] bg-black/70 block" />
                <span className="text-[17px] tracking-[0.2em] font-think">
                  {card.number}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="grid grid-cols-[82px_1fr] border-b border-black/20 min-h-[96px]">
              <div className="border-r border-black/20 flex items-center justify-center">
                {card.icon === "●" && (
                  <div className="w-[23px] h-[23px] rounded-full bg-[#7EA46C]" />
                )}

                {card.icon === "▲" && (
                  <div
                    className="
        w-0 h-0
        border-l-[14px]
        border-r-[14px]
        border-b-[26px]
        border-l-transparent
        border-r-transparent
        border-b-[#7EA46C]
      "
                  />
                )}

                {card.icon === "■" && (
                  <div className="w-[24px] h-[24px] bg-[#7EA46C]" />
                )}
              </div>

              <div className="flex items-center px-10">
                <p className="text-[14px] font-rethink leading-[1.25] text-black/75 max-w-[260px]">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* IMAGE */}
           {/* IMAGE */}
{index !== 1 && (
  <div className="pl-7 pt-7 pb-6">
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-[240px] object-cover grayscale"
    />
  </div>
)}

            {/* LIST */}
           <div className={`px-7 ${index === 1 ? "pt-7" : ""}`}>
              <ul className="space-y-6">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex font-rethink items-center gap-3 text-[15px] text-black/80"
                  >
                    <div className="w-[15px] h-[15px] relative">
                      <span className="absolute w-[5px] h-[5px] bg-black top-0 left-0" />
                      <span className="absolute w-[5px] h-[5px] bg-black top-1 right-0 left-2" />
                      <span className="absolute w-[5px] h-[5px] bg-black bottom-0 left-0" />
                      {/* <span className="absolute w-[3px] h-[3px] bg-black bottom-0 right-0" /> */}
                    </div>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FOOTER */}
           {/* FOOTER */}
<div className="mt-10 px-7 pb-7">
  <div className="border-t border-black/20 pt-6 flex items-end justify-between">
    <div>
      {card.footerTitle && (
        <h3 className="text-[32px] font-think tracking-[-0.06em] text-black/90 leading-none">
          {card.footerTitle}
        </h3>
      )}

      <p className="text-[13px] font-rethink leading-[1.1] text-black/55 mt-2 max-w-[140px]">
        {card.footerDesc}
      </p>
    </div>

    <button className="text-[#7EA46C] flex items-center gap-[6px] hover:gap-3 transition-all duration-300 cursor-pointer">
  <HiArrowTurnDownRight className="text-[24px] stroke-[0.2] mb-[8px]" />

  <span className="text-[18px] font-rethink uppercase tracking-[-0.03em]">
    Explore
  </span>
</button>
  </div>

 {index === 1 && (
  <div className="pl-0 pr-0 pt-7 -mr-7">
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-[240px] object-cover grayscale"
    />
  </div>
)}
</div>
          </div>
        ))}
      </div>
    </section>
  );
}
