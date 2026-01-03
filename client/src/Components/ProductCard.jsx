import { useState } from 'react';

export default function ProductCard({ product, onClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group relative" onClick={onClick}>
      {/* Carousel container */}
      <div className="relative aspect-square w-full lg:aspect-auto lg:h-80">
        {/* Images */}
        {product.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={product.name}
              className="w-full h-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
          </div>
        ))}

        {/* Chevron Buttons with white icons */}
        {/* White chevron with dark background for visibility */}
<button
  onClick={(e) => {
    e.stopPropagation();
    prevImage();
  }}
  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1.5 shadow-lg z-10"
  aria-label="Previous image"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1.5 shadow-lg z-10"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Product info */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          <p className="mt-1 text-sm text-gray-500">Sold out</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}