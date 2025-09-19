"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full"
    aria-label="Next"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full"
    aria-label="Previous"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const StarRating = ({ stars }) => (
  <div className="flex items-center space-x-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < stars ? "fill-current" : "stroke-current"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={i < stars ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.386 2.455c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.612 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialSliderClient({ testimonials }) {
  if (!testimonials?.length) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // below 768px
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 550, // mobile devices
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-[95%] max-w-[1400px] mx-auto py-10">
      <Slider {...settings}>
        {testimonials.map(({ id, name, image, rating, stars, text }) => (
          <div key={id} className="px-2 pb-5">
            <div className="bg-white py-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl ring-4 ring-yellow-500 mb-4 overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 120px, 180px"
                />
              </div>
              <StarRating stars={stars} />
              <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base px-4">{rating.toFixed(1)}</p>
              <p className="text-gray-600 mt-4 max-w-md text-sm sm:text-base">
                {text.length > 100 ? `${text.slice(0, 100)}...` : text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
