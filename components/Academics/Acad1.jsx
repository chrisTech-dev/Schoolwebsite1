"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaLightbulb,
  FaHandsHelping,
  FaBookReader,
  FaAtom,
  FaPaintBrush,
  FaBrain,
} from "react-icons/fa";

export default function AcademicsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Scroll-based animations
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div className="h-screen overflow-y-scroll" ref={containerRef}>
      {/* Hero with Parallax */}
      <section className="h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"
          style={{ y: y1 }}
        />

        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div className="text-center px-4 z-10" style={{ y: y2 }}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              Reimagining
            </span>{" "}
            Education
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Scroll to explore our innovative learning philosophy
          </motion.p>

          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <FaAtom className="w-12 h-12 mx-auto text-white animate-spin-slow" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ scale }}
        >
          <div className="relative h-full w-full">
            <motion.img
              src="/pic3.jpg"
              alt="Student"
              className="absolute left-10 bottom-0 w-48 h-48 object-cover rounded-2xl shadow-2xl border-4 border-white"
              style={{ rotate }}
            />
            <motion.img
              src="/pic31.jpg"
              alt="Student"
              className="absolute left-1/2 -translate-x-1/2 bottom-10 w-56 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -5]) }}
            />
            <motion.img
              src="/pic41.jpg"
              alt="Student"
              className="absolute right-10 bottom-0 w-48 h-48 object-cover rounded-2xl shadow-2xl border-4 border-white"
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 5]) }}
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy - Scroll-Triggered Animation */}
      <section className="min-h-screen py-32 bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              whileInView={{
                backgroundSize: ["0% 3px", "100% 3px"],
                transition: { duration: 1.5 },
              }}
              style={{
                backgroundImage: "linear-gradient(to right, #f59e0b, #f59e0b)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
              }}
            >
              <span className="  text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Our Philosophy&nbsp;
              </span>
              in Motion
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: false }}
            >
              {[
                "We don't just teach subjects - we cultivate curious minds through experiential learning",
                "Our classrooms are dynamic studios where traditional academics collide with creative problem-solving",
                "Every lesson connects to real-world applications and collaborative discovery",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-lg"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative h-96"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-2xl"
              animate={{
                rotate: [0, 3, 0, -3, 0],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl shadow-lg flex items-center justify-center p-8"
              animate={{
                rotate: [0, -2, 0, 2, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              <FaPaintBrush className="w-24 h-24 text-amber-500/30" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-white rounded-2xl shadow-md flex items-center justify-center p-8 overflow-hidden"
              whileInView={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <img
                src="/pic62.jpg"
                alt="Creative classroom"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars - Scroll-Activated Orbit */}
      <section className="min-h-screen py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-indigo-900 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            Three{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Pillars
            </span>{" "}
            of Excellence
          </motion.h2>

          {/* Mobile view - stacked cards for small screens */}
          <div className="md:hidden flex flex-col gap-6">
            {[
              {
                icon: <FaLightbulb className="w-10 h-10" />,
                title: "Innovative Thinking",
                content: "Fostering creativity through design challenges",
                color: "bg-pink-500",
              },
              {
                icon: <FaBookReader className="w-10 h-10" />,
                title: "Academic Rigor",
                content: "Mastering core concepts through deep engagement",
                color: "bg-purple-500",
              },
              {
                icon: <FaHandsHelping className="w-10 h-10" />,
                title: "Social Growth",
                content: "Developing emotional intelligence skills",
                color: "bg-cyan-500",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className={`${pillar.color} p-6 rounded-2xl shadow-lg`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.2, duration: 0.6 },
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="mb-4"
                  >
                    {pillar.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-white/90">{pillar.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop view - orbiting cards for medium screens and up */}
          <div className="hidden md:block relative h-[400px] lg:h-[500px]">
            {/* Central circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl border-8 border-white/10"
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <FaBrain className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
              </motion.div>
            </motion.div>

            {/* Connecting lines */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.5, duration: 1 },
              }}
              viewport={{ once: true }}
            >
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                  style={{
                    width: "40%",
                    transformOrigin: "left center",
                    transform: `rotate(${angle}deg) translateX(20px)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                    },
                  }}
                />
              ))}
            </motion.div>

            {/* Orbiting cards */}
            {[
              {
                icon: (
                  <FaLightbulb className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                ),
                title: "Innovative Thinking",
                content: "Fostering creativity through design challenges",
                color: "bg-pink-500",
                angle: 0,
              },
              {
                icon: (
                  <FaBookReader className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                ),
                title: "Academic Rigor",
                content: "Mastering core concepts through deep engagement",
                color: "bg-purple-500",
                angle: 120,
              },
              {
                icon: (
                  <FaHandsHelping className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                ),
                title: "Social Growth",
                content: "Developing emotional intelligence skills",
                color: "bg-cyan-500",
                angle: 240,
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className={`absolute top-1/2 left-1/2 w-52 md:w-56 lg:w-64 h-auto p-6 rounded-3xl ${pillar.color} shadow-2xl flex flex-col items-center justify-center text-center transform -translate-x-1/2 -translate-y-1/2`}
                initial={{
                  opacity: 0,
                  x: Math.cos((pillar.angle * Math.PI) / 180) * 180,
                  y: Math.sin((pillar.angle * Math.PI) / 180) * 180,
                }}
                whileInView={{
                  opacity: 1,
                  x: Math.cos((pillar.angle * Math.PI) / 180) * 180,
                  y: Math.sin((pillar.angle * Math.PI) / 180) * 180,
                  transition: {
                    delay: i * 0.3,
                    duration: 0.8,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 },
                }}
                animate={{
                  x: [
                    Math.cos((pillar.angle * Math.PI) / 180) * 180,
                    Math.cos(((pillar.angle + 15) * Math.PI) / 180) * 190,
                    Math.cos((pillar.angle * Math.PI) / 180) * 180,
                  ],
                  y: [
                    Math.sin((pillar.angle * Math.PI) / 180) * 180,
                    Math.sin(((pillar.angle + 15) * Math.PI) / 180) * 190,
                    Math.sin((pillar.angle * Math.PI) / 180) * 180,
                  ],
                  rotateZ: [0, 5, 0, -5, 0],
                  transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                  },
                }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8 },
                  }}
                  animate={{
                    y: [0, -5, 0, 5, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 1.3,
                    },
                  }}
                >
                  {pillar.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {pillar.content}
                </p>
              </motion.div>
            ))}

            {/* Animated particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                initial={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 600 - 300,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
                animate={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 600 - 300,
                  opacity: [0.2, 0.8, 0.2],
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Scroll-Triggered Steps */}
      <section className="min-h-screen py-32 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-20 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: false }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Teaching
            </span>{" "}
            Approach
          </motion.h2>

          <div className="space-y-24">
            {[
              {
                title: "Student-Led Discovery",
                content:
                  "Classrooms transform into research labs where students drive inquiry",
                color: "bg-emerald-500",
                side: "left",
              },
              {
                title: "Real-World Projects",
                content: "Learning anchored in authentic community challenges",
                color: "bg-teal-500",
                side: "right",
              },
              {
                title: "Reflective Practice",
                content: "Structured metacognition to deepen understanding",
                color: "bg-green-500",
                side: "left",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex ${
                  item.side === "left" ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.2,
                  },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className={`w-full md:w-1/2 p-8 rounded-3xl shadow-lg ${
                    item.side === "left" ? "bg-white" : "bg-emerald-100"
                  } relative z-10`}
                  whileInView={{
                    boxShadow: [
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    ],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <div
                    className={`absolute top-6 ${
                      item.side === "left" ? "-left-4" : "-right-4"
                    } w-8 h-8 ${
                      item.color
                    } rounded-full shadow-md flex items-center justify-center text-white`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
