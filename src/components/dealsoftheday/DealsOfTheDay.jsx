// app/components/DealsOfTheDay.js
"use client"
import dynamic from "next/dynamic";
import DealsOfTheDaySSR from "./DealsOfTheDaySSR";

// 🔹 Dynamically import Client Component (no SSR)
const DealsOfTheDayClient = dynamic(() => import("./DealsOfTheDayClient"), {
  ssr: false,
  loading: () => <DealsOfTheDaySSR />, // fallback skeleton
});

export default function DealsOfTheDay() {
  return <DealsOfTheDayClient />;
}
