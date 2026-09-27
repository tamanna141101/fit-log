import Image from "next/image";
import Link from "next/link";
import WorkoutGrid from "@/components/WorkoutGrid";
import { Workout } from "@/types/workout";

async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#29303a] bg-[#15181e]">

          <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-2 md:px-12">

            {/* Hero Text */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#c8ff00]">
                Workout Library
              </p>

              <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                Train with intent. Log every set.
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today's plan, and watch the week's work add up.
              </p>

              <Link
                href="#library"
                className="mt-6 inline-block rounded-md bg-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d8ff4d]"
              >
                Browse Workouts
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative flex min-h-[260px] items-center justify-center">
              <Image
                src="/assets/banner.png"
                alt="Workout illustration"
                width={400}
                height={400}
                priority
                unoptimized
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Library */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-5 py-12"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase text-white">
            The Library
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutGrid workouts={workouts} />
      </section>

    </main>
  );
}