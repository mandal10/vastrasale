import Image from "next/image";

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
  brand,  // Added brand prop
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300">
      <div className="relative h-[200px] w-full ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 20vw"
        />
      </div>

      <div className="p-4">
        <h2
          className="text-lg font-semibold truncate"
          title={title}
        >
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h2>
        <div className="flex items-center justify-between text-sm text-gray-600">
          {/* Display dynamic brand here */}
          <p className="text-sm text-gray-500 mb-1">{brand || "Brand Name"}</p>
          <div className="flex items-center">
            <span>{rating || "4.0"}</span>
            <svg
              className="w-4 h-4 text-yellow-400 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.33 2.021 10.67 2.021 10.951 2.927l1.035 3.345h3.513c.969 0 
                       1.371 1.24.588 1.81l-2.847 2.07 1.034 3.345c.281.906-.755 
                       1.656-1.54 1.085l-2.847-2.07-2.847 2.07c-.785.571-1.821-.179-1.54-1.085l1.034-3.345-2.847-2.07
                       c-.783-.57-.38-1.81.588-1.81h3.513l1.035-3.345z" />
            </svg>
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-lg font-bold text-gray-900">Rs. {price}</span>
          <span className="line-through text-gray-400">Rs. {originalPrice}</span>
          <span className="text-green-600 text-sm">({discount}% off)</span>
        </div>
      </div>
    </div>
  );
}
