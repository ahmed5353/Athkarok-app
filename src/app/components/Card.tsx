import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  onClick,
  ...props
}: CardProps) {
  return (
    <section
      className={twMerge(
        "rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 p-3",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </section>
  );
}
