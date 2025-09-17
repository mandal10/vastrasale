// app/components/Loader.js
"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-red-300 border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );
}
