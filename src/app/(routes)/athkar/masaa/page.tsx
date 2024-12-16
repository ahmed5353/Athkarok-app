"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { ZikrCategory } from "@/app/types/types";
import { Suspense, useEffect } from "react";
import { masaaZikr } from "@/app/data/athkar";

import useZikrData from "@/app/hooks/useZikrData";
import Loading from "./loading";

export default function MasaaPage() {
  const { zikrs, loading, handleZikrClick } = useZikrData(
    ZikrCategory.MASAA,
    masaaZikr,
  );

  // if (loading) return <div>Loading...</div>;

  return (
    <Suspense fallback={<Loading />}>
      {zikrs?.map((zikr) => (
        <ThikrCard
          repeat={zikr.count}
          thikr={zikr.zikrText}
          dalel={zikr.dalel}
          key={zikr.id}
          onClick={() => handleZikrClick(zikr)}
        />
      ))}
    </Suspense>
  );
}
