interface adhanTimeProps {
  icon: string;
  adhanName: string;
  adhanTime: string;
}

export default function AdhanTime({
  icon,
  adhanName,
  adhanTime,
}: adhanTimeProps) {
  return (
    <div className="flex justify-around rounded-lg bg-zinc-300 px-4 py-2 text-zinc-700">
      <div className="flex items-center gap-1">
        <span>{icon}</span>
        <span>{adhanName}</span>
      </div>
      <span>{adhanTime}</span>
    </div>
  );
}
