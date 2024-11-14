import sunImg from "@/../public/images/sun.webp";
import Card from "@/components/Card";
import Image from "next/image";
import ButtonAthkar from "./ButtonAthkar";

export default function AthkarHeader() {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#ffc649]">أذكارك،</h2>
          <p className="text-2xl font-semibold">في ليلك ونهارك .</p>
        </div>

        <Image src={sunImg} alt="Sun image" width={100} />
      </div>
      <ButtonAthkar title="عطر يومك بأذكار X" />
    </Card>
  );
}
