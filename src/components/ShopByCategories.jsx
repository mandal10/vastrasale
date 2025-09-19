'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'T-Shirts',
    link: '/categories/tshirts',
    img: '/assets/images/t2.png', // T-shirt
  },
  {
    title: 'Jeans',
    link: '/categories/jeans',
    img: '/assets/images/t2.png', // Jeans
  },
  {
    title: 'Sneakers',
    link: '/categories/sneakers',
    img: '/assets/images/t2.png', // Sneakers
  },
  {
    title: 'Watches',
    link: '/categories/watches',
    img: '/assets/images/t2.png', // Watch
  },
  {
    title: 'Hoodies',
    link: '/categories/hoodies',
    img: '/assets/images/t2.png', // Hoodie
  },
  {
    title: 'Backpacks',
    link: '/categories/backpacks',
    img: '/assets/images/t2.png', // Backpack
  },
  {
    title: 'Sunglasses',
    link: '/categories/sunglasses',
    img: '/assets/images/t2.png', // Sunglasses
  },
  {
    title: 'Jackets',
    link: '/categories/jackets',
    img: '/assets/images/t2.png', // Jacket
  },
];

export default function ShopByCategory() {
  return (
    <section className="w-[95%] max-w-[1400px] mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Shop by Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <Link
            href={cat.link}
            key={i}
            className="block group rounded-lg overflow-hidden relative shadow-md"
          >
            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px]">
              <Image
                src={`${cat.img}?w=500&h=500&fit=crop`}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 bg-black/60 w-full text-white py-2 px-3 text-sm font-semibold">
              {cat.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
