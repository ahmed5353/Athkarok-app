"use client";
import React, { useState } from "react";
import FooterItem from "./FooterItem";
import { GiInfo } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";

export default function ThikrFooter({ repeat }: { repeat: number }) {
  const [repeatZikr, setRepeatZikr] = useState(repeat);
  const handleRepeat = () => {
    if (repeatZikr === 0) return;
    setRepeatZikr(repeatZikr - 1);
    console.log(repeat);
  };
  const handleInfo = () => {
    console.log("INFO clicked !");
  };
  const handleShare = () => {
    console.log("SHARE clicked !");
  };

  const footerItems = [
    { id: 1, label: "مرات التكرار", value: repeatZikr, onClick: handleRepeat },
    {
      id: 2,
      label: "الدليل",
      value: <GiInfo className="text-xl" />,
      onClick: handleInfo,
    },
    {
      id: 3,
      label: "مشاركة",
      value: <FiShare2 className="text-xl" />,
      onClick: handleShare,
    },
  ];

  return (
    <footer>
      <div className="grid grid-cols-3 rounded-xl border border-gray-900 bg-gray-200 p-1.5">
        {footerItems.map((item, index) => (
          <FooterItem
            key={item.id}
            label={item.label}
            value={item.value}
            isLast={index === footerItems.length - 1}
            onClick={item.onClick}
          />
        ))}
      </div>
    </footer>
  );
}
