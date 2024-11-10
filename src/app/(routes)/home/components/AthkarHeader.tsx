import Image from 'next/image';

export default function AthkarHeader() {
  return (
    <section className="bg-red-500 py-4 px-2 ">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="text-[#ffc649] text-2xl font-bold ">أذكارك،</h2>
          <p className="text-2xl font-semibold">في ليلك ونهارك .</p>
        </div>

        <Image src="/images/sun.webp" alt="Sun image" width={100} height={50} />
      </div>
      <button className="border mt-4 py-1 px-2 flex gap-3 items-center rounded-sm">
        <span> عطر يومك بأذكار X</span>

        <Image
          src="/images/fast-forward.webp"
          className="rotate-180"
          alt="Fast forward icon"
          width={20}
          height={20}
        />
      </button>
    </section>
  );
}
