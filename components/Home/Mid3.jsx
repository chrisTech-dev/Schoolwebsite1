"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

export default function GalleryPreview() {
  const [activeImage, setActiveImage] = useState(null);
  const [direction, setDirection] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/pic48.jpg",
      alt: "Students in science lab",
      category: "STEM Activities",
      overlay: "bg-blue-500/90",
    },
    {
      id: 2,
      src: "/pic50.jpg",
      alt: "School sports day",
      category: "Athletics",
      overlay: "bg-emerald-500/90",
    },
    {
      id: 3,
      src: "/pic52.jpg",
      alt: "Art class exhibition",
      category: "Creative Arts",
      overlay: "bg-purple-500/90",
    },
  ];

  const openLightbox = (id) => {
    const index = galleryImages.findIndex((img) => img.id === id);
    setDirection(index > (activeImage?.id || 0) ? 1 : -1);
    setActiveImage(galleryImages.find((img) => img.id === id));
  };

  const navigate = (step) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === activeImage.id
    );
    const newIndex =
      (currentIndex + step + galleryImages.length) % galleryImages.length;
    setDirection(step > 0 ? 1 : -1);
    setActiveImage(galleryImages[newIndex]);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Campus Life
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Moments that define our vibrant learning community
          </p>
        </motion.div>

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="relative group h-96 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${image.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8`}
              >
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="text-white"
                >
                  <span className="inline-block bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{image.alt}</h3>
                  <button className="inline-flex items-center text-white border-b border-white/30 hover:border-white transition-colors">
                    View Full Image
                    <FiChevronRight className="ml-1" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/gallery">   
          <button className="btn btn-primary btn-lg px-8 group">
            <span className="flex items-center">
              Explore Our Gallery
              <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          </Link>
        </motion.div>

        {/* Premium Lightbox */}
        <AnimatePresence custom={direction}>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-10"
                onClick={closeLightbox}
              >
                <FiX className="h-8 w-8" />
              </button>

              <motion.div
                key={activeImage.id}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4 -translate-y-1/2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(-1);
                    }}
                    className="p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm"
                  >
                    <FiChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(1);
                    }}
                    className="p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm"
                  >
                    <FiChevronRight className="h-8 w-8" />
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <motion.img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-full h-auto max-h-[80vh] object-cover"
                  />
                </div>

                <div className="text-center mt-6">
                  <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                    {activeImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
