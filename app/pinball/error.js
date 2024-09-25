"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-screen mb-40 justify-center items-center">
      <h2 className="flex justify-center items-center text-3xl text-teal-500">
        ZZzzzZZZzzZzzZZZ!
      </h2>
      <button
        className="border-2 border-teal-500 rounded-full px-4 py-2 mt-4 text-teal-500 hover:bg-teal-500 hover:text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
