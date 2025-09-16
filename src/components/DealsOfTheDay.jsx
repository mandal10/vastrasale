"use client";
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

export default function DealsOfTheDay() {
  const settings = {
     dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        swipeToSlide: true,   
        autoplay: true,
        autoplaySpeed: 200,  
        cssEase: "ease-out", 
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2.5 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="max-w-[1400px] w-[95%] mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Deals of the Day</h2>
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-2">
            <div className="rounded-lg shadow-md cursor-pointer overflow-hidden bg-white">
              <div className="w-full h-45 relative">
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
                    alt="Levi's Logo"
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
