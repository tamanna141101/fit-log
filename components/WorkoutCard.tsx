import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="overflow-hidden rounded-xl border border-[#292e38] bg-[#15181e] transition hover:-translate-y-1 hover:border-[#c8ff00]">
        
        {/* Image */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          
          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="text-lg font-bold uppercase text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-500">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-[#252a32]" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>◷ {workout.duration} min</span>
            <span>♨ {workout.caloriesBurned} kcal</span>
            <span>☆ {workout.rating}</span>
          </div>

        </div>
      </article>
    </Link>
  );
}