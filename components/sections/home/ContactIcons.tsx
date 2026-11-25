import { HOME_CONTACT_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ContactIcons({ fixed = false }: { fixed?: boolean }) {
  return (
    <nav
      aria-label="Studio contact links"
      className={cn(
        fixed
          ? "fixed bottom-[max(12px,env(safe-area-inset-bottom))] left-1/2 z-[35] flex -translate-x-1/2 gap-2 lg:hidden"
          : "hidden gap-24 md:col-span-2 md:px-40 md:pb-48 lg:flex xl:col-span-1 xl:flex-col xl:justify-end xl:gap-32 xl:p-0 xl:pb-94 xl:pl-38",
      )}
    >
      {HOME_CONTACT_LINKS.map(({ icon: Icon, href, label, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          data-intro={fixed ? undefined : "item"}
          className={cn(
            "text-[#38362e]/70 transition-colors hover:text-[#38362e] focus-visible:outline-2 focus-visible:outline-offset-2",
            fixed && "inline-flex h-11 w-[52px] items-center justify-center rounded-full border border-[#38362e]/15 bg-[var(--page-paper)]/35 backdrop-blur-[3px]",
          )}
        >
          <Icon aria-hidden="true" className={fixed ? "size-5" : "size-22 xl:size-28"} />
        </a>
      ))}
    </nav>
  );
}
