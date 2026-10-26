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

/**
 * "One problem rarely belongs to one discipline."
 * HomeScrollFx animates this as a chain reaction: the points arrive one by
 * one and a line draws from each square to the next, while the half circle
 * draws on. Without JS / with reduced motion
 * it renders as the static design: half circle, all points, no link lines.
 */
export default function DisciplineSection() {
  return (
    <section
      data-fx="discipline"
      className={cn(
        h.inner,
        "grid grid-cols-1 border-b md:grid-cols-[1fr_1fr] xl:h-785 xl:grid-cols-[922fr_998fr]",
      )}
    >
      {/* LEFT — heading inside the half circle */}
      <div className="relative flex min-h-240 items-center overflow-hidden border-b px-24 py-56 md:min-h-420 md:border-r md:border-b-0 md:px-40 xl:min-h-0 xl:py-0 xl:pl-190">
        {/* circle = column height, centred on the old half circle's flat edge.
            pathLength 100: dash "50 100" = right half only (the design);
            the animation only draws this half on.
            No non-scaling-stroke: with pathLength it breaks the dashes, so
            HomeScrollFx sets strokeWidth to exactly 1px for the real size. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 hidden aspect-square h-full md:block"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90 overflow-visible">
            <circle
              data-fx="discipline-arc"
              cx="50"
              cy="50"
              r="49.8"
              pathLength={100}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.14"
              strokeDasharray="50 100"
            />
          </svg>
        </span>
        <h2 data-fx="discipline-title" className={cn(h.h2, "relative")}>
          <Lines lines={["One problem", "rarely belongs to", "one discipline."]} />
        </h2>
      </div>

      {/* RIGHT — points + note */}
      <div className="flex flex-col justify-center px-24 py-48 md:px-40 md:py-56 xl:p-0 xl:pl-167">
        <ul className="relative space-y-20 xl:space-y-0">
          {points.map((lines, i) => (
            <li
              key={i}
              data-fx="discipline-point"
              className={cn(
                h.body,
                "relative flex items-center gap-20 xl:gap-51",
                i === 1 && "xl:mt-41",
                i === 2 && "xl:mt-55",
              )}
            >
              <span
                data-fx="discipline-dot"
                aria-hidden="true"
                className="size-8 shrink-0 bg-current xl:size-11"
              />
              <span>
                <Lines lines={lines} />
              </span>

              {/* chain line down to the next square — position + length are
                  measured by HomeScrollFx, hidden until then */}
              {i < points.length - 1 && (
                <span
                  data-fx="discipline-link"
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 hidden w-px origin-top bg-current"
                />
              )}
            </li>
          ))}
        </ul>

        <p data-fx="discipline-note" className={cn(h.body, "mt-36 max-w-[460px] xl:mt-89 xl:max-w-none")}>
          <Lines lines={note} />
        </p>
      </div>
    </section>
  );
}
