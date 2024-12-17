import AthkarCategories from "./components/AthkarCategories";
import AthkarHeader from "./components/AthkarHeader";
import DailyQuote from "./components/DailyQuote";
import RadioLive from "./components/RadioLive";
import SalahTime from "./components/SalahTime";
import { Suspense } from "react";
import Loading from "./loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <AthkarHeader />
      <AthkarCategories />
      <DailyQuote />
      <RadioLive />
      <SalahTime />
    </Suspense>
  );
}
