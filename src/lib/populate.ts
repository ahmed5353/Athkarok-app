// import { sabahZikr, masaaZikr } from "@/app/data";
// import { db } from "./db";
// import { Zikr } from "@/app/types/types";

// export async function populate() {
//   const zikrCategoryId = await db.zikrCategories.add({
//     sabah: "Sabah",
//     masa: "Masa",
//   });
//   await db.zikrItems.bulkAdd(
//     sabahZikr.map((zikr) => ({
//       ...zikr,
//       zikrCategoryId: zikrCategoryId,
//       week: zikr.week ?? false,
//     })),
//   );
// }
