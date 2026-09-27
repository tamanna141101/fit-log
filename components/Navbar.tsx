"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const { plan, saved } = useWorkout();

  const [active, setActive] = useState<"workouts" | "my-plan">("my-plan");

  const activeStyle =
    "rounded-full  bg-[#c8ff00]/10 px-4 py-2 text-[#c8ff00]";

  const normalStyle =
    "rounded-full  px-4 py-2 text-gray-400 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-[#252a32] bg-[#0d0f12]">
      <nav className="relative mx-auto flex max-w-7xl items-center px-5 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={38}
            height={38}
          />

          <span className="text-xl font-black uppercase text-white">
            FitLog
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-sm font-semibold">

          <Link
            href="/"
            onClick={() => setActive("workouts")}
            className={
              active === "workouts" ? activeStyle : normalStyle
            }
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setActive("my-plan")}
            className={
              active === "my-plan" ? activeStyle : normalStyle
            }
          >
            My Plan
          </Link>

        </div>

        {/* Counters */}
        <div className="ml-auto hidden items-center gap-4 text-sm sm:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white"
          >
            Plan
            <span className="rounded-full bg-[#c8ff00] px-2 py-0.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white"
          >
            Saved
            <span className="rounded-full bg-[#c8ff00] px-2 py-0.5 text-xs font-bold text-black">
              {saved.length}
            </span>
          </Link>
        </div>

      </nav>
    </header>
  );
}