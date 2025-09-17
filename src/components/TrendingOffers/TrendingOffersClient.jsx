"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { NextArrow, PrevArrow } from "./SliderArrows";

export default function TrendingOffersClient({ cards }) {
  const [mounted, setMounted] = useState(false);
  const [centerMode, setCenterMode] = useState(true);
  const [centerPadding, setCenterPadding] = useState("300px");

  useEffect(() => {
    setMounted(true);

    const updateMode = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setCenterMode(false);
        setCenterPadding("0px");
      } else if (width < 768) {
        setCenterMode(true);
        setCenterPadding("60px");
      } else if (width < 1024) {
        setCenterMode(true);
        setCenterPadding("120px");
      } else if (width < 1280) {
        setCenterMode(true);
        setCenterPadding("250px");
      } else {
        setCenterMode(true);
        setCenterPadding("300px");
      }
    };

    updateMode();
    window.addEventListener("resize", updateMode);
    return () => window.removeEventListener("resize", updateMode);
  }, []);

  if (!mounted) return null;

  const settings = {
    centerMode,
    centerPadding,
    slidesToShow: 1,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, idx) => (
        <div key={idx} className="px-4 md:px-8 pb-5">
          <article className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden 
                             transition hover:shadow-xl cursor-pointer">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 
                            justify-center items-center text-center p-4 md:p-6 
                            bg-gradient-to-br from-gray-50  to-white">
              <div className="h-15 w-[180px] relative md:mb-6 mb-3 flex items-center justify-center">
                <Image
                  src={card.logo}
                  alt="Brand Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 120px, 180px"
                />
              </div>


              <h3 className="text-2xl font-bold text-gray-800 mb-3">{card.offer}</h3>
              <p className="text-gray-600 text-sm mb-3 md:mb-6 max-w-md">
                Discover the latest styles at unbeatable prices. Don’t miss
                this limited-time offer!
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full font-semibold 
                 hover:bg-gray-800 transform hover:scale-105 transition">
                Explore
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-50 md:h-auto order-1 md:order-2 relative">
              <Image
                src={card.img}
                alt={card.offer}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                priority={idx === 0}
              />
            </div>
          </article>
        </div>
      ))}
    </Slider>
  );
}
