// import { cn } from "@/lib/utils";
// import { exultEvent as d } from "@/lib/constants";
// import Lines from "../Lines";
// import Media from "../Media";
// import { t } from "../styles";

// export default function EventSection() {
//   return (
//     <section className={cn(t.inner, "grid grid-cols-1 border-b px-24 py-48 md:grid-cols-2 md:gap-40 md:px-40 md:py-64 xl:grid-cols-[810fr_806fr] xl:gap-82 xl:px-152 xl:pt-106 xl:pb-91")}>
//       {/* sticky on md+ (two columns): stays in view while the right column scrolls */}
//       <div className="md:sticky md:top-96 md:self-start xl:top-110">
//         <span data-reveal className={t.label}>
//           {d.label}
//         </span>
//         <Media
//           media={d.imageMain}
//           className="mt-16 aspect-[809/1148] h-auto xl:mt-52 xl:aspect-auto xl:h-1148"
//           sizes="(max-width: 1023px) 100vw, 43vw"
//         />
//       </div>

//       <div className="pt-32 md:pt-36 xl:pt-65">
//         <h2 data-reveal className={t.h2}>
//           <Lines lines={d.heading} />
//         </h2>

//         <div className="mt-16 xl:mt-72 xl:max-w-730">
//           {d.body.map((text, i) => (
//             <p key={i} data-reveal className={cn(t.body, i > 0 && "mt-18 xl:mt-42")}>
//               {text}
//             </p>
//           ))}
//         </div>

//         <Media
//           media={d.imageSecondary}
//           className="mt-32 aspect-[722/663] h-auto xl:mt-88 xl:aspect-auto xl:h-663 xl:w-722"
//           sizes="(max-width: 1023px) 100vw, 38vw"
//         />
//       </div>
//     </section>
//   );
// }



import { cn } from "@/lib/utils";
import { tsaSystem as d } from "@/lib/constants";
import Lines from "../Lines";
import Media from "../Media";
import MarksSection from "../MarksSection";
import { t } from "../styles";

export default function SystemSection() {
  return (
    <section className={t.inner}>
      {/* HEADER */}
      <div className="grid grid-cols-1 border-b pb-48 xl:min-h-342 xl:grid-cols-[272fr_1648fr] xl:pb-0">
        <div className={cn(t.sideLabel, "xl:pt-119")}>
          <span className={t.label}>{d.label}</span>
        </div>

        <div className="grid grid-cols-1 px-24 md:grid-cols-2 md:gap-40 md:px-40 xl:gap-0 xl:grid-cols-[870fr_693fr] xl:pr-0 xl:pl-85">
          <h2 data-reveal className={cn(t.h2, "pt-12 xl:pt-93")}>
            <Lines lines={d.heading} />
          </h2>
          <p data-reveal className={cn(t.body, "pt-20 md:pt-12 xl:max-w-540 xl:pt-114")}>
            {d.intro}
          </p>
        </div>
      </div>

      {/* THREE LAYERS */}
      <div className="grid grid-cols-1 gap-36 border-b px-24 py-32 md:grid-cols-3 md:gap-20 md:px-40 md:py-40 xl:grid-cols-3 xl:gap-44 xl:px-50 xl:pt-51 xl:pb-45">
        {d.layers.map((layer, i) => (
          <div key={i}>
            <Media
              media={layer.image}
              className="aspect-[577/708] h-auto xl:aspect-auto xl:h-708"
              sizes="(max-width: 1023px) 100vw, 30vw"
            />
            <h3 data-reveal className={cn(t.lead, "mt-16 xl:mt-43")}>
              {layer.title}
            </h3>
            <p data-reveal className={cn(t.body, "mt-6 xl:mt-16 xl:max-w-560 xl:pl-10")}>
              {layer.text}
            </p>
          </div>
        ))}
      </div>

      {/* NOTE */}
      <div className="grid grid-cols-1 border-b xl:grid-cols-[272fr_1648fr]">
        <div className={cn(t.sideLabel, "xl:pt-94")}>
          <span className={t.label}>{d.noteLabel}</span>
        </div>
        <p data-reveal className={cn(t.body, "px-24 pt-14 pb-36 md:max-w-[880px] md:px-40 md:pt-20 md:pb-48 xl:max-w-1276 xl:pt-90 xl:pr-0 xl:pb-92 xl:pl-401")}>
          {d.note}
        </p>
      </div>

      {/* SIGNATURE + SEAL */}
      <MarksSection data={d} />
    </section>
  );
}