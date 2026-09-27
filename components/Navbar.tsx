import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#242832] bg-[#0d0f12]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
          />

          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full bg-[#17220b] px-5 py-2 text-sm font-medium text-[#c8ff00]"
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-6 text-sm">
          
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-xs font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#303641] px-1.5 text-xs text-gray-300">
              0
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}