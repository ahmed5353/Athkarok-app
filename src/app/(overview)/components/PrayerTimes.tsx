"use client";
import Card from "@/app/components/Card";
import TagHeader from "@/app/components/TagHeader";
import AdhanTime from "./AdhanTime";
import usePrayerTimes from "@/app/hooks/usePrayerTimes";

export default function PrayerTimes() {
  const { data, isLoading, error } = usePrayerTimes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading prayer times.</div>;

  const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = data?.timings || {};
  console.log(Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha);

  const adhanTime: {
    adhan: string;
    icon: string;
    time: string;
  }[] = [
    {
      adhan: "الفجر",
      icon: "🌙",
      time: Fajr,
    },
    {
      adhan: "الشروق",
      icon: "☀️",
      time: Sunrise,
    },
    {
      adhan: "الظهر",
      icon: "🕐",
      time: Dhuhr,
    },
    {
      adhan: "العصر",
      icon: "🕒",
      time: Asr,
    },
    {
      adhan: "المغرب",
      icon: "🌅",
      time: Maghrib,
    },
    {
      adhan: "العشاء",
      icon: "🌌",
      time: Isha,
    },
  ];
  return (
    <Card className="bg-gradient-to-b from-[#d9efff80] to-[#ffdcc7dc]">
      <TagHeader tagLabel="مواقيت الصلاة">
        <span className="text-blue-950">
          Mansoura, Egypt | 16th Dec 2024 (3 Jumada al-Awwal 1446)
        </span>
      </TagHeader>
      <div className="flex flex-col gap-2">
        {adhanTime.map((adhan) => (
          <AdhanTime
            adhanName={adhan.adhan}
            icon={adhan.icon}
            adhanTime={adhan.time}
            key={adhan.adhan}
          />
        ))}
      </div>
    </Card>
  );
}
