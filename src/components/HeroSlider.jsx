"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/assets/images/slide-1.jpg',
      title: 'PRADA',
      subtitle: 'Big Fashion Festival',
      discount: '50% - 80% off',
      buttonText: 'Explore'
    },
    {
      id: 2,
      image: '/assets/images/slide-2.jpg',
      title: 'GUCCI',
      subtitle: 'Luxury Redefined',
      discount: 'Flat 40% on New Arrivals',
      buttonText: 'Shop Now'
    },
    {
      id: 3,
      image: '/assets/images/slide-3.jpg',
      title: 'ZARA',
      subtitle: 'Minimalism Meets Style',
      discount: 'Upto 60% Off',
      buttonText: 'Discover'
    },
    {
      id: 4,
      image: '/assets/images/slide-4.jpg',
      title: 'H&M',
      subtitle: 'Trendy Looks for Less',
      discount: 'Buy 1 Get 1 Free',
      buttonText: 'Start Shopping'
    },
  ];


  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-5 z-10 hidden md:block cursor-pointer text-white text-2xl" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-5 z-10 hidden md:block cursor-pointer text-white text-2xl" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[400px] xl:h-[450px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="max-w-lg text-center p-10 rounded-md">
                <h2 className="text-5xl md:text-6xl font-bold text-white">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-white mt-4">{slide.subtitle}</p>
                <p className="text-lg text-white mt-2">{slide.discount}</p>
                <button className="mt-6 px-8 py-3 border border-white cursor-pointer text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default HeroSlider;
