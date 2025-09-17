"use client"
import { useState, useEffect } from "react";
import TrendingOffersClient from "./TrendingOffersClient";
import TrendingOffersSkeleton from "./TrendingOffersSkeleton";
import { trendingCards } from "./data";

export default function TrendingOffers() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <TrendingOffersSkeleton count={3} />
  ) : (
    <section className="slider-container py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Trending Offers
      </h2>
      <TrendingOffersClient cards={trendingCards} />
    </section>
  );
}
