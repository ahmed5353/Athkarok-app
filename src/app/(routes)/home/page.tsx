import { quotes } from "@/app/data/quotes";
import AthkarCategories from "./components/AthkarCategories";
import AthkarHeader from "./components/AthkarHeader";
import DailyQuote from "./components/DailyQuote";
import RadioLive from "./components/RadioLive";
import SalahTime from "./components/SalahTime";

export default function HomePage() {
  return (
    <>
      <AthkarHeader />
      <AthkarCategories />
      <DailyQuote />
      <RadioLive />
      <SalahTime />
    </>
  );
}
