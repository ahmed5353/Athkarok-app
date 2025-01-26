import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Today's date in YYYY-MM-DD format
export function getToday() {
  // return new Date().toISOString().split("T")[0];
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  //  console.log(formattedDate);
  return formattedDate;
}
