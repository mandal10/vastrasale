// app/components/TrendingProduct.js
"use client"
import dynamic from "next/dynamic";
import TrendingProductSSR from "./TrendingProductSSR";


const TrendingProductClient = dynamic(() => import("./TrendingProductClient"), {
  ssr: false,
  loading: () => <TrendingProductSSR />, 
});

export default function TrendingProduct() {
  return <TrendingProductClient />;
}
