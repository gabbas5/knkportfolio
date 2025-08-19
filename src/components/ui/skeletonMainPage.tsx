import React from "react";

export default function SkeletonMainPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-800 animate-pulse">
      {/* Header Skeleton */}
      <header className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 bg-gray-300 rounded-lg shadow-md lg:px-8">
        <div className="h-6 w-40 bg-gray-400 rounded mb-2 lg:mb-0" />
        <div className="hidden md:flex gap-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-4 w-20 bg-gray-400 rounded" />
          ))}
        </div>
        <div className="md:hidden h-6 w-6 bg-gray-400 rounded" />
      </header>

      {/* Mobile Menu Skeleton */}
      <div className="md:hidden flex flex-row items-center gap-4 px-4 py-2 bg-gray-100 overflow-x-auto whitespace-nowrap">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="h-4 w-24 bg-gray-300 rounded" />
        ))}
      </div>

      {/* Main Content Skeleton */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:px-1 mt-4">
        {/* Text Section Skeleton */}
        <div className="bg-gray-100 p-5 rounded-xl flex flex-col justify-between">
          <div className="space-y-2">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="h-4 w-full bg-gray-300 rounded" />
            ))}
          </div>

          {/* Logo Links Skeleton */}
          <div className="flex justify-around mt-6 space-x-4">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="h-10 w-10 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>

        {/* Slider Skeleton */}
        <div className="md:h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden">
          <div className="h-full w-full bg-gray-300" />
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="mt-6 px-4 py-4 bg-gray-100 rounded">
        <div className="h-4 w-40 bg-gray-300 rounded" />
      </footer>
    </main>
  );
}
