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
  const { addToPlan, saveForLater } = useWorkout();

  const [planMessage, setPlanMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  function handleAddToPlan() {
    addToPlan(workout);
    setPlanMessage("Added to Today's Plan ✓");

    setTimeout(() => {
      setPlanMessage("");
    }, 2000);
  }

  function handleSave() {
    saveForLater(workout);
    setSavedMessage("Saved for Later ✓");

    setTimeout(() => {
      setSavedMessage("");
    }, 2000);
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleAddToPlan}
          className="rounded-md bg-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d8ff4d]"
        >
          Add to Today&apos;s Plan
        </button>

        <button
          onClick={handleSave}
          className="rounded-md border border-[#c8ff00] px-5 py-3 text-sm font-bold uppercase text-[#c8ff00] transition hover:bg-[#c8ff00] hover:text-black"
        >
          Save for Later
        </button>
      </div>

      {planMessage && (
        <p className="mt-3 text-sm font-semibold text-[#c8ff00]">
          {planMessage}
        </p>
      )}

      {savedMessage && (
        <p className="mt-3 text-sm font-semibold text-[#c8ff00]">
          {savedMessage}
        </p>
      )}
    </div>
  );
}