import Image from "next/image";

interface ButtonAthkarProps {
  title: string;
}

export default function ButtonAthkar({ title }: ButtonAthkarProps) {
  return (
    <button className="mt-4 flex items-center gap-3 rounded-sm border px-2 py-1">
      <span> {title}</span>

      <Image
        src="/images/fast-forward.webp"
        className="rotate-180"
        alt="Fast forward icon"
        width={20}
        height={20}
      />
    </button>
  );
}
