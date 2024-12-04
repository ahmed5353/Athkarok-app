"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { zikrDb, ZikrCategory } from "@/lib/db";
import ThikrCard from "@/app/components/ThikrCard";
import { Zikr } from "@/app/types/types";
import { useEffect } from "react";
import { sabahZikr } from "@/app/data";

export default function SabahZikrPage() {
  useEffect(() => {
    const initDb = async () => {
      // Check if database is empty before adding initial data
      const sabahCount = await zikrDb.sabahZikr.count();

      if (sabahCount === 0) {
        await zikrDb.setUpInitialData(
          sabahZikr, // masaaZikr
          [],
          [], // masjidZikr
          [], // sleepZikr
        );
      }
    };
    initDb();
  }, []);
  // Initialize database on component mount

  // Use useLiveQuery to get real-time updates
  const zikrs = useLiveQuery(() => zikrDb.sabahZikr.toArray(), []);

  const handleZikrClick = async (zikr: Zikr) => {
    if (zikr.id) {
      await zikrDb.decrementZikrCount(ZikrCategory.SABAH, zikr.id);
    }
  };

  if (!zikrs) return <div>Loading...</div>;

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
