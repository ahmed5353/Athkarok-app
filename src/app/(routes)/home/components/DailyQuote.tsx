import Card from '@/app/components/Card';
import Tag from '@/app/components/Tag';
import { FiShare2 } from 'react-icons/fi';

interface DailyQuoteProps {
  quote: string;
  author: string;
}

export default function DailyQuote({ quote, author }: DailyQuoteProps) {
  return (
    /* // Article container for the quote card */
    <Card>
      <article>
        <header className="flex justify-between mb-3 px-2">
          <Tag label="مقولة اليوم" />
          <button aria-label="Share this quote">
            <FiShare2 className="text-xl" />
          </button>
        </header>
        <blockquote className="py-2 px-4 text-center ">
          {quote ? (
            <p className=" text-md leading-relaxed">{quote}</p>
          ) : (
            <p>لا توجد اقتباسات لهذا اليوم</p>
          )}
        </blockquote>
        <footer className="text-center ">
          <cite className="text-sm font-light">
            - <i>{author}</i> -
          </cite>
        </footer>
      </article>
    </Card>
  );
}
