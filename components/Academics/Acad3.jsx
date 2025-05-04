"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiCalendar,
  FiAward,
  FiBook,
  FiBarChart2,
  FiMail,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

export default function ExamsAndCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.03,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.4)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      {/* Exams & Assessments Section */}
      <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <div className="bg-primary/10 text-primary p-4 rounded-xl inline-flex">
                <FiStar className="h-10 w-10" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-primary">Assessment</span> Approach
            </h2>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mt-8">
              Measuring progress and ensuring{" "}
              <span className="font-semibold text-primary">
                academic excellence
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Primary School Assessments */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="card bg-white shadow-xl border border-gray-100 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card-body p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="bg-primary/10 text-primary p-4 rounded-xl"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <FiBook className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-primary">
                    Primary School
                  </h3>
                </div>
                <ul className="space-y-5">
                  {[
                    {
                      icon: <FiCalendar />,
                      title: "Weekly Class Tests",
                      desc: "Short assessments to monitor understanding of current topics",
                    },
                    {
                      icon: <FiBarChart2 />,
                      title: "Mid-Term Exams",
                      desc: "Comprehensive tests covering first half of term's work",
                    },
                    {
                      icon: <FiAward />,
                      title: "End-of-Term Exams",
                      desc: "Full assessment of all topics covered during the term",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 border border-gray-100"
                    >
                      <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* JHS Assessments */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="card bg-white shadow-xl border border-gray-100 hover:border-secondary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card-body p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="bg-secondary/10 text-secondary p-4 rounded-xl"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <FiAward className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-secondary">
                    Junior High School
                  </h3>
                </div>
                <ul className="space-y-5">
                  {[
                    {
                      icon: <FiCheckCircle />,
                      title: "Continuous Assessment",
                      desc: "Regular tests, projects, and class participation",
                    },
                    {
                      icon: <FiBarChart2 />,
                      title: "Terminal Exams",
                      desc: "Mid-term and end-of-term comprehensive examinations",
                    },
                    {
                      icon: <FiAward />,
                      title: "BECE Preparation",
                      desc: "Specialized training and mock exams for final year students",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-secondary/5 border border-gray-100"
                    >
                      <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <motion.div
                className="bg-primary/10 text-primary p-5 rounded-xl"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <FiBarChart2 className="h-10 w-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Comprehensive Progress Reporting
                </h3>
                <p className="text-gray-600 text-lg">
                  Parents receive{" "}
                  <span className="font-semibold text-primary">
                    detailed reports
                  </span>{" "}
                  after each assessment period, with opportunities for{" "}
                  <span className="font-semibold">teacher consultations</span>{" "}
                  to discuss student progress and growth areas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Begin Your Child's{" "}
            <span className="text-yellow-300">Educational Journey</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-yellow-300 mx-auto rounded-full mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how our{" "}
            <span className="font-semibold text-yellow-300">
              innovative assessment approach
            </span>
            ensures academic growth and success for every student
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.a
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              href="/admissions"
              className="btn btn-warning btn-lg min-w-[200px] text-lg shadow-lg hover:shadow-xl text-gray-900"
            >
              Explore Admissions
              <FiArrowRight className="h-5 w-5 ml-2" />
            </motion.a>
            <motion.a
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              href="/contact"
              className="btn btn-outline btn-lg min-w-[200px] text-lg text-white border-white hover:bg-white hover:text-primary hover:border-white"
            >
              Contact Us
              <FiMail className="h-5 w-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
