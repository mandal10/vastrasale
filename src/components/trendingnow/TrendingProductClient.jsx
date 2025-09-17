"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const products = [
  { image: "/assets/images/t1.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t2.png", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t3.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t4.png", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t5.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
{ image: "/assets/images/t1.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t2.png", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t3.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t4.png", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },
  { image: "/assets/images/t5.jpg", title: "Womens Denim Jacket", price: 700, originalPrice: 1000, discount: 30, rating: 4.4 },

];

export default function TrendingProductClient() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 500) return 1;
    if (width < 650) return 2;
    if (width < 900) return 2.5;
    if (width < 1200) return 3.5;
    if (width < 1300) return 4.5;
    return 4.5;
  };

  useEffect(() => {
    const updateSlides = () => setSlidesToShow(getSlidesToShow());
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
  };

  return (
    <div className="max-w-[1400px] w-[95%] mx-auto py-10 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Trending Now</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
