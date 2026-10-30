import { t } from "./styles";

/** Text made of parts; `accent: true` parts render in the accent colour (MedTech maroon). */
export type AccentText = { text: string; accent?: boolean }[];

export default function Accented({ parts }: { parts: AccentText }) {
  return (
    <>
      {parts.map((p, i) =>
        p.accent ? (
          <span key={i} className={t.accent}>
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}
