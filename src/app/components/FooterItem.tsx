"use client";
import clsx from "clsx";
import { ReactNode } from "react";
interface FooterItemProps {
  label: string;
  value: ReactNode;
  isLast?: boolean;
  className?: string;
  onClick?: () => void;
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
      className={clsx(
        "flex cursor-pointer select-none flex-col items-center text-gray-900",
        !isLast && "border-e-2 border-gray-900",
        className,
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      <span
        className={clsx(
          typeof value === "number" &&
            "rounded-full border border-gray-900 bg-red-500 px-4",
        )}
      >
        {value}
      </span>
    </div>
  );
}
