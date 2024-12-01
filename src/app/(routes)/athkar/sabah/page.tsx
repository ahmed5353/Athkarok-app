"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { zikrDb, ZikrCategory } from "@/lib/db";
import { masaaZikr, sabahZikr } from "@/app/data"; // Your original zikr data
import ThikrCard from "@/app/components/ThikrCard";
import { Zikr } from "@/app/types/types";
import { useEffect } from "react";

export default function SabahZikrPage() {
  // Initialize database on component mount
  useEffect(() => {
    const initDb = async () => {
      // Check if database is empty before adding initial data
      const sabahCount = await zikrDb.sabahZikr.count();

      if (sabahCount === 0) {
        await zikrDb.setUpInitialData(
          sabahZikr,
          masaaZikr, // masaaZikr
          [], // masjidZikr
          [], // sleepZikr
        );
      }
    };
    initDb();
  }, []);

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
          key={zikr.id}
          onClick={() => handleZikrClick(zikr)}
        />
      ))}
    </>
  );
}
