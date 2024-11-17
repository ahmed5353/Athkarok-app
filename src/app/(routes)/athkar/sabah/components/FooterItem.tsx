import React, { ReactNode } from "react";
interface FooterItemProps {
  label: string;
  value: ReactNode;
}
export default function FooterItem({ label, value }: FooterItemProps) {
  return (
    <div className="flex flex-grow cursor-pointer flex-col items-center">
      <span>{label}</span>
      <span className="py-.5 rounded-full border bg-blue-400 px-2">
        {value}
      </span>
    </div>
  );
}
