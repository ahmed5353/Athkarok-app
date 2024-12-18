import Card from "@/app/components/Card";
import TagHeader from "@/app/components/TagHeader";
import AdhanTime from "./AdhanTime";

export default function PrayerTimes() {
  const adhanTime: {
    adhan: string;
    icon: string;
    time: string;
  }[] = [
    {
      adhan: "الفجر",
      icon: "🌙",
      time: "05:09 ص",
    },
    {
      adhan: "الشروق",
      icon: "☀️",
      time: "06:40 ص",
    },
    {
      adhan: "الظهر",
      icon: "🕐",
      time: "11:50 ص",
    },
    {
      adhan: "العصر",
      icon: "🕒",
      time: "03:09 م",
    },
    {
      adhan: "المغرب",
      icon: "🌅",
      time: "05:09 م",
    },
    {
      adhan: "العشاء",
      icon: "🌌",
      time: "07:09 م",
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
        {adhanTime?.map((adhan) => (
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
