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
  // function hadleClick(e: React.MouseEvent<HTMLDivElement>) {
  //   e.stopPropagation();
  //
  //     onClick();
  //   }
  // }
  return (
    <section
      className={twMerge("rounded-lg bg-[#eaeaea] p-3", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </section>
  );
}
