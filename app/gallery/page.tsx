'use client' // If using App Router

import Image from 'next/image';

const images = [
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/bg_hero.webp',
  '/conf8.jpg',
  // Add more images in the /public folder
];

export default function Gallery() {
  return (
    <div className="px-4 py-20 max-w-7xl bg-black mx-auto">
      <h1 className="text-5xl font-bold text-left mb-6 mt-10 text-white">Next.js Inspired Gallery</h1>

      {/* Set up the grid to have three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={src}
              alt={`Conf image ${idx + 1}`}
              width={900}
              height={600}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL="/placeholder.jpg" // Optional for better UX
            />
          </div>
        ))}
      </div>
    </div>
  );
}
