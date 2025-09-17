"use client";
import React, { useEffect, useState } from "react";

export default function DealsOfTheDaySSR() {
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 400) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 3;
    return 3.5;
  };

  useEffect(() => {
    const updateSlides = () => setSlidesToShow(getSlidesToShow());
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // calculate card width in %
  const cardWidth = `${100 / slidesToShow}%`;

  return (
    <section className="max-w-[1400px] w-[95%] mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Deals of the Day</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            style={{ width: cardWidth, animationDelay: `${idx * 150}ms` }}
            className="flex-shrink-0 rounded-lg shadow-md overflow-hidden bg-white animate-pulse"
          >
            {/* Image */}
            <div className="w-full h-48 sm:h-56 md:h-48 bg-gray-200" />

            {/* Card Body */}
            <div className="p-4 text-center">
              {/* Logo */}
              <div className="flex items-center justify-center mb-2">
                <div className="h-10 w-[100px] bg-gray-200 rounded" />
              </div>

              {/* Title & Price */}
              <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded mb-2" />
              <div className="h-3 w-1/2 mx-auto bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
