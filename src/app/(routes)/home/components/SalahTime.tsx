import Card from '@/app/components/Card';
import Tag from '@/app/components/Tag';
import React from 'react';

export default function SalahTime() {
  return (
    <Card>
      <div className="flex justify-between ">
        <Tag label="مواقيت الصلاة" />
        <span className="text-blue-950">--,--,---</span>
      </div>
    </Card>
  );
}
