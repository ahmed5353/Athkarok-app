import { Zikr } from "@/app/types/types";
import Dexie, { Table } from "dexie";

// Enum for Zikr categories
export enum ZikrCategory {
  SABAH = "sabahZikr",
  MASAA = "masaaZikr",
  MASJID = "masjidZikr",
  SLEEP = "sleepZikr",
}

// Zikr database class
export class ZikrDatabase extends Dexie {
  sabahZikr!: Table<Zikr>;
  masaaZikr!: Table<Zikr>;
  masjidZikr!: Table<Zikr>;
  sleepZikr!: Table<Zikr>;

  constructor() {
    super("ZikrDatabase");
    this.version(5).stores({
      sabahZikr: "++id",
      masaaZikr: "++id",
      masjidZikr: "++id",
      sleepZikr: "++id",
    });
  }

  private async updateZikrCount(
    category: ZikrCategory,
    zikrId: number,
    updateFn: (zikr: Zikr) => Partial<Zikr>,
  ) {
    await this.transaction("rw", this[category], async () => {
      const zikr = await this[category].get(zikrId);
      if (zikr) {
        const updatedZikr = updateFn(zikr);
        await this[category].update(zikrId, updatedZikr);
      }
    });
  }

  // Initialize database with zikrs
  async setUpInitialData(
    sabahZikrs: Zikr[],
    masaaZikrs: Zikr[],
    masjidZikrs: Zikr[],
    sleepZikrs: Zikr[],
  ): Promise<void> {
    try {
      await this.transaction(
        "rw",
        [this.sabahZikr, this.masaaZikr, this.masjidZikr, this.sleepZikr],
        async () => {
          await this.sabahZikr.bulkAdd(sabahZikrs);
          await this.masaaZikr.bulkAdd(masaaZikrs);
          await this.masjidZikr.bulkAdd(masjidZikrs);
          await this.sleepZikr.bulkAdd(sleepZikrs);
        },
      );
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  }

  // Decrement zikr count or delete it if count is 1
  async decrementZikrCount(category: ZikrCategory, zikrId: number) {
    await this.updateZikrCount(category, zikrId, (zikr) => {
      if (zikr.count > 1) {
        return { count: zikr.count - 1 };
      }
      this[category].delete(zikrId); // Deleting is a separate action
      return {};
    });
  }
}

// Singleton instance of the database
export const zikrDb = new ZikrDatabase();

/*
import Dexie, { Table } from "dexie";

// Define the Zikr interface
export interface Zikr {
  id?: number;
  zikrText: string;
  dalel: string;
  dalelMasder: string;
  count: number;
  week?: boolean;
}

// Define the database class
export class ZikrDatabase extends Dexie {
  sabahZikr!: Table<Zikr>;
  masaaZikr!: Table<Zikr>;
  masjidZikr!: Table<Zikr>;
  sleepZikr!: Table<Zikr>;

  constructor() {
    super("ZikrDatabase");
    this.version(1).stores({
      sabahZikr: "++id",
      masaaZikr: "++id",
      masjidZikr: "++id",
      sleepZikr: "++id",
    });
  }

  // Method to initialize database with initial zikrs
  async initializeDatabase(
    sabahZikrs: Zikr[],
    masaaZikrs: Zikr[],
    masjidZikrs: Zikr[],
    sleepZikrs: Zikr[],
  ) {
    await this.transaction(
      "rw",
      [this.sabahZikr, this.masaaZikr, this.masjidZikr, this.sleepZikr],
      async () => {
        // Clear existing data
        await this.sabahZikr.clear();
        await this.masaaZikr.clear();
        await this.masjidZikr.clear();
        await this.sleepZikr.clear();

        // Add new zikrs
        await this.sabahZikr.bulkAdd(sabahZikrs);
        await this.masaaZikr.bulkAdd(masaaZikrs);
        await this.masjidZikr.bulkAdd(masjidZikrs);
        await this.sleepZikr.bulkAdd(sleepZikrs);
      },
    );
  }

  // Method to decrement count and potentially remove zikr
  async decrementZikrCount(
    category: "sabahZikr" | "masaaZikr" | "masjidZikr" | "sleepZikr",
    zikrId: number,
  ) {
    await this.transaction("rw", this[category], async () => {
      const zikr = await this[category].get(zikrId);

      if (zikr) {
        if (zikr.count > 1) {
          // Decrement count
          await this[category].update(zikrId, { count: zikr.count - 1 });
        } else {
          // Remove zikr if count is 1
          await this[category].delete(zikrId);
        }
      }
    });
  }
}

// Create a singleton instance
export const zikrDb = new ZikrDatabase();
*/
