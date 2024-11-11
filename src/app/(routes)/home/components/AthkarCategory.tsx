import clsx from 'clsx';

type AthkarCategoryProps = { category: string; className?: string };

export default function AthkarCategory({
  category,
  className,
  ...props
}: Readonly<AthkarCategoryProps>) {
  return (
    <button
      className={clsx('text-xl font-bold  p-4 text-center ', className)}
      {...props}
    >
      {category}
    </button>
  );
}
