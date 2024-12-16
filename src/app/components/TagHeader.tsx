import React, { ReactNode } from "react";
import Tag from "./Tag";
import { FiShare2 } from "react-icons/fi";

interface HeaderProps {
  tagLabel: string;
  children: ReactNode;
}
export default function TagHeader({ tagLabel, children }: HeaderProps) {
  return (
    <div className="mb-3 flex justify-between px-2">
      <Tag label={tagLabel} />
      {children}
    </div>
  );
}
