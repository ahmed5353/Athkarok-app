import React, { FC } from "react";
import Card from "./Card";
import ThikrFooter from "./ThikrFooter";

interface ThikrCardProps {
  repeat: number;
  thikr: string;
  dalel: string;
  onClick?: () => void;
}
const ThikrCard: FC<ThikrCardProps> = ({
  repeat = 1,
  thikr,
  onClick,
  dalel,
}) => {
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
};
export default ThikrCard;
