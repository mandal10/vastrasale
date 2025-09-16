"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 right-4 top-1/2 hidden md:flex -translate-y-1/2 
               items-center justify-center w-10 h-10 rounded-full 
               bg-white shadow text-black hover:bg-gray-100"
  >
    <FaArrowRight size={18} />
  </button>
);

export const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 left-4 top-1/2 hidden md:flex -translate-y-1/2 
               items-center justify-center w-10 h-10 rounded-full 
               bg-white shadow text-black hover:bg-gray-100"
  >
    <FaArrowLeft size={18} />
  </button>
);
