import { getToday } from "@/lib/utils/getToday";
import axios from "axios";

const today = getToday();
export async function getPrayerTimes(lat: number, lng: number) {
  // const response = await axios.get(
  //   `https://api.aladhan.com/v1/timingsByCity/22-12-2024?city=Mansoura&country=EG`,
  // );

  const response = await axios.get(
    `https://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${lng}`,
  );
  if (!response) throw new Error("Bad request, can't find prayer times");
  return response?.data;
}
