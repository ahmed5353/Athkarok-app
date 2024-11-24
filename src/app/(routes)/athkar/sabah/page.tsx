import ThikrCard from "@/app/components/ThikrCard";
import { sabahZikr } from "@/app/data";

export default function SabahPage() {
  return (
    <>
      {sabahZikr.map((zikr) => (
        <ThikrCard repeat={zikr.count} thikr={zikr.zikrText} key={zikr.id} />
      ))}
    </>
  );
}
