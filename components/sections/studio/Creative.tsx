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
    <>
      <style>{`
        .creative-section {
          width: 100vw;
          min-height: 100vh;
          background: #e7e5e1;
          padding: 40px 72px;
          box-sizing: border-box;
        }

        .creative-grid {
          width: 100%;
          min-height: calc(100vh - 80px);
          border: 1px solid rgba(0,0,0,0.4);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .creative-card {
          border-right: 1px solid rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
        }

        .creative-card:last-child {
          border-right: none;
        }

        /* TOP HEADER */
        .card-header {
          border-bottom: 1px solid rgba(0,0,0,0.4);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-header h2 {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #1d1d1d;
          margin: 0;
        }

        .card-num-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(0,0,0,0.8);
        }

        .card-num-line {
          width: 20px;
          height: 1px;
          background: rgba(0,0,0,0.7);
          display: block;
        }

        .card-num {
          font-size: 17px;
          letter-spacing: 0.2em;
        }

        /* DESC ROW */
        .card-desc-row {
          display: grid;
          grid-template-columns: 82px 1fr;
          border-bottom: 1px solid rgba(0,0,0,0.4);
          min-height: 96px;
        }

        .icon-cell {
          border-right: 1px solid rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-icon {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background: #7EA46C;
        }

        .triangle-icon {
          width: 0;
          height: 0;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
          border-bottom: 26px solid #7EA46C;
        }

        .square-icon {
          width: 24px;
          height: 24px;
          background: #7EA46C;
        }

        .desc-cell {
          display: flex;
          align-items: center;
          padding: 12px 32px;
        }

        .desc-cell p {
          font-size: 14px;
          line-height: 1.25;
          color: rgba(0,0,0,0.75);
          max-width: 260px;
          margin: 0;
        }

        /* IMAGE */
        .card-img-top {
          padding: 28px 28px 24px 28px;
        }

        .card-img-top img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          filter: grayscale(1);
          display: block;
        }

        /* LIST */
        .card-list {
          padding: 0 28px;
        }

        .card-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .card-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: rgba(0,0,0,0.8);
        }

        .dot-icon {
          width: 15px;
          height: 15px;
          position: relative;
          flex-shrink: 0;
        }

        .dot-icon span {
          position: absolute;
          width: 5px;
          height: 5px;
          background: black;
        }

        .dot-icon .tl { top: 0; left: 0; }
        .dot-icon .tr { top: 4px; left: 8px; }
        .dot-icon .bl { bottom: 0; left: 0; }

        /* FOOTER */
        .card-footer {
          margin-top: auto;
          padding: 0 28px 28px 28px;
        }

        .footer-inner {
          border-top: 1px solid rgba(0,0,0,0.4);
          padding-top: 24px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .footer-stat-num {
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.06em;
          color: rgba(0,0,0,0.9);
          line-height: 1;
        }

        .footer-stat-desc {
          font-size: 13px;
          line-height: 1.1;
          color: rgba(0,0,0,0.55);
          margin-top: 8px;
          max-width: 140px;
        }

        .explore-btn {
          color: #7EA46C;
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-size: 18px;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          transition: gap 0.3s ease;
        }

        .explore-btn:hover {
          gap: 12px;
        }

        .explore-btn svg {
          font-size: 24px;
          stroke-width: 0.2;
          margin-bottom: 8px;
        }

        /* Editions bottom image */
        .card-img-bottom {
          padding-top: 28px;
          margin: 0 -28px -28px -28px;
        }

        .card-img-bottom img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          filter: grayscale(1);
          display: block;
        }

        /* ─── TABLET (≤ 900px) ─── */
        @media (max-width: 900px) {
          .creative-section {
            padding: 24px 20px;
          }

          .creative-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }

          .creative-card {
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,0.4);
          }

          .creative-card:last-child {
            border-bottom: none;
          }

          .card-header h2 {
            font-size: 22px;
          }

          .card-img-top img,
          .card-img-bottom img {
            height: 260px;
          }

          .card-list {
            padding: 24px 24px 0 24px;
          }

          .card-footer {
            padding: 0 24px 24px 24px;
          }

          .card-img-top {
            padding: 24px 24px 20px 24px;
          }

          .card-img-bottom {
            margin: 0 -24px -24px -24px;
          }
        }

        /* ─── MOBILE (≤ 480px) ─── */
        @media (max-width: 480px) {
          .creative-section {
            padding: 16px 12px;
          }

          .card-header {
            padding: 14px 16px;
          }

          .card-header h2 {
            font-size: 20px;
          }

          .card-num {
            font-size: 14px;
          }

          .card-desc-row {
            grid-template-columns: 56px 1fr;
            min-height: 80px;
          }

          .desc-cell {
            padding: 10px 16px;
          }

          .desc-cell p {
            font-size: 13px;
          }

          .card-img-top {
            padding: 16px 16px 12px 16px;
          }

          .card-img-top img,
          .card-img-bottom img {
            height: 200px;
          }

          .card-list {
            padding: 20px 16px 0 16px;
          }

          .card-list ul {
            gap: 18px;
          }

          .card-list li {
            font-size: 14px;
          }

          .card-footer {
            padding: 0 16px 20px 16px;
          }

          .footer-stat-num {
            font-size: 26px;
          }

          .footer-stat-desc {
            font-size: 12px;
          }

          .explore-btn {
            font-size: 15px;
          }

          .card-img-bottom {
            margin: 0 -16px -20px -16px;
          }
        }
      `}</style>

      <section className="creative-section">
        <div className="creative-grid">
          {cards.map((card, index) => (
            <div key={index} className="creative-card">

              {/* TOP HEADER */}
              <div className="card-header">
                <h2>{card.title}</h2>
                <div className="card-num-row">
                  <span className="card-num-line" />
                  <span className="card-num">{card.number}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="card-desc-row">
                <div className="icon-cell">
                  {card.icon === "●" && <div className="circle-icon" />}
                  {card.icon === "▲" && <div className="triangle-icon" />}
                  {card.icon === "■" && <div className="square-icon" />}
                </div>
                <div className="desc-cell">
                  <p>{card.desc}</p>
                </div>
              </div>

              {/* IMAGE — top (card 01 & 03) */}
              {index !== 1 && (
                <div className="card-img-top">
                  <img src={card.image} alt={card.title} />
                </div>
              )}

              {/* LIST */}
              <div className="card-list" style={{ paddingTop: index === 1 ? "28px" : "0" }}>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i}>
                      <div className="dot-icon">
                        <span className="tl" />
                        <span className="tr" />
                        <span className="bl" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOOTER */}
              <div className="card-footer" style={{ marginTop: "40px" }}>
                <div className="footer-inner">
                  <div>
                    {card.footerTitle && (
                      <div className="footer-stat-num">{card.footerTitle}</div>
                    )}
                    <p className="footer-stat-desc">{card.footerDesc}</p>
                  </div>
                  <button className="explore-btn">
                    <HiArrowTurnDownRight style={{ fontSize: "24px", strokeWidth: "0.2", marginBottom: "8px" }} />
                    <span>Explore</span>
                  </button>
                </div>

                {/* IMAGE — bottom (card 02 only) */}
                {index === 1 && (
                  <div className="card-img-bottom">
                    <img src={card.image} alt={card.title} />
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// import { HiArrowTurnDownRight } from "react-icons/hi2";

// export default function CreativeGrid() {
//   const cards = [
//     {
//       number: "01",
//       title: "CREATIVE",
//       icon: "circle",
//       desc:
//         "Building brands, systems, and digital experiences with clarity, depth, and character.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
//       items: [
//         "Brand Strategy & Systems",
//         "Digital Experiences",
//         "Communication Design",
//         "Creative Direction",
//       ],
//       footerTitle: "100+",
//       footerDesc: "projects across industries and geographies",
//     },
//     {
//       number: "02",
//       title: "EDITIONS",
//       icon: "triangle",
//       desc:
//         "An evolving collection of artworks, objects, merchandise, and experimental explorations.",
//       image:
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//       items: [
//         "Artworks & Creative Explorations",
//         "Merchandise",
//         "Objects",
//         "Publishing",
//       ],
//       footerTitle: "6000+",
//       footerDesc: "artworks curated, created, & sourced since 2015",
//     },
//     {
//       number: "03",
//       title: "COHORT",
//       icon: "square",
//       desc:
//         "Creating spaces for learning, dialogue, collaboration, and collective creative growth.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
//       items: [
//         "Workshops",
//         "Exhibitions",
//         "Conversations",
//         "Collective Initiatives",
//       ],
//       footerTitle: "",
//       footerDesc:
//         "A growing network of creators, students, artists, and collaborators",
//     },
//   ];

//   return (
//     <section className="w-screen min-h-screen bg-[#e7e5e1] px-[72px] py-[40px] box-border max-[900px]:px-[20px] max-[900px]:py-[24px] max-[480px]:px-[12px] max-[480px]:py-[16px]">
//       <div className="w-full min-h-[calc(100vh-80px)] border border-black/40 grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:min-h-0">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`
//               flex flex-col
//               border-r border-black/40
//               max-[900px]:border-r-0
//               max-[900px]:border-b
//               max-[900px]:border-black/40
//               ${index === cards.length - 1 ? "border-r-0 max-[900px]:border-b-0" : ""}
//             `}
//           >
//             {/* ================= HEADER ================= */}
//             <div className="border-b border-black/40 px-[24px] py-[16px] flex items-center justify-between max-[480px]:px-[16px] max-[480px]:py-[14px]">
//               <h2 className="text-[clamp(20px,2vw,28px)] font-semibold tracking-[-0.03em] text-[#1d1d1d] leading-none max-[900px]:text-[22px] max-[480px]:text-[20px]">
//                 {card.title}
//               </h2>

//               <div className="flex items-center gap-[12px] text-black/80">
//                 <span className="w-[20px] h-px bg-black/70 block" />

//                 <span className="text-[17px] tracking-[0.2em] max-[480px]:text-[14px]">
//                   {card.number}
//                 </span>
//               </div>
//             </div>

//             {/* ================= DESCRIPTION ================= */}
//             <div className="grid grid-cols-[82px_1fr] border-b border-black/40 min-h-[96px] max-[480px]:grid-cols-[56px_1fr] max-[480px]:min-h-[80px]">
//               {/* ICON */}
//               <div className="border-r border-black/40 flex items-center justify-center">
//                 {card.icon === "circle" && (
//                   <div className="w-[23px] h-[23px] rounded-full bg-[#7EA46C]" />
//                 )}

//                 {card.icon === "triangle" && (
//                   <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[26px] border-b-[#7EA46C]" />
//                 )}

//                 {card.icon === "square" && (
//                   <div className="w-[24px] h-[24px] bg-[#7EA46C]" />
//                 )}
//               </div>

//               {/* TEXT */}
//               <div className="flex items-center px-[32px] py-[12px] max-[480px]:px-[16px] max-[480px]:py-[10px]">
//                 <p className="text-[14px] leading-[1.25] text-black/75 max-w-[260px] max-[480px]:text-[13px]">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>

//             {/* ================= TOP IMAGE ================= */}
//             {index !== 1 && (
//               <div className="px-[28px] pt-[28px] pb-[24px] max-[900px]:px-[24px] max-[900px]:pt-[24px] max-[900px]:pb-[20px] max-[480px]:px-[16px] max-[480px]:pt-[16px] max-[480px]:pb-[12px]">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-[240px] object-cover grayscale block max-[900px]:h-[260px] max-[480px]:h-[200px]"
//                 />
//               </div>
//             )}

//             {/* ================= LIST ================= */}
//             <div
//               className={`
//                 px-[28px]
//                 max-[900px]:px-[24px]
//                 max-[480px]:px-[16px]
//                 ${index === 1 ? "pt-[28px]" : "pt-0"}
//                 max-[900px]:pt-[24px]
//                 max-[480px]:pt-[20px]
//               `}
//             >
//               <ul className="flex flex-col gap-[24px] max-[480px]:gap-[18px]">
//                 {card.items.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-[12px] text-[15px] text-black/80 max-[480px]:text-[14px]"
//                   >
//                     {/* PIXEL ICON */}
//                     <div className="relative w-[15px] h-[15px] flex-shrink-0">
//                       <span className="absolute top-0 left-0 w-[5px] h-[5px] bg-black" />
//                       <span className="absolute top-[4px] left-[8px] w-[5px] h-[5px] bg-black" />
//                       <span className="absolute bottom-0 left-0 w-[5px] h-[5px] bg-black" />
//                     </div>

//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ================= FOOTER ================= */}
//             <div className="mt-auto px-[28px] pb-[28px] pt-0 max-[900px]:px-[24px] max-[900px]:pb-[24px] max-[480px]:px-[16px] max-[480px]:pb-[20px]">
//               <div className="border-t border-black/40 pt-[24px] flex items-end justify-between">
//                 {/* LEFT */}
//                 <div>
//                   {card.footerTitle && (
//                     <div className="text-[32px] font-semibold tracking-[-0.06em] text-black/90 leading-none max-[480px]:text-[26px]">
//                       {card.footerTitle}
//                     </div>
//                   )}

//                   <p className="text-[13px] leading-[1.1] text-black/55 mt-[8px] max-w-[140px] max-[480px]:text-[12px]">
//                     {card.footerDesc}
//                   </p>
//                 </div>

//                 {/* BUTTON */}
//                 <button className="group flex items-center gap-[6px] hover:gap-[12px] transition-all duration-300 text-[#7EA46C] uppercase bg-transparent border-none cursor-pointer p-0 text-[18px] tracking-[-0.03em] max-[480px]:text-[15px]">
//                   <HiArrowTurnDownRight className="text-[24px] mb-[8px]" />

//                   <span>Explore</span>
//                 </button>
//               </div>

//               {/* ================= BOTTOM IMAGE ================= */}
//               {index === 1 && (
//                 <div className="pt-[28px] mx-[-28px] mb-[-28px] max-[900px]:mx-[-24px] max-[900px]:mb-[-24px] max-[480px]:mx-[-16px] max-[480px]:mb-[-20px]">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-[240px] object-cover grayscale block max-[900px]:h-[260px] max-[480px]:h-[200px]"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }