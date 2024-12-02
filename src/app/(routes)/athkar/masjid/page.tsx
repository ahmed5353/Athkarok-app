"use client";

import ThikrCard from "@/app/components/ThikrCard";
import { masjidZikr } from "@/app/data";
import { Zikr } from "@/app/types/types";
import { ZikrCategory, zikrDb } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect } from "react";

export default function MasaaPage() {
  useEffect(() => {
    const initDb = async () => {
      // Check if database is empty before adding initial data
      const sabahCount = await zikrDb.masjidZikr.count();

      if (sabahCount === 0) {
        await zikrDb.setUpInitialData(
          [],
          [],
          masjidZikr, // masjidZikr
          [], // sleepZikr
        );
      }
    };
    initDb();
  }, []);
  const zikrs = useLiveQuery(() => zikrDb.masjidZikr.toArray(), []);

  const handleZikrClick = async (zikr: Zikr) => {
    if (zikr.id) {
      await zikrDb.decrementZikrCount(ZikrCategory.MASJID, zikr.id);
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
