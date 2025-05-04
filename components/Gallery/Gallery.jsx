"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronRight,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight as FiNext,
} from "react-icons/fi";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/pic67.jpg",
      alt: "Annual Speech Day",
      category: "Events",
    },
    {
      id: 2,
      src: "/pic47.jpg",
      alt: "Students in science lab",
      category: "Classroom",
    },
    {
      id: 3,
      src: "/pic63.jpg",
      alt: "Sports day competition",
      category: "Sports",
    },
    {
      id: 4,
      src: "/pic64.jpg",
      alt: "Cultural day performance",
      category: "Culture",
    },
    {
      id: 5,
      src: "/pic28.jpg",
      alt: "Student receiving award",
      category: "Awards",
    },
    {
      id: 6,
      src: "/pic59.jpg",
      alt: "Students reading in library",
      category: "Classroom",
    },
    {
      id: 7,
      src: "/pic53.jpg",
      alt: "Field trip to museum",
      category: "Events",
    },
    {
      id: 8,
      src: "/pic40.jpg",
      alt: "Football team victory",
      category: "Sports",
    },
    {
      id: 9,
      src: "/pic65.jpg",
      alt: "School drama production",
      category: "Culture",
    },
    {
      id: 10,
      src: "/pic61.jpg",
      alt: "Math class activity",
      category: "Classroom",
    },
    {
      id: 11,
      src: "/pic66.jpg",
      alt: "Graduation ceremony",
      category: "Events",
    },
    {
      id: 12,
      src: "/pic43.jpg",
      alt: "Chess club tournament",
      category: "Awards",
    },
  ];

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  const filterItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors"
              onClick={closeLightbox}
            >
              <FiX />
            </button>

            <button
              className="absolute left-4 text-white text-3xl p-2 hover:text-primary transition-colors"
              onClick={() => navigate("prev")}
            >
              <FiChevronLeft size={32} />
            </button>

            <div className="max-w-4xl w-full">
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
              <div className="text-white text-center mt-4">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-sm opacity-80">{selectedImage.category}</p>
              </div>
            </div>

            <button
              className="absolute right-4 text-white text-3xl p-2 hover:text-primary transition-colors"
              onClick={() => navigate("next")}
            >
              <FiNext size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          School Life in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Pictures
          </span>
        </motion.h2>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Explore our vibrant community through these snapshots of daily
          activities, special events, and student achievements.
        </motion.p>
      </motion.div>

      {/* 2. Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`btn btn-sm ${
              activeFilter === category ? "btn-primary" : "btn-ghost"
            }`}
            variants={filterItem}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            {activeFilter === category && <FiFilter className="mr-1" />}
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* 3. Photo Grid Gallery */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={item}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              layout
              onClick={() => openLightbox(image, index)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ y: 50 }}
                whileHover={{ y: 0 }}
              >
                <div className="text-sm font-medium bg-primary px-3 py-1 rounded-full inline-block mb-2">
                  {image.category}
                </div>
                <p className="font-medium text-lg">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 4. View More Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="btn btn-lg bg-primary text-white hover:bg-primary/80 transition-all duration-300 group flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More Photos
          <FiChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
}
