import { useQuery } from "@tanstack/react-query";
import { getPrayerTimes } from "../services/getPayerTimes";

interface Position {
  latitude: number;
  longitude: number;
}

export default function usePrayerTimes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["prayerTimes"],
    queryFn: () => getPrayerTimes(31, 30),
  });
  return { data, isLoading, error };
}
