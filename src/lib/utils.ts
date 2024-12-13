import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Today's date in YYYY-MM-DD format
export function getToday() {
  return new Date().toISOString().split("T")[0];
}
