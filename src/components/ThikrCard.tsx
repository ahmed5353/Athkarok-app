import React, { FC } from "react";
import Card from "./Card";
import FooterItem from "@/app/(routes)/athkar/sabah/components/FooterItem";
import { GiInfo } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";

interface ThikrCardProps {
  repeat: number;
  thikr: string;
}
const ThikrCard: FC<ThikrCardProps> = ({ repeat, thikr }) => {
  const footerItems = [
    { id: 1, label: "مرات التكرار", value: repeat },
    { id: 2, label: "الدليل", value: <GiInfo className="text-xl" /> },
    { id: 3, label: "مشاركة", value: <FiShare2 className="text-xl" /> },
  ];
  return (
    <Card>
      <article>
        <blockquote className="mb-4 px-4 py-2">
          <p className="text-justify text-xl leading-[1.95]">{thikr}</p>
        </blockquote>
        <footer>
          <div className="grid grid-cols-3 rounded-xl border border-gray-900 bg-gray-200 p-1.5">
            {footerItems.map((item, index) => (
              <FooterItem
                key={item.id}
                label={item.label}
                value={item.value}
                isLast={index === footerItems.length - 1}
              />
            ))}
          </div>
        </footer>
      </article>
    </Card>
  );
};
export default ThikrCard;
