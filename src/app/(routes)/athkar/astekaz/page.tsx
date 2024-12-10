"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { ZikrCategory } from "@/app/types/types";
import { astekazZikr } from "@/app/data/athkar";
import useZikrData from "@/app/hooks/useZikrData";

export default function AstekazPage() {
  const { zikrs, loading, handleZikrClick } = useZikrData(
    ZikrCategory.ASTEKAZ,
    astekazZikr,
  );

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {zikrs?.map((zikr) => (
        <ThikrCard
          repeat={zikr.count}
          thikr={zikr.zikrText}
          dalel={zikr.dalel}
          key={zikr.id}
          onClick={() => handleZikrClick(zikr)}
        />
      ))}
    </>
  );
}
