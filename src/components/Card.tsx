import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <section className={clsx("rounded-lg bg-[#eaeaea] p-3", className)}>
      {children}
    </section>
  );
}
