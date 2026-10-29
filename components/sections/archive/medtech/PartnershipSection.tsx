// import { cn } from "@/lib/utils";
// import { medtechPartnership as d } from "@/lib/constants";
// import Media from "../Media";
// import { t } from "../styles";

// export default function PartnershipSection() {
//   return (
//     <section className={cn(t.inner, "flex flex-col border-b py-48 md:flex-row md:items-center md:gap-32 md:py-64 md:pr-40 xl:flex-row xl:items-center xl:gap-0 xl:py-90 xl:pr-0")}>
//       {/* half-capsule panel — taller than Exult's so the longer copy can breathe */}
//       <div className="w-[calc(100%-24px)] rounded-r-full border border-l-0 py-48 pr-64 pl-24 md:w-[62%] md:shrink-0 md:py-72 md:pr-88 md:pl-40 xl:grid xl:min-h-880 xl:w-1115 xl:shrink-0 xl:grid-cols-[147fr_968fr] xl:p-0">
//         <div className="flex items-center pb-16 xl:justify-center xl:border-r xl:pb-0">
//           <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
//             {d.label}
//           </span>
//         </div>

//         <div className="self-center xl:py-120 xl:pr-160 xl:pl-107">
//           {/* small grey heading */}
//           <h2 data-reveal className={cn(t.label, "tracking-[0.12em]")}>
//             {d.eyebrow}
//           </h2>

//           {d.body.map((text, i) => (
//             <p
//               key={i}
//               data-reveal
//               className={cn(t.body, "xl:max-w-640", i === 0 ? "mt-28 xl:mt-56" : "mt-20 xl:mt-32")}
//             >
//               {text}
//             </p>
//           ))}

//           {/* large closing statement */}
//           <p data-reveal className={cn(t.lead, "mt-48 xl:mt-88 xl:max-w-700")}>
//             {d.statement}
//           </p>
//         </div>
//       </div>

//       <Media
//         media={d.image}
//         className="mx-24 mt-32 aspect-[572/638] h-auto w-auto md:m-0 md:flex-1 xl:m-0 xl:ml-81 xl:h-638 xl:w-572 xl:flex-none xl:shrink-0 xl:aspect-auto"
//         sizes="(max-width: 1023px) 100vw, 30vw"
//       />
//     </section>
//   );
// }




import { cn } from "@/lib/utils";
import { medtechPartnership as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import { t } from "../styles";


export default function PartnershipSection() {
  return (
    <section className={cn(t.inner, "border-b")}>
      <div className="grid grid-cols-1 xl:grid-cols-[272fr_1648fr]">
        {/* vertical side label, spans rows 1 + 2 */}
        <div className="flex items-center px-24 pt-48 md:px-40 md:pt-64 xl:justify-center xl:border-r xl:p-0">
          <span className={cn(t.label, "xl:rotate-180 xl:[writing-mode:vertical-rl]")}>
            {d.label}
          </span>
        </div>

        <div>
          {/* row 1 — heading + intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center xl:min-h-427 xl:grid-cols-[858fr_790fr]">
            <h2 data-reveal className={cn(t.h2, "px-24 pt-14 md:px-40 md:py-48 xl:py-0 xl:pr-0 xl:pl-97")}>
              <Lines lines={d.heading} />
            </h2>

            <p
              data-reveal
              className={cn(t.body, "px-24 pt-24 pb-48 md:px-40 md:py-48 xl:max-w-650 xl:p-0")}
            >
              {d.intro}
            </p>
          </div>

          {/* row 2 — image + body */}
          <div className="grid grid-cols-1 border-t md:grid-cols-2 xl:grid-cols-[949fr_699fr]">
            <div className="p-16 md:p-24 xl:px-40 xl:py-44">
              <Media
                media={d.image}
                className="aspect-[876/632] h-auto xl:aspect-auto xl:h-632"
                sizes="(max-width: 767px) 100vw, 45vw"
              />
            </div>

            <div className="flex items-center border-t px-24 py-36 md:border-t-0 md:border-l md:px-40 md:py-48 xl:py-0 xl:pr-80 xl:pl-81">
              <p data-reveal className={cn(t.body, "xl:max-w-484")}>
                {d.body}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* row 3 — full width, centred */}
      <div className="border-t px-24 py-56 text-center md:px-40 md:py-72 xl:pt-140 xl:pb-160">
        <p
          data-reveal
          className="text-[14px] leading-[1.4] tracking-[0.05em] text-[#999688] xl:text-[length:max(13px,calc(var(--spacing)*22))]"
        >
          {d.balance}
        </p>

        <p
          data-reveal
          className="mx-auto mt-24 max-w-[22ch] text-[length:clamp(26px,5.4vw,40px)] leading-[1.25] tracking-[0.02em] text-[#7b2630] md:max-w-none xl:mt-48 xl:text-[length:max(26px,calc(var(--spacing)*58))]"
        >
          {/* design line breaks from md up; free wrap on phones */}
          <span className="md:hidden">{d.statement.join(" ")}</span>
          <span className="hidden md:block">
            <Lines lines={d.statement} />
          </span>
        </p>
      </div>
    </section>
  );
}