"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChalkboardTeacher,
  FaBuilding,
  FaBookOpen,
  FaUsers,
  FaBolt,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const strengths = [
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Certified Teachers",
      description:
        "All faculty hold advanced degrees and teaching certifications",
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Safe Environment",
      description: "24/7 security and child protection policies",
      color: "bg-gradient-to-br from-green-500 to-emerald-400",
    },
    {
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms and labs",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-400",
    },
    {
      icon: <FaBookOpen className="w-6 h-6" />,
      title: "Proven Curriculum",
      description: "95% transition rate to top high schools",
      color: "bg-gradient-to-br from-amber-500 to-yellow-400",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Inclusive Community",
      description: "Diverse student body with anti-bullying programs",
      color: "bg-gradient-to-br from-teal-500 to-sky-400",
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "After-School Programs",
      description: "30+ clubs and athletic teams",
      color: "bg-gradient-to-br from-red-500 to-pink-400",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Rainbow Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            <span className="relative z-10">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Families Love Us
              </span>
            </span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The joyful difference in your child's educational journey
          </motion.p>
        </motion.div>

        {/* Colorful Strengths Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strengths.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden"
            >
              <div
                className={`h-full p-8 rounded-2xl text-white ${itemData.color} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110">
                  {itemData.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{itemData.title}</h3>
                <p className="opacity-90">{itemData.description}</p>

                {/* Floating bubbles */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 group-hover:opacity-30 transition-all duration-700"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10 group-hover:opacity-30 transition-all duration-500 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vibrant Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex mb-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white shadow-md"
                      ></motion.div>
                    ))}
                  </div>
                </div>

                <motion.p
                  className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  "The creativity and care at this school transformed our
                  child's learning experience!"
                </motion.p>

                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      value: "98%",
                      label: "Happy Parents",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      value: "25+",
                      label: "Years of Joy",
                      color: "from-purple-400 to-fuchsia-400",
                    },
                    {
                      value: "1:10",
                      label: "Personal Attention",
                      color: "from-amber-400 to-yellow-400",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-6 py-4 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}
                    >
                      <p className="text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm uppercase tracking-wider opacity-90">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
