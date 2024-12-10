import { useEffect, useState } from "react";
import { Zikr, ZikrCategory } from "@/app/types/types";
import { useLiveQuery } from "dexie-react-hooks";
import zikrDataSetup from "@/lib/zikrDataSetup";
import { zikrDb } from "@/lib/db";
const useZikrData = (category: ZikrCategory, initialData: Zikr[]) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initDb = async () => {
      try {
        await zikrDataSetup(category, initialData);
      } catch (error) {
        console.error(
          `Error initializing database for category ${category}:`,
          error,
        );
      } finally {
        setLoading(false);
      }
    };
    initDb();
  }, [category, initialData]);

  // Real-time data from the database
  const zikrs = useLiveQuery(() => zikrDb[category].toArray(), [category]);

  const handleZikrClick = async (zikr: Zikr) => {
    if (zikr.id) {
      try {
        await zikrDb.decrementZikrCount(category, zikr.id);
      } catch (error) {
        console.error(`Error updating zikr with id ${zikr.id}:`, error);
      }
    }
  };

  return {
    zikrs,
    loading,
    handleZikrClick,
  };
};

export default useZikrData;
