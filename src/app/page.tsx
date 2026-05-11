import Image from "next/image";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 bg-white">
<Header />
<Hero />
      </main>
    </div>
  );
}
