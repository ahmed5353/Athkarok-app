import AthkarCategory from "./AthkarCategory";
import Link from "next/link";
import { AthkarCategory as Category } from "@/app/types/components";
import Card from "@/app/components/Card";
import { twMerge } from "tailwind-merge";

export default function AthkarCategories() {
  const categories: Category[] = [
    { id: 1, name: "أذكار الصباح", path: "/athkar/sabah" },
    { id: 2, name: "أذكار المساء", path: "/athkar/masaa" },
    { id: 3, name: "أذكار المسجد", path: "/athkar/masjid" },
    { id: 4, name: "أذكار النوم", path: "/athkar/noom" },
  ];

  const borderStyles = ["border-b border-l", "border-b", "border-l"];

  return (
    <Card
      aria-label="Athkar categories"
      className="grid grid-cols-2 rounded-lg p-0 text-center"
    >
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={category.path}
          className={twMerge("border-red-600", borderStyles[index])}
          aria-label={`move to ${category.name}`}
        >
          <AthkarCategory category={category.name} />
        </Link>
      ))}
    </Card>
  );
}
