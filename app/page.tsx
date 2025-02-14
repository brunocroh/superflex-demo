import Image from "next/image";
import { Navbar } from '../components/Navbar';
import { Ad } from '../components/Ad';
import { Ad2 } from "@/components/Ad2";
import { PickUp } from "@/components/PickUp";
import { Switch } from "@/components/Switch";
import { DropOff } from "@/components/DropOff";
import { PopularCarRent } from "@/components/PopularCarRent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="flex flex-row gap-8">
          <Ad />
          <Ad2 />
        </div>
        <div className="flex flex-row gap-8 items-center">
          <PickUp />
          <Switch />
          <DropOff />
        </div>
        <div className="flex flex-row gap-8 items-center">
          <PopularCarRent />
        </div>

      </main>
    </div>
  );
}
