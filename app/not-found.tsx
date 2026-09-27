import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#c8ff00]">
          FitLog
        </p>

        <h1 className="mt-4 text-7xl font-black text-white">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-black uppercase text-white">
          Workout Not Found
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d8ff4d]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}