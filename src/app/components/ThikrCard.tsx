import Card from "./Card";
import ThikrFooter from "./ThikrFooter";

interface ThikrCardProps {
  repeat: number;
  thikr: string;
  dalel?: string;
  onClick?: () => void;
}
export default function ThikrCard({
  repeat = 1,
  thikr,
  onClick,
  dalel,
}: ThikrCardProps) {
  return (
    <Card onClick={onClick}>
      <article>
        <blockquote className="mb-4 px-4 py-2">
          <p className="text-justify text-xl leading-[1.95]">{thikr}</p>
        </blockquote>
        <ThikrFooter repeat={repeat} dalel={dalel} />
      </article>
    </Card>
  );
}
