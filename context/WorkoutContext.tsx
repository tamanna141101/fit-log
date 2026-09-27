"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => boolean;
  markAsDone: (id: number) => boolean;
  saveForLater: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => boolean;
}

const WorkoutContext = createContext<
  WorkoutContextType | undefined
>(undefined);

export function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  {/* Load data from localStorage */}
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }

    setLoaded(true);
  }, []);

  {/* Save plan to localStorage */}
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(plan)
      );
    }
  }, [plan, loaded]);

  {/* Save saved workouts to localStorage */}
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(saved)
      );
    }
  }, [saved, loaded]);

  {/* Add workout to today's plan */}
  function addToPlan(workout: Workout): boolean {
    if (plan.length >= 5) {
      return false;
    }

    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  }

  {/* Remove workout from plan */}
  function removeFromPlan(id: number): boolean {
    if (!plan.some((item) => item.id === id)) {
      return false;
    }

    setPlan((current) =>
      current.filter((item) => item.id !== id)
    );

    return true;
  }

  {/* Mark workout as done */}
  function markAsDone(id: number): boolean {
    if (!plan.some((item) => item.id === id)) {
      return false;
    }

    setPlan((current) =>
      current.filter((item) => item.id !== id)
    );

    return true;
  }

  {/* Save workout for later */}
  function saveForLater(workout: Workout): boolean {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((current) => [...current, workout]);

    return true;
  }

  {/* Remove saved workout */}
  function removeFromSaved(id: number): boolean {
    if (!saved.some((item) => item.id === id)) {
      return false;
    }

    setSaved((current) =>
      current.filter((item) => item.id !== id)
    );

    return true;
  }

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        markAsDone,
        saveForLater,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}