"use client";
import { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { twJoin, twMerge } from "tailwind-merge";
interface FooterItemProps {
  label: string;
  value: ReactNode;
  isLast?: boolean;
  className?: string;
  onClick?: (e: ReactMouseEvent<HTMLDivElement>) => void;
}
export default function FooterItem({
  label,
  value,
  isLast,
  className,
  onClick,
}: FooterItemProps) {
  return (
    <div
      className={twMerge(
        "flex cursor-pointer select-none flex-col items-center text-gray-900",
        !isLast && "relative border-e-2 border-gray-900",
        className,
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      <span
        className={twJoin(
          typeof value === "number" &&
            "rounded-full border border-gray-900 bg-red-500 px-4",
        )}
      >
        {value}
      </span>
    </div>
  );
}
