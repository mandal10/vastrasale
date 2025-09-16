"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

const cards = [
  { img: "/assets/images/t1.jpg", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/d1.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/d2.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/t2.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/t1.jpg", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/d1.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/d2.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
  { img: "/assets/images/t2.png", brandLogo: "/assets/images/levis.png", title: "Best of Styles", price: "Under Rs.799" },
];

export default function DealsOfTheDayClient() {
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 400) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 2.5;
    return 3.5;
  };

  useEffect(() => {
    const updateSlides = () => setSlidesToShow(getSlidesToShow());
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
  };

  return (
    <section className="max-w-[1400px] w-[95%] mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Deals of the Day</h2>
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-2">
            <div className="rounded-lg shadow-md cursor-pointer overflow-hidden bg-white">
              <div className="w-full h-48 relative">
                <Image
                  src={card.img}
                  alt="Card Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <div className="p-4 text-center">
                <div className="mb-2">
                  <Image
                    src={card.brandLogo}
                    alt="Brand Logo"
                    width={80}
                    height={40}
                    className="mx-auto"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-800">{card.title}</p>
                <p className="text-sm text-gray-600">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
