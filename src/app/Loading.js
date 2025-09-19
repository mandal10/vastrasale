// app/components/Loader.js
"use client";

import React from "react";
import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[150px] bg-gray-50">
      <ScaleLoader color="#dc2626" height={35} width={4} radius={2} margin={2} />
    </div>
  );
}
