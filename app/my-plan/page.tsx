"use client";

import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

export default function MyPlan() {
  const { plan, saved, removeFromPlan, removeFromSaved } = useWorkout();

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8ff00]">
          Your Training
        </p>

        <h1 className="mt-2 text-4xl font-black uppercase text-white">
          My Plan
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Manage your workouts and saved exercises.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#292e38] bg-[#15181e] p-5">
          <p className="text-xs uppercase text-gray-500">Exercises</p>
          <p className="mt-2 text-3xl font-black text-white">
            {plan.length}
          </p>
        </div>

        <div className="rounded-xl border border-[#292e38] bg-[#15181e] p-5">
          <p className="text-xs uppercase text-gray-500">Minutes</p>
          <p className="mt-2 text-3xl font-black text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="rounded-xl border border-[#292e38] bg-[#15181e] p-5">
          <p className="text-xs uppercase text-gray-500">Calories</p>
          <p className="mt-2 text-3xl font-black text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Today's Plan */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase text-white">
          Today&apos;s Plan
        </h2>

        {plan.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-[#292e38] bg-[#15181e] p-10 text-center">
            <p className="text-gray-500">
              No workouts added to today&apos;s plan.
            </p>

            <Link
              href="/"
              className="mt-4 inline-block rounded-md bg-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-black"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plan.map((workout) => (
              <div
                key={workout.id}
                className="rounded-xl border border-[#292e38] bg-[#15181e] p-5"
              >
                <h3 className="text-lg font-bold uppercase text-white">
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {workout.duration} min • {workout.caloriesBurned} kcal
                </p>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-md border border-[#c8ff00] px-4 py-2 text-xs font-bold uppercase text-[#c8ff00]"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => removeFromPlan(workout.id)}
                    className="rounded-md bg-red-500/10 px-4 py-2 text-xs font-bold uppercase text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Saved */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase text-white">
          Saved
        </h2>

        {saved.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-[#292e38] bg-[#15181e] p-10 text-center">
            <p className="text-gray-500">
              No saved workouts yet.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((workout) => (
              <div
                key={workout.id}
                className="rounded-xl border border-[#292e38] bg-[#15181e] p-5"
              >
                <h3 className="text-lg font-bold uppercase text-white">
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {workout.duration} min • {workout.caloriesBurned} kcal
                </p>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-md border border-[#c8ff00] px-4 py-2 text-xs font-bold uppercase text-[#c8ff00]"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => removeFromSaved(workout.id)}
                    className="rounded-md bg-red-500/10 px-4 py-2 text-xs font-bold uppercase text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}