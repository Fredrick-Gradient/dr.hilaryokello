"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";

export default function BookingPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);
  const slideWidthRef = useRef(0);
  const itemsPerView = 1;

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current && carouselRef.current.children[0]) {
        slideWidthRef.current = carouselRef.current.children[0].offsetWidth;
        carouselRef.current.style.transform = `translateX(-${slideIndex * slideWidthRef.current * itemsPerView}px)`;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [slideIndex, itemsPerView]);

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / itemsPerView));
  };

  const handlePrev = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / itemsPerView)) % Math.ceil(images.length / itemsPerView));
  };

  const images = [
    "/gallery/crowd.png",
    "/gallery/uganda_must_laugh-1.jpg",
    "/gallery/bg_booking.webp",
    "/bg_hero.webp",
    "/bg_hero.webp",
  ];

  return (
    <section className="w-full">
      {/* Full-Page Hero Image */}
      <div className="w-full h-screen overflow-hidden">
        <Image
          src="/gallery/bg_booking.webp" // Replace with your hero image path
          alt="Uganda Must Laugh - Comedy Special"
          layout="fill"
          quality={80}
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 max-w-3xl flex flex-col justify-center items-center align-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-4xl md:text-6xl text-left font-bold mb-4 text-white">
            Uganda Must Laugh - A Comedy Special
            </h1>
            <p className="text-lg md:text-xl mb-8  text-left text-white">
              Get ready for a night of laughter and unforgettable moments.
            </p>
            <Button
        
              href="https://karitickets.com"
              className="p-5  text-white rounded-full text-left hover:bg-black hover:text-white"
              variant='bordered'
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Tickets Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Booking Details Below Hero */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        

        

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
          For Bookings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Phone Number
              </h3>
              <p className="text-white">+256 752 734280</p>
              <p className="text-white"> +256 782 734280</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-white">info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Location
              </h3>
              <p className="text-white">123 Main St, Anytown, USA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Booking Platform
              </h3>
              <a
                href="https://karitickets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                karitickets.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}