"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { ZikrCategory } from "@/app/types/types";
import { noomZikr } from "@/app/data/athkar";
import useZikrData from "@/app/hooks/useZikrData";

export default function NoomPage() {
  const { zikrs, loading, handleZikrClick } = useZikrData(
    ZikrCategory.NOOM,
    noomZikr,
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
