export default function AthkarCategories() {
  const categories: string[] = [
    'أذكار الصباح',
    'أذكار المساء',
    'أذكار النوم',
    'أذكار المسجد',
  ];

  return (
    <div
      aria-label="Athkar categories"
      className="grid grid-cols-2  content-center bg-red-400  "
    >
      {categories.map((category) => (
        <div
          key={category}
          className="text-xl font-bold  flex justify-center h-full p-2 border border-yellow-300"
        >
          {category}
        </div>
      ))}
    </div>
  );
}
