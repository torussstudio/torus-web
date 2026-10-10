import { cn } from "@/lib/utils";
import Lines from "@/components/sections/archive/Lines";
import { h } from "./styles";

const points = [
  ["A positioning problem can become a", "communication problem."],
  ["A communication problem can become", "a website problem."],
  ["A website problem can become a trust", "problem."],
];

const note = [
  "Keeping strategy, design, digital,",
  "communication, and art close together",
  "allows us to see the larger system, and build",
  "solutions that work coherently across it.",
];

export default function DisciplineSection() {
  return (
    <section
      className={cn(
        h.inner,
        "grid grid-cols-1 border-b md:grid-cols-[1fr_1fr] xl:h-785 xl:grid-cols-[922fr_998fr]",
      )}
    >
      {/* LEFT — heading inside the half circle */}
      <div className="relative flex min-h-240 items-center overflow-hidden border-b px-24 py-56 md:min-h-420 md:border-r md:border-b-0 md:px-40 xl:min-h-0 xl:py-0 xl:pl-190">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 hidden aspect-[1/2] h-full rounded-r-full border border-l-0 md:block"
        />
        <h2 data-reveal className={cn(h.h2, "relative")}>
          <Lines lines={["One problem", "rarely belongs to", "one discipline."]} />
        </h2>
      </div>

      {/* RIGHT — points + note */}
      <div className="flex flex-col justify-center px-24 py-48 md:px-40 md:py-56 xl:p-0 xl:pl-167">
        <ul className="space-y-20 xl:space-y-0">
          {points.map((lines, i) => (
            <li
              key={i}
              data-reveal
              className={cn(
                h.body,
                "flex items-center gap-20 xl:gap-51",
                i === 1 && "xl:mt-41",
                i === 2 && "xl:mt-55",
              )}
            >
              <span aria-hidden="true" className="size-8 shrink-0 bg-current xl:size-11" />
              <span>
                <Lines lines={lines} />
              </span>
            </li>
          ))}
        </ul>

        <p data-reveal className={cn(h.body, "mt-36 max-w-[460px] xl:mt-89 xl:max-w-none")}>
          <Lines lines={note} />
        </p>
      </div>
    </section>
  );
}
