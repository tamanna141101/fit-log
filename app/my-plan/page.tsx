"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

type Tab = "today" | "saved";
type SortOption = "duration" | "calories" | "rating";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [toast, setToast] = useState("");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  function showToast(message: string) {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function handleMarkAsDone(id: number, name: string) {
    markAsDone(id);
    showToast(`${name} marked as done ✓`);
  }

  function handleRemovePlan(id: number, name: string) {
    removeFromPlan(id);
    showToast(`${name} removed ✓`);
  }

  function handleRemoveSaved(id: number, name: string) {
    removeFromSaved(id);
    showToast(`${name} removed from saved ✓`);
  }

  function sortWorkouts(workouts: typeof plan) {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }

  const currentWorkouts =
    activeTab === "today"
      ? sortWorkouts(plan)
      : sortWorkouts(saved);

  return (
    <main className="min-h-screen bg-[#0d0f12]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#292e38] bg-[#15181e]">
          <div className="grid grid-cols-3">
            {/* Exercises */}
            <div className="border-r border-[#292e38] px-5 py-7 sm:px-6">
              <p className="text-xs text-gray-500">
                Exercises
              </p>

              <p className="mt-2 text-4xl font-black text-[#c8ff00]">
                {plan.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-r border-[#292e38] px-5 py-7 sm:px-6">
              <p className="text-xs text-gray-500">
                Minutes
              </p>

              <p className="mt-2 text-4xl font-black text-white">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-7 sm:px-6">
              <p className="text-xs text-gray-500">
                Calories
              </p>

              <p className="mt-2 text-4xl font-black text-white">
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex w-fit rounded-xl border border-[#292e38] bg-[#15181e] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
                activeTab === "today"
                  ? "bg-[#20252f] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#20252f] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="rounded-lg border border-[#292e38] bg-[#15181e] px-3 py-2 text-xs text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        <section className="mt-6">
          {currentWorkouts.length === 0 ? (
            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#292e38] bg-[#0d0f12] px-5 text-center">
              <h2 className="text-xl font-black uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 rounded-full bg-[#c8ff00] px-7 py-3 text-xs font-bold text-black transition hover:bg-[#d8ff4d]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {currentWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-[#292e38] bg-[#15181e] p-4 transition hover:border-[#3a414d]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    {/* Image */}
                    <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-xl md:w-36">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black uppercase text-white">
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                        <span>
                          <span className="text-[#c8ff00]">
                            ◷
                          </span>{" "}
                          {workout.duration} min
                        </span>

                        <span>
                          <span className="text-[#c8ff00]">
                            ♨
                          </span>{" "}
                          {workout.caloriesBurned} kcal
                        </span>

                        <span>
                          <span className="text-[#c8ff00]">
                            ☆
                          </span>{" "}
                          {workout.rating}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-3">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-[#39404c] px-5 py-2.5 text-xs font-medium text-white transition hover:border-[#c8ff00]"
                      >
                        View Details
                      </Link>

                      {activeTab === "today" && (
                        <button
                          onClick={() =>
                            handleMarkAsDone(
                              workout.id,
                              workout.name
                            )
                          }
                          className="rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d8ff4d]"
                        >
                          ✓ &nbsp;Mark as Done
                        </button>
                      )}

                      {/* X Remove */}
                      <button
                        onClick={() =>
                          activeTab === "today"
                            ? handleRemovePlan(
                                workout.id,
                                workout.name
                              )
                            : handleRemoveSaved(
                                workout.id,
                                workout.name
                              )
                        }
                        className="px-1 text-xl text-gray-600 transition hover:text-white"
                        aria-label="Remove workout"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </main>
  );
}