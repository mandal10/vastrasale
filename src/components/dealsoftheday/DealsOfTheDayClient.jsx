"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Loading from "@/app/Loading";

export default function DealsOfTheDayClient() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 400) return 2;
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

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=8");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        // Map to match your card props, fallback image included
        const mapped = data.map(item => ({
          img: Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : "/placeholder.png",
          brandLogo: "/assets/images/levis.png", // Or use a real brand if available
          title: item.title,
          price: `Under Rs.${Math.floor(item.price)}`,
        }));

        setProducts(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load deals");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-out",
  };

  if (loading) return <div className="text-center text-gray-500 py-10"><Loading /></div>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="max-w-[1400px] w-[95%] mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Deals of the Day</h2>
      <Slider {...settings}>
        {products.map((card, idx) => (
          <div key={idx} className="px-2">
            <div className="rounded-lg shadow-md cursor-pointer overflow-hidden bg-white">
              <div className="w-full sm:h-48 h-24 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  priority={idx < 3} // prioritize first few images
                />
              </div>
              <div className="p-4 text-center">
                {/* Logo Box */}
                <div className="flex items-center justify-center mb-2">
                  <div className="h-10 w-[100px] relative">
                    <Image
                      src={card.brandLogo}
                      alt="Brand Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 120px, 180px"
                    />
                  </div>
                </div>

                {/* Title & Price */}
                <p
                  className="text-lg font-semibold text-gray-800 truncate"
                  title={card.title}
                >
                  {card.title.length > 25 ? card.title.slice(0, 25) + "..." : card.title}
                </p>

                <p className="text-sm text-gray-600">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
