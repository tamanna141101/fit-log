import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  return response.json();
}

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm font-semibold text-[#c8ff00]"
      >
        ← Back to Library
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[350px] overflow-hidden rounded-2xl border border-[#29303a] bg-[#15181e]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-black uppercase text-white sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 leading-7 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-[#15181e] p-4">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="mt-1 font-bold text-white">
                {workout.duration} min
              </p>
            </div>

            <div className="rounded-xl bg-[#15181e] p-4">
              <p className="text-xs text-gray-500">Calories</p>
              <p className="mt-1 font-bold text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="rounded-xl bg-[#15181e] p-4">
              <p className="text-xs text-gray-500">Sets</p>
              <p className="mt-1 font-bold text-white">{workout.sets}</p>
            </div>

            <div className="rounded-xl bg-[#15181e] p-4">
              <p className="text-xs text-gray-500">Rating</p>
              <p className="mt-1 font-bold text-white">
                ⭐ {workout.rating}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">Equipment</p>
            <p className="mt-1 font-semibold text-white">
              {workout.equipment}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-black uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-[#292e38] bg-[#15181e] p-4 text-sm leading-6 text-gray-300"
                >
                  <span className="mr-3 font-bold text-[#c8ff00]">
                    {index + 1}.
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-md bg-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-black">
              Add to Today&apos;s Plan
            </button>

            <button className="rounded-md border border-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-[#c8ff00]">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}