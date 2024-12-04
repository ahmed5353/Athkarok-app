import clsx from "clsx";
import { on } from "events";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className, onClick }: CardProps) {
  // function hadleClick(e: React.MouseEvent<HTMLDivElement>) {
  //   e.stopPropagation();
  //
  //     onClick();
  //   }
  // }
  return (
    <section
      className={clsx("rounded-lg bg-[#eaeaea] p-3", className)}
      onClick={onClick}
    >
      {children}
    </section>
  );
}
