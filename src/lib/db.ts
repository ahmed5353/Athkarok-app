import { Zikr, ZikrCategory } from "@/app/types/types";
import Dexie, { Table } from "dexie";

// Zikr database class
export class ZikrDatabase extends Dexie {
  astekazZikr!: Table<Zikr>;
  sabahZikr!: Table<Zikr>;
  masaaZikr!: Table<Zikr>;
  noomZikr!: Table<Zikr>;
  masjidZikr!: Table<Zikr>;
  salahZikr!: Table<Zikr>;

  constructor() {
    super("ZikrDatabase");
    this.version(5).stores({
      astekazZikr: "++id",
      sabahZikr: "++id",
      masaaZikr: "++id",
      noomZikr: "++id",
      masjidZikr: "++id",
      salahZikr: "++id",
    });
  }

  /**
   * Updates a zikr entry based on a transformation function.
   * @param category The category table to update
   * @param zikrId The ID of the zikr to update
   * @param updateFn Function to compute the update
   */
  private async updateZikrCount(
    category: ZikrCategory,
    zikrId: number,
    updateFn: (zikr: Zikr) => Partial<Zikr>,
  ) {
    try {
      await this.transaction("rw", this[category], async () => {
        const zikr = await this[category].get(zikrId);
        if (zikr) {
          const updatedZikr = updateFn(zikr);
          await this[category].update(zikrId, updatedZikr);
        }
      });
    } catch (error) {
      console.error(
        `Error updating zikr count for category ${category}:`,
        error,
      );
    }
  }
  // {O(1) + O(N) => Better}
  async setUpInitialData(
    astekazZikrs: Zikr[],
    sabahZikrs: Zikr[],
    masaaZikrs: Zikr[],
    noomZikrs: Zikr[],
    masjidZikrs: Zikr[],
    salahZikrs: Zikr[],
  ): Promise<void> {
    try {
      await this.transaction(
        "rw",
        [
          this.astekazZikr,
          this.sabahZikr,
          this.masaaZikr,
          this.noomZikr,
          this.masjidZikr,
          this.salahZikr,
        ],
        async () => {
          if (astekazZikrs.length > 0)
            await this.astekazZikr.bulkAdd(astekazZikrs);
          if (sabahZikrs.length > 0) await this.sabahZikr.bulkAdd(sabahZikrs);
          if (masaaZikrs.length > 0) await this.masaaZikr.bulkAdd(masaaZikrs);
          if (noomZikrs.length > 0) await this.noomZikr.bulkAdd(noomZikrs);
          if (masjidZikrs.length > 0)
            await this.masjidZikr.bulkAdd(masjidZikrs);
          if (salahZikrs.length > 0) await this.salahZikr.bulkAdd(salahZikrs);
        },
      );
    } catch (error) {
      console.error("Error initializing database:", error);
      throw new Error("Database setup failed. Please try again.");
    }
  }

  // { O(C) + O(N)}
  // async setUpInitialData(data: Record<ZikrCategory, Zikr[]>): Promise<void> {
  //   try {
  //     await this.transaction(
  //       "rw",
  //       Object.keys(data).map((key) => this[key]),
  //       async () => {
  //         for (const [category, zikrs] of Object.entries(data)) {
  //           if (zikrs.length > 0) {
  //             await this[category as ZikrCategory].bulkAdd(zikrs);
  //           }
  //         }
  //       },
  //     );
  //   } catch (error) {
  //     console.error("Error initializing database:", error);
  //     throw new Error("Database setup failed. Please try again.");
  //   }
  // }

  /**
   * Decrements the count of a zikr or deletes it if the count is 1.
   * @param category The category table to update
   * @param zikrId The ID of the zikr to update
   */
  async decrementZikrCount(category: ZikrCategory, zikrId: number) {
    try {
      await this.updateZikrCount(category, zikrId, (zikr) => {
        if (zikr.count > 1) {
          return { count: zikr.count - 1 };
        }
        this[category].delete(zikrId); // Deleting is a separate action
        return {};
      });
    } catch (error) {
      console.error(
        `Error decrementing zikr count for category ${category}:`,
        error,
      );
    }
  }
}

// Singleton instance of the database
export const zikrDb = new ZikrDatabase();
