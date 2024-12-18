import { twMerge } from "tailwind-merge";

interface adhanTimeProps {
  readonly icon: string;
  readonly adhanName: string;
  readonly adhanTime: string;
}

const ADHAN_NAMES = {
  FAJR: "الفجر",
  MAGHRIB: "المغرب",
} as const;

export default function AdhanTime({
  icon,
  adhanName,
  adhanTime,
}: adhanTimeProps) {
  return (
    <div
      className={twMerge(
        "flex justify-around rounded-lg bg-gradient-to-r from-blue-50/60 to-orange-50/60 px-4 py-2 text-zinc-700",
        adhanName === ADHAN_NAMES.FAJR &&
          "border border-blue-300 bg-blue-200 text-blue-600",
        adhanName === ADHAN_NAMES.MAGHRIB &&
          "border border-orange-300 bg-orange-200 text-orange-600 opacity-100",
      )}
    >
      <div className="flex items-center gap-1">
        <span>{icon}</span>
        <span>{adhanName}</span>
      </div>
      <span
        className={twMerge(
          "font-bold",
          adhanName === "الفجر" && "text-blue-600",
          adhanName === "المغرب" && "text-orange-600",
        )}
      >
        {adhanTime}
      </span>
    </div>
  );
}
