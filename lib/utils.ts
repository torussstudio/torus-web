import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) {
    return "Invalid date";
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
/**
 * SplitText treats every <br> as a forced line break, even the ones the
 * <Lines> component hides below xl (`hidden xl:inline`). Remove the hidden
 * ones before splitting so phone / tablet lines wrap naturally.
 * Returns a function that puts the original markup back.
 */
export function dropHiddenBreaks(els: HTMLElement[]) {
  const originals = els.map((el) => el.innerHTML);
  els.forEach((el) =>
    el.querySelectorAll("br").forEach((br) => {
      if (getComputedStyle(br).display === "none") br.remove();
    }),
  );
  return () => els.forEach((el, i) => (el.innerHTML = originals[i]));
}
