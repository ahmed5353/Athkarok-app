import Card from "@/components/Card";
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { GiInfo } from "react-icons/gi";
import FooterItem from "./components/FooterItem";

export default function page() {
  const footerItems = [
    { id: 1, label: "مرات التكرار", value: "3" },
    { id: 2, label: "الدليل", value: <GiInfo className="text-lg" /> },
    { id: 3, label: "مشاركة", value: <FiShare2 className="text-lg" /> },
  ];
  return (
    <Card>
      <article>
        <blockquote className="mb-4 px-4 py-2">
          <p className="text-justify text-xl leading-[1.95]">
            اللَّهُ لا إِلهَ إِلّا هُوَ الحَيُّ القَيّومُ لا تَأخُذُهُ سِنَةٌ
            وَلا نَومٌ لَهُ ما فِي السَّماواتِ وَما فِي الأَرضِ مَن ذَا الَّذي
            يَشفَعُ عِندَهُ إِلّا بِإِذنِهِ يَعلَمُ ما بَينَ أَيديهِم وَما
            خَلفَهُم وَلا يُحيطونَ بِشَيءٍ مِن عِلمِهِ إِلّا بِما شاءَ وَسِعَ
            كُرسِيُّهُ السَّماواتِ وَالأَرضَ وَلا يَئودُهُ حِفظُهُما وَهُوَ
            العَلِيُّ العَظيمُ.
          </p>
        </blockquote>
        <footer>
          <div className="flex justify-around rounded-xl bg-red-400 p-2">
            {footerItems?.map((item) => (
              <FooterItem key={item.id} label={item.label} value={item.value} />
            ))}
          </div>
        </footer>
      </article>
    </Card>
  );
}
