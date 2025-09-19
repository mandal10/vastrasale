'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Loading from '@/app/Loading';

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCat, setSelectedCat] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        setProducts(data);

        const cats = Array.from(new Set(data.map(prod => prod.category?.name || prod.category || 'Other')));
        setCategories(['All', ...cats]);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Fetch error', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCat === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(prod => {
        const catName = prod.category?.name || prod.category;
        return catName === selectedCat;
      });
      setFilteredProducts(filtered);
    }
    setVisibleCount(4); // Reset visible count when category changes
  }, [selectedCat, products]);

  // Infinite Scroll: observe loader element
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 4, filteredProducts.length));
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredProducts]);

  if (loading) {
    return <div className="text-center py-10"><Loading /></div>;
  }

  return (
    <div className="w-[95%] max-w-[1400px] mx-auto py-6">
      {/* Category Scroll Pills */}
      <div className="overflow-x-auto whitespace-nowrap mb-6 py-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCat(cat)}
            className={`inline-block px-4 py-2 mr-2 rounded-full ${
              selectedCat === cat ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4">
        {filteredProducts.slice(0, visibleCount).map((prod, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-100">
              <Image
                src={prod.images?.[0] || prod.image}
                alt={prod.title || prod.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate">
                {prod.title || prod.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                {prod.category?.name || prod.category}
              </p>
              <p className="text-base sm:text-lg font-bold text-black">
                ₹ {Math.floor(prod.price)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Loader Trigger (for infinite scroll) */}
      {visibleCount < filteredProducts.length && (
        <div ref={loaderRef} className="text-center py-6">
          <p className="text-gray-500">Loading more products...</p>
        </div>
      )}
    </div>
  );
}
