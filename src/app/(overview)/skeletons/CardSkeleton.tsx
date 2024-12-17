import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
}

export default function CardSkeleton({ ...props }: CardProps) {
  return (
    <section
      className={twMerge("h-28 rounded-lg bg-gray-400")}
      {...props}
    ></section>
  );
}
