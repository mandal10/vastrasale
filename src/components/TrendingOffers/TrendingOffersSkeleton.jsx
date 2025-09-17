"use client";

import React from "react";

export default function TrendingOffersSkeleton({ count = 3 }) {
  return (
    <section className="slider-container py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Trending Offers
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-5">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full md:w-[600px] animate-pulse px-4 md:px-8 "
          >
            <article className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden">
              {/* Left Skeleton Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 items-center text-center p-4 md:p-6 bg-gray-100">
                <div className="h-15 w-[180px] bg-gray-200 mb-4 rounded" />
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-5/6 bg-gray-200 rounded mb-4" />
                <div className="h-10 w-32 bg-gray-200 rounded-full mx-auto" />
              </div>

              {/* Right Skeleton Image */}
              <div className="w-full md:w-1/2 order-1 md:order-2 h-48 md:h-auto bg-gray-200" />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
