import { useQuery } from "@tanstack/react-query";
import { getPrayerTimes } from "../services/getPayerTimes";

export default function usePrayerTimes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["prayerTimes"],
    queryFn: getPrayerTimes,
  });
  return { data, isLoading, error };
}
