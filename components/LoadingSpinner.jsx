// components/AnnouncementSpinner.js
"use client";
import { motion } from "framer-motion";

export default function AnnouncementSpinner() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-100 bg-opacity-90 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-8 border-primary border-opacity-30"
          ></motion.div>

          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-4 rounded-full border-8 border-secondary border-opacity-40"
          ></motion.div>

          {/* Inner dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-8 rounded-full bg-accent"
          ></motion.div>
        </div>

        {/* Text with fade animation - fixed letter spacing */}
        <motion.p
          initial={{ y: 20, opacity: 0, letterSpacing: "0em" }}
          animate={{ y: 0, opacity: 1, letterSpacing: "0.1em" }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            letterSpacing: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="mt-6 text-lg font-medium text-neutral-content tracking-wider"
        >
          Securing Announcements...
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto"
        ></motion.div>
      </motion.div>
    </div>
  );
}
