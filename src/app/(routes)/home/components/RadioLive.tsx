import Card from "@/app/components/Card";
import { DropdownMenuDemo } from "@/app/(routes)/home/components/DropDownMenu";
import Tag from "@/app/components/Tag";
import { Button } from "@/app/components/ui/button";
import React from "react";

export default function RadioLive() {
  return (
    <Card>
      <div className="flex justify-between">
        <Tag label="اذاعة القران الكريم" />
        <span className="text-blue-950">بث مباشر</span>
      </div>
      <div className="flex justify-center">
        <DropdownMenuDemo />
      </div>
      <div className="mt-5 flex justify-center gap-3">
        <Button className="w-28" variant="secondary">
          تشغيل
        </Button>
        <Button variant="destructive" className="px-4">
          ايقاف
        </Button>
      </div>
    </Card>
  );
}
