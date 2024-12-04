import AthkarCard from "./components/AthkarCard";

export default function AthkarPage() {
  const athkarList = [
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
      thikr: "أذكار الاستيقاظ",
      image: 'url("/images/zikr-icons/estekaz-pic.jpg")',
      path: "estekaz",
    },
    {
      thikr: "أذكار الصلاة",
      image: 'url("/images/zikr-icons/slaah-pic.jpg")',
      path: "salah",
    },
    {
      thikr: "أذكار المسجد",
      image: 'url("/images/zikr-icons/massjed-pic.jpg")',
      path: "masjid",
    },
  ];
  return (
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
  );
}
