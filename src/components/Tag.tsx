interface TagProps {
  label: string;
  className?: string;
}
export default function Tag({ label, className = '' }: TagProps) {
  return (
    <span
      className={`bg-gray-100 text-black  px-4 py-[2px] font-semibold text-sm rounded-full tracking-wider ${className}`}
    >
      {label}
    </span>
  );
}
