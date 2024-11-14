import clsx from "clsx";
import AthkarCategory from "./AthkarCategory";

export default function AthkarCategories() {
  const categories: string[] = [
    "أذكار الصباح",
    "أذكار المساء",
    "أذكار المسجد",
    "أذكار النوم",
  ];

  return (
    <div
      aria-label="Athkar categories"
      className={clsx("grid grid-cols-2 rounded-lg bg-red-400")}
    >
      {categories.map((category, index) => (
        <AthkarCategory
          key={category}
          category={category}
          className={clsx({
            "border-b border-l": index === 0,
            "border-b": index === 1,
            "border-r": index === 3,
          })}
        />
      ))}
    </div>
  );
}
