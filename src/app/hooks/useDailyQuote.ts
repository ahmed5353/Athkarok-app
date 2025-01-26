import { getToday } from "@/lib/utils/getToday";
import { useEffect, useState } from "react";
import { quotes } from "../data/quotes";
import { Quote } from "../types/types";

export default function useDailyQuote() {
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);
  const newQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    const today = getToday();
    const storedQuote = localStorage.getItem("dailyQuote");
    const storedDate = localStorage.getItem("quoteDate");

    if (storedQuote && storedDate === today) {
      setDailyQuote(JSON.parse(storedQuote));
    } else {
      localStorage.setItem("quoteDate", today);
      localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
    }
  }, []);
  return { dailyQuote };
}
