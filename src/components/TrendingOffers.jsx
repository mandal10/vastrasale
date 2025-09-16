'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const trendingCards = [
  {
    type: 'brand-split',
    logo: '/assets/images/levis.png',
    offer: 'Min 60% off',
    img: '/assets/images/to1.jpg',
  },
  {
    type: 'brand-split',
    logo: '/assets/images/levis.png',
    offer: 'Min 60% off',
    img: '/assets/images/to2.jpg',
  },
  {
    type: 'brand-split',
    logo: '/assets/images/levis.png',
    offer: 'Min 60% off',
    img: '/assets/images/t5.jpg',
  },
];

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute z-10 right-4 top-1/2 hidden md:block -translate-y-1/2 cursor-pointer 
                 text-black bg-white p-2 rounded-full  shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute z-10 left-4 top-1/2 hidden md:block -translate-y-1/2 cursor-pointer 
                 text-black bg-white p-2 rounded-full shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
}

export default function TrendingOffers() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '300px',
    slidesToShow: 1,
    speed: 500,

    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400, // xxl screens
        settings: {
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 1280, // xl screens
        settings: {
          centerPadding: '250px',
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          centerPadding: '120px',
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 500, // sm screens (mobile)
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="slider-container py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Trending Offers
      </h2>
      <Slider {...settings}>
        {trendingCards.map((card, idx) => (
          <div key={idx} className="px-4 md:px-8 pb-5">
            <div className="bg-white flex flex-col cursor-pointer md:flex-row rounded-2xl shadow-lg  overflow-hidden  transition-shadow duration-300">
              {/* Left Content */}
              <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1  justify-center items-center text-center p-2 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
                <Image
                  src={card.logo}
                  alt="Brand Logo"
                  width={120}
                  height={60}
                  className="mb-6"
                  priority
                  
                />

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {card.offer}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  Discover the latest styles at unbeatable prices. Don’t miss
                  this limited-time offer!
                </p>

                <button className="px-6 py-3 cursor-pointer bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105">
                  Explore
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2 relative">
                <Image
                  src={card.img}
                  alt={card.offer}
                  fill
                  className="object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
