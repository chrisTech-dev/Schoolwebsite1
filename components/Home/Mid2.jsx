"use client";

import { FaChevronRight } from "react-icons/fa";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Kindergarten",
      description:
        "Our play-based learning environment nurtures curiosity and creativity in young minds (ages 3-6).",
      features: [
        "Early literacy & numeracy",
        "Social-emotional development",
        "Creative arts integration",
        "Outdoor learning space",
      ],
      images: [
        { url: "/pic1.jpg", style: "rounded-full", size: "w-24 h-24" },
        { url: "/pic12.jpg", style: "rounded-lg", size: "w-full h-32" },
      ],
      colorScheme: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        button: "from-pink-500 to-pink-600",
        border: "border-pink-200",
        accent: "bg-pink-100",
      },
    },
    {
      title: "Primary School",
      description:
        "A comprehensive curriculum that builds strong foundations for lifelong learning (Grades 1-6).",
      features: [
        "Core subject mastery",
        "STEM enrichment",
        "Character education",
        "Extracurricular programs",
      ],
      images: [
        { url: "/pic23.jpg", style: "rounded-t-box", size: "w-full h-40" },
        {
          url: "/pic36.jpg",
          style: "rounded-b-box",
          size: "w-20 h-20 absolute -top-4 right-4 border-4 border-white",
        },
      ],
      colorScheme: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        button: "from-blue-500 to-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-100",
      },
    },
    {
      title: "Junior High",
      description:
        "Preparing students for senior high with advanced academics and leadership opportunities (Grades 7-9).",
      features: [
        "Subject specialization",
        "College prep courses",
        "Leadership development",
        "Career exploration",
      ],
      images: [
        { url: "/pic3.jpg", style: "rounded-l-box", size: "w-1/2 h-full" },
        { url: "/pic42.jpg", style: "rounded-r-box", size: "w-1/2 h-full" },
      ],
      colorScheme: {
        bg: "bg-teal-50",
        text: "text-teal-700",
        button: "from-teal-500 to-teal-600",
        border: "border-teal-200",
        accent: "bg-teal-100",
      },
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Advanced Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            whileInView={{
              letterSpacing: "normal",
              opacity: 1,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            Our <span className="text-primary">Academic Programs</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.8 },
            }}
          >
            Tailored learning pathways for every stage of development
          </motion.p>
        </motion.div>

        {/* Program Cards with Advanced Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {programs.map((program, index) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            const radius = useMotionValue(0);
            const opacity = useMotionValue(0);

            useEffect(() => {
              animate(radius, 1000, { duration: 2.5, ease: "circOut" });
              animate(opacity, 0.1, { duration: 1 });
            }, []);

            const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3), transparent 80%)`;

            return (
              <motion.div
                key={index}
                onMouseMove={(e) => {
                  const bounds = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - bounds.left);
                  mouseY.set(e.clientY - bounds.top);
                }}
                initial={{ opacity: 0, y: 60, rotateY: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4 },
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`group relative overflow-hidden rounded-2xl border ${program.colorScheme.border} ${program.colorScheme.bg} shadow-lg hover:shadow-xl transition-all duration-500`}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background }}
                />

                {/* Image Gallery */}
                <div className="relative flex items-center justify-center mb-6 h-48 bg-white/30 overflow-hidden">
                  {program.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: imgIndex === 0 ? 1.05 : 1.03 }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      className={`relative overflow-hidden ${img.style} ${img.size} shadow-md z-10`}
                    >
                      <Image
                        src={img.url}
                        alt={`${program.title} activity ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    className={`text-2xl font-bold mb-3 ${program.colorScheme.text}`}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {program.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {program.description}
                  </motion.p>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.2 + 0.5 + i * 0.1 },
                        }}
                        className="flex items-start"
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-2 mr-3 ${program.colorScheme.text.replace(
                            "text",
                            "bg"
                          )}`}
                        ></span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Advanced Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`btn w-full bg-gradient-to-r ${program.colorScheme.button} text-white shadow-md hover:shadow-lg relative overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Program
                      <FaChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%", transition: { duration: 0.6 } }}
                    />
                  </motion.button>
                </div>

                {/* Hover Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${program.colorScheme.text.replace(
                    "text",
                    "bg"
                  )}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View All Button with Advanced Effects */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(45deg, var(--p), var(--pf))",
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary btn-lg px-8 text-white shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Programs
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <FaChevronRight />
              </motion.span>
            </span>
            <motion.span
              className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%", transition: { duration: 0.8 } }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
