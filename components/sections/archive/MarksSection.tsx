import { cn } from "@/lib/utils";
import type { ArchiveMedia } from "@/lib/constants";
import Media from "./Media";
import { t } from "./styles";

type Mark = {
  caption?: string;
  image: ArchiveMedia;
};

// Small square + centred caption under the signature / seal blocks
const caption = cn(
  t.body,
  "relative mt-14 text-center xl:mt-33",
  "before:absolute before:top-1/2 before:left-0 before:size-7 before:-translate-y-1/2 before:bg-[#38362e] before:content-['']",
  "xl:before:size-[max(7px,calc(var(--spacing)*11))]",
);

/** Signature mark (large) + seal (small) row, used by TSA and Exult */
export default function MarksSection({
  data: d,
}: {
  data: { signature: Mark; seal: Mark };
}) {
  return (
    <div className="grid grid-cols-1 border-b md:grid-cols-[1.6fr_1fr] xl:grid-cols-[1171fr_749fr]">
      <div className="p-24 md:p-32 xl:pt-49 xl:pr-0 xl:pb-42 xl:pl-50">
        <Media
          media={d.signature.image}
          className="aspect-[1070/878] h-auto xl:aspect-auto xl:h-878 xl:w-1070"
          sizes="(max-width: 1023px) 100vw, 56vw"
        />

        {d.signature.caption && (
          <p className={cn(caption, "xl:w-1070")}>
            {d.signature.caption}
          </p>
        )}
      </div>

      <div className="border-t p-24 md:border-t-0 md:border-l md:p-32 xl:border-t-0 xl:border-l xl:pt-49 xl:pr-0 xl:pb-42 xl:pl-53">
        <Media
          media={d.seal.image}
          className="aspect-square h-auto xl:aspect-auto xl:h-648 xl:w-646"
          sizes="(max-width: 1023px) 100vw, 34vw"
        />

        {d.seal.caption && (
          <p className={cn(caption, "xl:w-646")}>
            {d.seal.caption}
          </p>
        )}
      </div>
    </div>
  );
}