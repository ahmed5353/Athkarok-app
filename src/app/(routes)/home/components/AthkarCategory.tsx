import clsx from "clsx";

type AthkarCategoryProps = { category: string; className?: string };

export default function AthkarCategory({
  category,
  className,
  ...props
}: Readonly<AthkarCategoryProps>) {
  return (
    <button
      className={clsx("p-4 text-center text-xl font-bold", className)}
      {...props}
    >
      {category}
    </button>
  );
}
