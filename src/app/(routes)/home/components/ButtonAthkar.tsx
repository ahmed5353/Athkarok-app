import Image from 'next/image';

interface ButtonAthkarProps {
  title: string;
}

export default function ButtonAthkar({ title }: ButtonAthkarProps) {
  return (
    <button className="border mt-4 py-1 px-2 flex gap-3 items-center rounded-sm">
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
