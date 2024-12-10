import { quotes } from "@/app/data/quotes";
import AthkarCategories from "./components/AthkarCategories";
import AthkarHeader from "./components/AthkarHeader";
import DailyQuote from "./components/DailyQuote";
import RadioLive from "./components/RadioLive";
import SalahTime from "./components/SalahTime";

export default function HomePage() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <AthkarHeader />
      <AthkarCategories />
      <DailyQuote quote={quote.quote} author={quote.author} />
      <RadioLive />
      <SalahTime />
    </>
  );
}
