import Image from "next/image";
import Navbar from "@/app/layouts/Navbar";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between rounded-b-lg bg-red-500 px-4 py-2">
      <Image
        src="/images/logo.webp"
        width={150}
        height={49.75}
        alt="Athkar App Logo"
        className="object-contain"
      />

      <Navbar />
    </header>
  );
}
