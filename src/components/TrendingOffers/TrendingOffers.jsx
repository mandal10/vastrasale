import TrendingOffersClient from "./TrendingOffersClient";
import { trendingCards } from "./data";

export default function TrendingOffers() {
  return (
    <section className="slider-container py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Trending Offers
      </h2>
      <TrendingOffersClient cards={trendingCards} />
    </section>
  );
}
