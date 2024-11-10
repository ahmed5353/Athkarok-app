export default function AthkarCategory({
  category,
}: Readonly<{ category: string }>) {
  return (
    <div key={category} className="text-xl font-bold border border-yellow-300">
      {category}
    </div>
  );
}
