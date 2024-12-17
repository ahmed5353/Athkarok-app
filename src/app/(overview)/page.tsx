import { Suspense } from "react";
import AthkarCategories from "./components/AthkarCategories";
import AthkarHeader from "./components/AthkarHeader";
import DailyQuote from "./components/DailyQuote";
import RadioLive from "./components/RadioLive";
import PrayerTimes from "./components/PrayerTimes";
import Loading from "./loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <AthkarHeader />
      <AthkarCategories />
      <DailyQuote />
      <RadioLive />
      <PrayerTimes />
    </Suspense>
  );
}
