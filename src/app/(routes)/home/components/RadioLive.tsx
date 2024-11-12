import Card from '@/app/components/Card';
import Tag from '@/app/components/Tag';
import React from 'react';

export default function RadioLive() {
  return (
    <Card>
      <div className="flex justify-between ">
        <Tag label="اذاعة القران الكريم" />
        <span className="text-blue-950">بث مباشر</span>
      </div>
    </Card>
  );
}
