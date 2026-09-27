import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#242832] bg-[#0d0f12]">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-5">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={24}
            height={24}
          />

          <span className="font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}