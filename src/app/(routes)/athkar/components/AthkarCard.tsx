import Link from "next/link";

interface AthkarCardProps {
  thikr: string;
  image: string;
  path: string;
}

export default function AthkarCard({ thikr, image, path }: AthkarCardProps) {
  return (
    <Link href={`athkar/${path}`} aria-label={`Navigate to ${thikr}`}>
      <div
        className="relative flex max-h-28 min-h-24 cursor-pointer items-center justify-center rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `${image}` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bottom-0 rounded-xl bg-gray-800 opacity-20"></div>

        <h1 className="z-10 text-3xl font-bold text-white">{thikr}</h1>
      </div>
    </Link>
  );
}
