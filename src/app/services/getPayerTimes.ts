import axios from "axios";

export async function getPrayerTimes() {
  const response = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity/17-12-2024?city=Mansoura&country=EG`,
  );
  return response.data?.data;
}
