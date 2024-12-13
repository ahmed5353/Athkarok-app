export interface Zikr {
  id?: number;
  zikrText: string;
  dalel: string;
  dalelMasder: string;
  count: number;
  week?: boolean;
}

// Enum for Zikr categories
export enum ZikrCategory {
  ASTEKAZ = "astekazZikr",
  SABAH = "sabahZikr",
  MASAA = "masaaZikr",
  NOOM = "noomZikr",
  MASJID = "masjidZikr",
  SALAH = "salahZikr",
}

// Quote
export interface Quote {
  quote: string;
  author: string;
}
