import Card from "@/app/components/Card";
import { DropdownMenuDemo } from "@/app/(routes)/home/components/DropDownMenu";

import { Button } from "@/app/components/ui/button";
import React from "react";
import TagHeader from "@/app/components/TagHeader";

export default function RadioLive() {
  return (
    <Card>
      <TagHeader tagLabel="اذاعة القراّن الكريم">
        <span className="text-blue-950">بث مباشر</span>
      </TagHeader>
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
