"use client"
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const TrendingProduct = () => {
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
  ]
  const settings = {
    dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        swipeToSlide: true,   
        autoplay: true,
        autoplaySpeed: 200,  
        cssEase: "ease-out", 
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 4.5 } },
      { breakpoint: 1200, settings: { slidesToShow: 3.5 } },
      { breakpoint: 900, settings: { slidesToShow: 2.5 } },
      { breakpoint: 650, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },

    ],
  };

  return (
    <div className="max-w-[1400px] w-[95%] mx-auto  py-10 overflow-hidden">
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
};

export default TrendingProduct;
