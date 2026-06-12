import { cards } from "@/lib/constants";
import { HiArrowTurnDownRight } from "react-icons/hi2";

export default function CreativeGrid() {


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
