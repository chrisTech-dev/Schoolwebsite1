"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: "slide1",
    img: "/pic2.jpg",
    message: "Building Bright Minds for a Better Tomorrow",
    color: "text-indigo-100",
  },
  {
    id: "slide2",
    img: "/pic22.jpg",
    message: "Excellence in Character and Academics",
    color: "text-amber-100",
  },
  {
    id: "slide3",
    img: "/pic30.jpg",
    message: "Nurturing Talents and Future Leaders",
    color: "text-emerald-100",
  },
  {
    id: "slide4",
    img: "/pic36.jpg",
    message: "Safe, Caring and Inclusive Environment",
    color: "text-blue-100",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // autoplay every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.message}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <div className={`text-center px-4 max-w-4xl ${slide.color}`}>
              <h2 className="text-4xl pb-15 md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wide">
                {slide.message}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Progress bar (updated to match 5s duration) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-[5000ms] ease-linear"
          style={{
            width: `${
              ((activeIndex + 1) % (slides.length + 1)) * (100 / slides.length)
            }%`,
          }}
        />
      </div>

    </div>
  );
}
