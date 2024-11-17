import clsx from "clsx";
import React, { ReactNode } from "react";
interface FooterItemProps {
  label: string;
  value: ReactNode;
  isLast?: boolean;
  className?: string;
}
export default function FooterItem({
  label,
  value,
  isLast,
  className,
}: FooterItemProps) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer flex-col items-center text-gray-900",
        !isLast && "border-e-2 border-gray-900",
        className,
      )}
    >
      <span>{label}</span>
      <span
        className={clsx(
          typeof value === "number" &&
            "rounded-full border border-gray-900 px-4",
        )}
      >
        {value}
      </span>
    </div>
  );
}
