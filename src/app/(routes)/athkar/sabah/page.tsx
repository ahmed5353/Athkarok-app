"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { ZikrCategory } from "@/app/types/types";
import { useEffect } from "react";
import { sabahZikr } from "@/app/data";
import zikrDataSetup from "@/lib/zikrDataSetup";
import useZikrData from "@/app/hooks/useZikrData";

export default function SabahPage() {
  const { zikrs, loading, handleZikrClick } = useZikrData(
    ZikrCategory.SABAH,
    sabahZikr,
  );

  // Initialize database on component mount
  useEffect(() => {
    const initDb = async () => {
      await zikrDataSetup(ZikrCategory.SABAH, sabahZikr);
    };
    initDb();
  }, []);

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
