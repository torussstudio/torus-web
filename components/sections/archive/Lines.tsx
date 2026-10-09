import { Fragment } from "react";

/**
 * Renders the design's heading line breaks on desktop only:
 * ["Line one", "line two"] -> "Line one<br/>line two" (xl and up).
 * On phone/tablet the heading wraps naturally.
 */
export default function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              {" "}
              <br className="hidden xl:inline" />
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  );
}
