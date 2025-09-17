// app/components/ProductCardSkeleton.js
export default function ProductCardSkeleton() {
  return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="relative w-full h-45 bg-gray-200" />
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>
          <div className="flex items-baseline space-x-2">
            <div className="h-5 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
            <div className="h-4 bg-gray-200 rounded w-10"></div>
          </div>
        </div>
      </div>
  );
}
