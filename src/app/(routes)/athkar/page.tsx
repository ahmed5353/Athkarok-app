import { Suspense } from "react";
import AthkarCard from "./components/AthkarCard";
import Loading from "./loading";

export default function AthkarPage() {
  const athkarList = [
    {
      thikr: "أذكار الاستيقاظ",
      image: 'url("/images/zikr-icons/estekaz-pic.jpg")',
      path: "astekaz",
    },
    {
      thikr: "أذكار الصباح",
      image: 'url("/images/zikr-icons/sabah-pic.jpg")',
      path: "sabah",
    },
    {
      thikr: "أذكار المساء",
      image: 'url("/images/zikr-icons/masaa-pic.jpg")',
      path: "masaa",
    },
    {
      thikr: "أذكار النوم",
      image: 'url("/images/zikr-icons/noom-pic.jpg")',
      path: "noom",
    },
    {
      thikr: "أذكار المسجد",
      image: 'url("/images/zikr-icons/massjed-pic.jpg")',
      path: "masjid",
    },

    {
      thikr: "أذكار الصلاة",
      image: 'url("/images/zikr-icons/slaah-pic.jpg")',
      path: "salah",
    },
  ];
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col gap-3">
        {athkarList.map((athkar) => (
          <AthkarCard
            key={athkar.thikr}
            image={athkar.image}
            thikr={athkar.thikr}
            path={athkar.path}
          />
        ))}
      </main>
    </Suspense>
  );
}
