import { cards } from "@/lib/constants";
import { HiArrowTurnDownRight } from "react-icons/hi2";

export default function CreativeGrid() {
  return (
    <section className="w-screen min-h-screen bg-[#e7e5e1] px-[72px] py-[40px] box-border max-[900px]:px-[20px] max-[900px]:py-[24px] max-[480px]:px-[12px] max-[480px]:py-[16px]">
      <div className="w-full min-h-[calc(100vh-80px)] border border-black/40 grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:min-h-0">

        {cards.map((card, index) => (
          <div
            key={index}
            className="border-r border-black/40 last:border-r-0 flex flex-col max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:last:border-b-0"
          >

            {/* TOP HEADER */}
            <div className="border-b border-black/40 px-[24px] py-[16px] flex items-center justify-between max-[480px]:px-[16px] max-[480px]:py-[14px]">
              <h2 className="text-[clamp(20px,2vw,28px)] font-nova tracking-[-0.03em] text-[#181818] m-0 max-[900px]:text-[22px] max-[480px]:text-[20px]">
                {card.title}
              </h2>
              <div className="flex items-center gap-[12px] text-[#181818]">
                <span className="w-[20px] h-[1px] bg-black/70 block" />
                <span className="text-[17px] font-nixie tracking-[0.2em] max-[480px]:text-[14px]">
                  {card.number}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="grid grid-cols-[82px_1fr] border-b border-black/40 min-h-[96px] max-[480px]:grid-cols-[56px_1fr] max-[480px]:min-h-[80px]">
              <div className="border-r border-black/40 flex items-center justify-center">
                {card.icon === "●" && (
                  <div className="w-[23px] h-[23px] rounded-full bg-[#80c46c]" />
                )}
                {card.icon === "▲" && (
                  <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[26px] border-b-[#80c46c]" />
                )}
                {card.icon === "■" && (
                  <div className="w-[24px] h-[24px] bg-[#80c46c]" />
                )}
              </div>
              <div className="flex items-center px-[32px] py-[12px] max-[480px]:px-[16px] max-[480px]:py-[10px]">
                <p className="text-[15px] font-nixie leading-[1.25] text-[#181818] max-w-[260px] m-0 max-[480px]:text-[13px]">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* IMAGE — top (card 01 & 03) */}
            {index !== 1 && (
              <div className="px-[28px] pt-[28px] pb-[24px] max-[900px]:px-[24px] max-[900px]:pt-[24px] max-[900px]:pb-[20px] max-[480px]:px-[16px] max-[480px]:pt-[16px] max-[480px]:pb-[12px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[240px] object-cover grayscale block max-[900px]:h-[260px] max-[480px]:h-[200px]"
                />
              </div>
            )}

            {/* LIST */}
            <div
              className="px-[28px] max-[900px]:px-[24px] max-[900px]:pt-[24px] max-[480px]:px-[16px] max-[480px]:pt-[20px]"
              style={{ paddingTop: index === 1 ? "28px" : "0" }}
            >
              <ul className="list-none m-0 p-0 flex flex-col gap-[24px] max-[480px]:gap-[18px]">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-[12px] text-[16px] text-[#181818] font-nixie max-[480px]:text-[14px]">
                    {/* dot-icon: three squares in a cluster */}
                    <div className="w-[15px] h-[15px] relative shrink-0">
                      <span className="absolute w-[5px] h-[5px] bg-[#6b6b6b] top-0 left-0" />
                      <span className="absolute w-[5px] h-[5px] bg-[#6b6b6b] top-[4px] left-[8px]" />
                      <span className="absolute w-[5px] h-[5px] bg-[#6b6b6b] bottom-0 left-0" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FOOTER */}
            <div
              className="mt-auto px-[28px] pb-[28px] max-[900px]:px-[24px] max-[900px]:pb-[24px] max-[480px]:px-[16px] max-[480px]:pb-[20px]"
              style={{ marginTop: "40px" }}
            >
              <div className="border-t border-black/40 pt-[24px] flex items-end justify-between">
                <div>
                  {card.footerTitle && (
                    <div className="text-[32px] font-nixie tracking-[-0.06em] text-[#181818] leading-none max-[480px]:text-[26px]">
                      {card.footerTitle}
                    </div>
                  )}
                  <p className="text-[15px] leading-[1.1] font-nixie text-[#181818] mt-[8px] max-w-[180px] max-[480px]:text-[12px]">
                    {card.footerDesc}
                  </p>
                </div>

                <button className="group text-[#80c46c] font-nixie flex items-center gap-[6px] bg-transparent border-none cursor-pointer p-0 text-[18px] tracking-[-0.03em] uppercase transition-[gap] duration-300 ease-in-out hover:gap-[12px] max-[480px]:text-[15px]">
                  <HiArrowTurnDownRight
                    style={{ fontSize: "24px", strokeWidth: "0.2", marginBottom: "8px" }}
                  />
                  <span>Explore</span>
                </button>
              </div>

              {/* IMAGE — bottom (card 02 only) */}
              {index === 1 && (
                <div className="pt-[28px] -mx-[28px] -mb-[28px] max-[900px]:-mx-[24px] max-[900px]:-mb-[24px] max-[480px]:-mx-[16px] max-[480px]:-mb-[20px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[270px] object-cover grayscale block max-[900px]:h-[260px] max-[480px]:h-[200px]"
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