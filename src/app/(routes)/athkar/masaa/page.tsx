"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { masaaZikr } from "@/app/data";
import { Zikr } from "@/app/types/types";
import { ZikrCategory, zikrDb } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect } from "react";

export default function MasaaPage() {
  useEffect(() => {
    const initDb = async () => {
      // Check if database is empty before adding initial data
      const sabahCount = await zikrDb.masaaZikr.count();

      if (sabahCount === 0) {
        await zikrDb.setUpInitialData(
          [],
          masaaZikr, // masaaZikr
          [], // masjidZikr
          [], // sleepZikr
        );
      }
    };
    initDb();
  }, []);
  const zikrs = useLiveQuery(() => zikrDb.masaaZikr.toArray(), []);

  const handleZikrClick = async (zikr: Zikr) => {
    if (zikr.id) {
      await zikrDb.decrementZikrCount(ZikrCategory.MASAA, zikr.id);
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
