"use client"

import { motion } from "framer-motion";
import {
  FiAward,
  FiTarget,
  FiHeart,
  FiBook,
  FiUsers,
  FiShield,
} from "react-icons/fi";

const VisionMissionPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const coreValues = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for high academic and personal standards in everything we do.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Respect",
      description:
        "We foster a culture of kindness, discipline, and mutual respect.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We uphold honesty and strong moral principles in all our actions.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Responsibility",
      description:
        "We take ownership of our actions and their impact on our community.",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace creative thinking and continuous improvement.",
      color: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community",
      description:
        "We build strong relationships and support one another's growth.",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto"
      >
        {/* Page Header */}
        <motion.div variants={item} className="text-center mb-16">
          <motion.h1
            variants={scaleUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Our Vision & Mission
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            At Bright Future Academy, our direction is guided by purpose,
            values, and a deep commitment to shaping the next generation.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.section variants={item} className="mb-20">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <div className="p-1 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="bg-white p-8 rounded-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                      <FiTarget className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To be a leading basic school in Ghana that nurtures students
                    into confident, responsible, and successful citizens through
                    academic excellence and moral values.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <div className="p-1 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600">
                <div className="bg-white p-8 rounded-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-pink-100 text-pink-600 mr-4">
                      <FiAward className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To provide quality and inclusive basic education in a safe,
                    supportive, and engaging environment where every child can
                    thrive academically, morally, and socially.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section variants={item} className="mb-20">
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card bg-white shadow-xl overflow-hidden"
              >
                <div className={`${value.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-full ${value.color.replace(
                        "bg-gradient-to-br",
                        "bg"
                      )} text-white mr-4`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={item} className="text-center">
          <motion.div
            variants={fadeIn}
            className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Building Bright Futures Together
            </h2>
            <p className="text-xl text-indigo-100 mb-6">
              At Bright Future Academy, we don't just teach — we build futures.
              Join us on this journey.
            </p>
            <motion.a
              href="/admissions"
              className="btn btn-lg btn-accent text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Your Child
            </motion.a>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default VisionMissionPage;
