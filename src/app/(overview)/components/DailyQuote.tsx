"use client";
import Card from "@/app/components/Card";

import useDailyQuote from "@/app/hooks/useDailyQuote";
import { FiShare2 } from "react-icons/fi";
import TagHeader from "@/app/components/TagHeader";
import { Suspense } from "react";
import CardSkeleton from "../skeletons/CardSkeleton";

export default function DailyQuote() {
  const { dailyQuote } = useDailyQuote();

  // TODO:we want to put skeleton here
  if (!dailyQuote) return;

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Card>
        <article>
          <TagHeader tagLabel="مقولة اليوم">
            <button aria-label="Share this quote">
              <FiShare2 className="text-xl" />
            </button>
          </TagHeader>
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
    </Suspense>
  );
}
