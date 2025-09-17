"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function TrendingProductSSR() {
  const [skeletonCount, setSkeletonCount] = useState(1);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 500) return 1;
    if (width < 650) return 2;
    if (width < 900) return 2.5;   
    if (width < 1200) return 3.5;
    if (width < 1300) return 4.5;
    return 4.5;
  };

  useEffect(() => {
    const updateCount = () => setSkeletonCount(getSlidesToShow());
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="max-w-[1400px] w-[95%] mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Trending Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCard key={i} skeleton />
        ))}
      </div>
    </div>
  );
}
