"use client";
import { useState } from "react";
import { RadioStation } from "@/app/types/components";
import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const radioStations: RadioStation[] = [
  { id: 1, name: "إذاعة القراّن الكريم من القاهرة" },
  { id: 2, name: " إذاعة المملكة العربية السعودية" },
  { id: 3, name: "إذاعة الإمارات" },
];

export function DropdownMenuDemo() {
  const [selectedStation, setSelectedStation] = useState<string>(
    "إذاعة القراّن الكريم من القاهرة",
  );

  function handleStationChange(station: string) {
    if (!station) return;
    setSelectedStation(station);
  }
  if (!radioStations || radioStations.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>⚠️ لا يوجد محطات الأن حاول في وقت اّخر</p>
      </div>
    );
  }
  return (
    <DropdownMenu modal={false} dir="rtl">
      <DropdownMenuTrigger asChild>
        <div>
          <div
            className="flex min-w-56 cursor-pointer items-center justify-between gap-5 rounded-lg bg-gray-50 px-3 py-2"
            aria-label="اذاعة القران الكريم"
          >
            <span className="text-sm">{selectedStation}</span>
            <div className="flex gap-2">
              <div className="h-5 w-[1px] bg-black"></div>
              <FaChevronDown size={20} />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      {/* TODO: Make list Items the favorite if no favourites use the most Common */}
      <DropdownMenuContent className="w-56" role="menu">
        <DropdownMenuLabel className="text-md font-bold">
          محطات شائعة
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {radioStations.map((radioStation) => (
            <DropdownMenuItem
              key={radioStation.id}
              role="menuitem"
              onClick={() => handleStationChange(radioStation.name)}
              className="cursor-pointer"
            >
              {radioStation.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem role="menuitem" className="cursor-pointer">
          المزيد ...
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
