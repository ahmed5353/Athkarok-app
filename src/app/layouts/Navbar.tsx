import { link } from "fs";

export default function Navbar() {
  const navList = [
    {
      id: 1,
      name: "الرئيسية",
      link: "/home",
    },
    { id: 2, name: "أذكارك", link: "/athkar" },
    { id: 3, name: "الاعدادات", link: "/settings" },
  ];
  return (
    <nav className="flex gap-4 text-gray-100">
      {navList.map((item) => (
        <a key={item.id} href={item.link}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
