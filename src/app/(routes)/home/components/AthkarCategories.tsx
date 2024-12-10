import clsx from "clsx";
import AthkarCategory from "./AthkarCategory";
import Link from "next/link";
import { AthkarCategory as Category } from "@/app/types/components";

export default function AthkarCategories() {
  const categories: Category[] = [
    { id: 1, name: "أذكار الصباح", path: "/athkar/sabah" },
    { id: 2, name: "أذكار المساء", path: "/athkar/masaa" },
    { id: 3, name: "أذكار المسجد", path: "/athkar/masjid" },
    { id: 4, name: "أذكار النوم", path: "/athkar/noom" },
  ];

  const borderStyles = ["border-b border-l", "border-b", "", "border-r"];

  return (
    <div
      aria-label="Athkar categories"
      className={clsx("grid grid-cols-2 rounded-lg bg-red-400 text-center")}
    >
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={category.path}
          className={clsx(borderStyles[index])}
          aria-label={`الإنتقال إلى  ${category.name}`}
        >
          <AthkarCategory category={category.name} />
        </Link>
      ))}
    </div>
  );
}
