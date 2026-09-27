"use client";

import { useState } from "react";
import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    addToPlan,
    saveForLater,
  } = useWorkout();

  const [toast, setToast] = useState("");

  const alreadyInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const planIsFull = plan.length >= 5;

  function showToast(message: string) {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  function handleAddToPlan() {
    if (planIsFull) {
      showToast(
        "Today's Plan can have a maximum of 5 workouts."
      );
      return;
    }

    if (alreadyInPlan) {
      showToast(
        "Workout is already in Today's Plan."
      );
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      showToast("Added to Today's Plan ✓");
    }
  }

  function handleSave() {
    const saved = saveForLater(workout);

    if (saved) {
      showToast("Saved for Later ✓");
    } else {
      showToast("Already saved ✓");
    }
  }

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        {/* Add to Plan */}
        <button
          onClick={handleAddToPlan}
          disabled={planIsFull || alreadyInPlan}
          className={`rounded-md px-5 py-3 text-sm font-bold uppercase transition ${
            planIsFull || alreadyInPlan
              ? "cursor-not-allowed bg-[#30343b] text-gray-500"
              : "bg-[#c8ff00] text-black hover:bg-[#d8ff4d]"
          }`}
        >
          {alreadyInPlan
            ? "Already Added"
            : "Add to Today's Plan"}
        </button>

        {/* Save for Later */}
        <button
          onClick={handleSave}
          className="rounded-md border border-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-[#c8ff00] transition hover:bg-[#c8ff00] hover:text-black"
        >
          Save for Later
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999] rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}