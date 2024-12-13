"use client";
import Card from "@/app/components/Card";
import Tag from "@/app/components/Tag";
import useDailyQuote from "@/app/hooks/useDailyQuote";
import { FiShare2 } from "react-icons/fi";

export default function DailyQuote() {
  const { dailyQuote } = useDailyQuote();

  // TODO:we want to put skeleton here
  if (!dailyQuote) return;

  return (
    <Card>
      <article>
        <header className="mb-3 flex justify-between px-2">
          <Tag label="مقولة اليوم" />
          <button aria-label="Share this quote">
            <FiShare2 className="text-xl" />
          </button>
        </header>
        <blockquote className="px-4 py-2 text-center">
          {/* {dailyQuote ? (
            <p className="text-md leading-relaxed">{dailyQuote.quote}</p>
          ) : (
            <p>لا توجد اقتباسات لهذا اليوم</p>
          )} */}
          <p className="text-md leading-relaxed">{dailyQuote?.quote}</p>
        </blockquote>
        <footer className="text-center">
          <cite className="text-sm font-light">
            - <i>{dailyQuote?.author}</i> -
          </cite>
        </footer>
      </article>
    </Card>
  );
}
