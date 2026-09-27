import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";
import WorkoutActions from "@/components/WorkoutActions";

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
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      {/* Back Link */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8ff00] hover:underline"
      >
        ← Back to Library
      </Link>

      {/* Grid Layout - Both sides equal stretch on large screens */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        {/* Left Column: Image Container matching right column height */}
        <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#15181e] shadow-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Stats Table Layout */}
            <div className="mt-6 divide-y divide-gray-800/80 border-y border-gray-800/80 py-1">
              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>
                <span className="font-medium text-gray-200">
                  {workout.equipment || "N/A"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>
                <span className="font-medium text-gray-200">
                  {workout.difficulty || "Intermediate"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Sets
                </span>
                <span className="font-medium text-gray-200">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Reps
                </span>
                <span className="font-medium text-gray-200">
                  {workout.reps || "6-8"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Duration
                </span>
                <span className="font-medium text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Calories
                </span>
                <span className="font-medium text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-gray-500">
                  Rating
                </span>
                <span className="font-medium text-gray-200">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
                {workout.instructions?.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-medium text-gray-400">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}