"use client"; // Error components must be client components
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="text-center text-red-500">
      <p>Something went wrong!</p>
      <button
        onClick={() => reset()} // This will retry the fetch
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
