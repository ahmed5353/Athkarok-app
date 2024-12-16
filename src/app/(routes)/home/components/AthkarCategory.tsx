import { twMerge } from "tailwind-merge";

type AthkarCategoryProps = { category: string; className?: string };

export default function AthkarCategory({
  category,
  className,
  ...props
}: Readonly<AthkarCategoryProps>) {
  return (
    <button
      className={twMerge("p-4 text-center text-xl font-bold", className)}
      {...props}
    >
      {category}
    </button>
  );
}
