export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        {/* Spinner */}
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#292e38] border-t-[#c8ff00]" />

        <h2 className="mt-6 text-xl font-black uppercase text-white">
          Loading Workouts
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Getting your workout library ready...
        </p>
      </div>
    </main>
  );
}