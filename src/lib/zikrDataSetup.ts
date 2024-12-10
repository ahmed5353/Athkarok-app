// import { Zikr, ZikrCategory } from "@/app/types/types";
// import { zikrDb } from "./db";
// import { masaaZikr, masjidZikr, noomZikr, sabahZikr } from "@/app/data";

//   const zikrPages = {
//     [ZikrCategory.SABAH]: sabahZikr,
//     [ZikrCategory.MASAA]: masaaZikr,
//     [ZikrCategory.MASJID]: masjidZikr,
//     [ZikrCategory.NOOM]: noomZikr,
//   };
// const initializeZikrData = async (category: ZikrCategory, zikrs: Zikr[]) => {

//   const count = await zikrDb[category].count();
//   if (count === 0 && zikrs.length > 0) {
//     await zikrDb.setUpInitialData(
//       category === ZikrCategory.SABAH ? zikrs : [],
//       category === ZikrCategory.MASAA ? zikrs : [],
//       category === ZikrCategory.MASJID ? zikrs : [],
//       category === ZikrCategory.NOOM ? zikrs : [],
//     );
//   }
// };
// export default initializeZikrData;

import { Zikr, ZikrCategory } from "@/app/types/types";
import { zikrDb } from "./db";

/**
 * Initializes zikr data for a specific category if empty.
 * @param category The category to initialize
 * @param zikrs The zikr data to add
 */
const zikrDataSetup = async (category: ZikrCategory, zikrs: Zikr[]) => {
  try {
    const count = await zikrDb[category].count();

    // TODO: We will Edit This condition LATER
    if (count === 0 && zikrs.length > 0) {
      await zikrDb.setUpInitialData(
        category === ZikrCategory.ASTEKAZ ? zikrs : [],
        category === ZikrCategory.SABAH ? zikrs : [],
        category === ZikrCategory.MASAA ? zikrs : [],
        category === ZikrCategory.NOOM ? zikrs : [],
        category === ZikrCategory.MASJID ? zikrs : [],
        category === ZikrCategory.SALAH ? zikrs : [],
      );
    }
  } catch (error) {
    console.error(
      `Failed to initialize zikr data for category ${category}:`,
      error,
    );
  }
};
export default zikrDataSetup;
