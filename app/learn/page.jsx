"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiBook,
  FiUsers,
  FiLayers,
  FiActivity,
  FiAward,
  FiHeart,
} from "react-icons/fi";

export default function LearnMorePage() {
  const features = [
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Small Class Sizes",
      description:
        "Personalized attention with a maximum of 20 students per class",
    },
    {
      icon: <FiHeart className="h-8 w-8" />,
      title: "Caring Teachers",
      description: "Dedicated educators who nurture each child's potential",
    },
    {
      icon: <FiLayers className="h-8 w-8" />,
      title: "Modern Facilities",
      description: "Well-equipped classrooms, science lab, and ICT center",
    },
    {
      icon: <FiActivity className="h-8 w-8" />,
      title: "Holistic Education",
      description: "Balancing academics with character development",
    },
    {
      icon: <FiBook className="h-8 w-8" />,
      title: "Innovative Curriculum",
      description:
        "Blending Ghanaian standards with international best practices",
    },
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Award-Winning Programs",
      description: "Recognized excellence in academics and extracurriculars",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    hover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const facilities = [
    { name: "Science Lab", img: "/pic68.jpg", width: 400, height: 300 },
    { name: "Library", img: "/pic69.jpg", width: 400, height: 300 },
    { name: "ICT Center", img: "/pic70.jpg", width: 400, height: 300 },
    { name: "Playground", img: "/pic71.jpg", width: 400, height: 300 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Our School
          </span>
        </h1>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          What sets Bright Future Academy apart — we go beyond academics to
          shape future leaders.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            className="card bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Curriculum Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                We follow the Ghana Education Service curriculum enhanced with:
              </p>
              <ul className="space-y-3">
                {[
                  "STEM enrichment programs",
                  "Creative arts integration",
                  "Digital literacy focus",
                  "Critical thinking exercises",
                  "Character education",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-white/20 p-1 rounded-full">
                      <FiBook className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Special Programs</h3>
              <ul className="space-y-3">
                {[
                  "Reading enhancement initiative",
                  "Math Olympiad training",
                  "Science fair competitions",
                  "Debate and public speaking",
                  "Cultural exchange programs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-white/20 p-1 rounded-full">
                      <FiAward className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Facilities Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden h-40"
            >
              <Image
                src={facility.img}
                alt={facility.name}
                width={facility.width}
                height={facility.height}
                className="w-full h-full object-cover"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {facility.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience our vibrant learning environment firsthand.
        </p>
        <motion.a
          href="/contact"
          className="btn btn-primary btn-lg px-8 inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Visit
        </motion.a>
      </motion.div>
    </div>
  );
}
