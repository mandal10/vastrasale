'use client';

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import Loading from '@/app/Loading';

export default function TrendingProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

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
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        const mappedProducts = data.map((item) => ({
          image: item.image,
          title: item.title,
          price: Math.floor(item.price),
          originalPrice: Math.floor(item.price * 1.2),
          discount: 20,
          rating: item.rating?.rate || 4.0,
          brand: getBrandFromCategory(item.category),
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error('Error fetching products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  function getBrandFromCategory(category) {
    switch (category) {
      case "men's clothing":
        return "Levi's";
      case "women's clothing":
        return "Zara";
      case 'jewelery':
        return 'Tiffany';
      case 'electronics':
        return 'Sony';
      default:
        return 'Generic Brand';
    }
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
  };

  return (
    <div
      ref={sliderRef}
      className="max-w-[1400px] w-[95%] mx-auto py-10 overflow-hidden"
    >
      <h1 className="text-3xl font-bold mb-6">Trending Now</h1>

      {loading ? (
        <div className="text-gray-500">
          <Loading />
        </div>
      ) : isVisible ? (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard {...product} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="h-64 flex items-center justify-center text-gray-400">
          Scroll to load trending products...
        </div>
      )}
    </div>
  );
}
