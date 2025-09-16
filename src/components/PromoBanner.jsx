'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const slides = [
    {
        image: '/assets/images/promo.jpg',
        title: 'FOREVER 21',
        subtitle: 'Big Fashion Festival',
        discount: '50% - 80% off',
    },
    {
        image: '/assets/images/slide-1.jpg',
        title: 'New Arrivals',
        subtitle: 'Autumn Collection',
        discount: 'Flat 40% Off',
    },
    {
        image: '/assets/images/slide-2.jpg',
        title: 'Flash Sale',
        subtitle: 'Limited Time Only',
        discount: 'Up to 70% Off',
    },
    {
        image: '/assets/images/slide-3.jpg',
        title: 'Style Refresh',
        subtitle: 'Back to School Looks',
        discount: 'Starting at $9.99',
    },
    {
        image: '/assets/images/slide-4.jpg',
        title: 'Weekend Steals',
        subtitle: 'Don’t Miss Out',
        discount: 'Buy 1 Get 1 Free',
    },
    {
        image: '/assets/images/to2.jpg',
        title: 'Denim Days',
        subtitle: 'Essential Styles',
        discount: 'Flat 30% Off',
    },
];

export default function PromoSlider() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    // Auto slide every 5 seconds
    useEffect(() => {
        startAutoSlide();
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const startAutoSlide = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const handleDotClick = (index) => {
        setCurrent(index);
        startAutoSlide(); // Reset timer on dot click
    };

    return (
        <section className="relative h-screen overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] h-full transition-all duration-700">
                {/* Left Side - Image */}
                <div className="relative w-full h-[300px] md:h-full">
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Right Side - Text */}
                <div className="flex flex-col justify-center items-center text-center md:text-left bg-[#1C4444] text-white p-10 transition-all duration-500">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{slides[current].title}</h1>
                    <p className="text-2xl md:text-3xl font-semibold mb-4">{slides[current].subtitle}</p>
                    <p className="text-xl md:text-2xl mb-6">{slides[current].discount}</p>
                    <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-[#1C4444] transition duration-300">
                        Explore Now
                    </button>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'bg-white w-8' : 'bg-white/50 w-4'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
