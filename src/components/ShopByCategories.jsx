'use client';
import Image from 'next/image';

const categories = [
  {
    src: '/assets/images/c1.jpg',
    alt: 'Category 1',
    price: '$29.99',
    heading: 'Category 1',
    description: 'This is the description for category 1',
    rating: 4.5,
  },
  {
    src: '/assets/images/c2.jpg',
    alt: 'Category 2',
    price: '$39.99',
    heading: 'Category 2',
    description: 'This is the description for category 2',
    rating: 4.0,
  },
  {
    src: '/assets/images/c4.jpg',
    alt: 'Category 3',
    price: '$19.99',
    heading: 'Category 3',
    description: 'This is the description for category 3',
    rating: 4.7,
  },
  {
    src: '/assets/images/c3.jpg',
    alt: 'Category 4',
    price: '$24.99',
    heading: 'Category 4',
    description: 'This is the description for category 4',
    rating: 4.2,
  },
  {
    src: '/assets/images/c5.jpg',
    alt: 'Category 5',
    price: '$49.99',
    heading: 'Category 5',
    description: 'This is the description for category 5',
    rating: 4.8,
  },
  {
    src: '/assets/images/c6.jpg',
    alt: 'Category 6',
    price: '$34.99',
    heading: 'Category 6',
    description: 'This is the description for category 6',
    rating: 4.3,
  },
  {
    src: '/assets/images/c1.jpg',
    alt: 'Category 1',
    price: '$29.99',
    heading: 'Category 1',
    description: 'This is the description for category 1',
    rating: 4.5,
  },
  {
    src: '/assets/images/c2.jpg',
    alt: 'Category 2',
    price: '$39.99',
    heading: 'Category 2',
    description: 'This is the description for category 2',
    rating: 4.0,
  },
];

export default function ShopByCategories() {
  return (
    <section className="py-10 md:py-0 w-[95%] max-w-[1400px] mx-auto bg-white px-2">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 mt-10 md:mt-0">Shop by Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[400px] sm:h-[600px] md:h-[450px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer  group"
          >
            <Image
              src={cat.src}
              alt={cat.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority={index < 3}
            />
            {/* Bottom Slide-up Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/10 bg-opacity-70 text-white p-4
              transform translate-y-full opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-transform transition-opacity duration-300 ease-in-out
              ">
              <h3 className="text-xl font-semibold mb-1">{cat.heading}</h3>
              <p className="text-sm mb-1">{cat.description}</p>
              <p className="text-lg font-bold mb-1">{cat.price}</p>
              <p className="text-yellow-400">
                {'★'.repeat(Math.floor(cat.rating))}{' '}
                <span className="text-white">({cat.rating.toFixed(1)})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
