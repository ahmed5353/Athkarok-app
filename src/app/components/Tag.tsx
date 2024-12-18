interface TagProps {
  label: string;
  className?: string;
}
export default function Tag({ label, className = "" }: TagProps) {
  return (
    <span
      className={`rounded-full bg-gray-100 px-4 py-[2px] text-sm font-semibold tracking-wider text-black ${className}`}
    >
      {label}
    </span>
  );
}
