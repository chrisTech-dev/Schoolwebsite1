"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const messages = [
    "Need help? Chat with us!",
    "Instant answers via WhatsApp",
    "Admissions queries? Message us!",
    "We reply within minutes!",
    "24/7 support available",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    const visibilityInterval = setInterval(() => {
      setShowMessage((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(visibilityInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.5,
            }}
            className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg shadow-xl font-medium text-sm max-w-xs"
          >
            {messages[currentMessage]}
            <div className="absolute right-3 -bottom-2 w-4 h-4 bg-green-600 transform rotate-45" />

            {/* Decorative elements */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-20" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-20" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/233205393283?text=Hello!%20I%27m%20interested%20in%20your%20school"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />

        {/* Animated ring effect */}
        <motion.span
          className="absolute inset-0 border-2 border-green-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.a>
    </div>
  );
}
