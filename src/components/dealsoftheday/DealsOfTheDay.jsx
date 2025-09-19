"use client";

import dynamic from "next/dynamic";

// Just load client component (no SSR, no skeleton)
const DealsOfTheDayClient = dynamic(() => import("./DealsOfTheDayClient"), {
  ssr: false,
});

export default function DealsOfTheDay() {
  return <DealsOfTheDayClient />;
}
