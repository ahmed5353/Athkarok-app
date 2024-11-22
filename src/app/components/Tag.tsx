import { FC } from "react";

interface TagProps {
  label: string;
  className?: string;
}
const Tag: FC<TagProps> = ({ label, className = "" }) => {
  return (
    <span
      className={`rounded-full bg-gray-100 px-4 py-[2px] text-sm font-semibold tracking-wider text-black ${className}`}
    >
      {label}
    </span>
  );
};
export default Tag;
