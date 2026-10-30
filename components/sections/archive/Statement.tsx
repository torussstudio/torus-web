import Lines from "./Lines";

/**
 * Large statement with the design's line breaks from tablet up;
 * on phones the same text wraps freely so it never overflows.
 */
export default function Statement({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <p data-reveal className={className}>
      <span className="md:hidden">{lines.join(" ")}</span>
      <span className="hidden md:block">
        <Lines lines={lines} />
      </span>
    </p>
  );
}
