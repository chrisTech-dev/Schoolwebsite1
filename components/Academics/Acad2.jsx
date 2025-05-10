"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiCheckCircle, FiBook, FiAward } from "react-icons/fi";

export default function SubjectsOffered() {
  const [activeTab, setActiveTab] = useState("primary");

  const subjects = {
    primary: [
      { name: "English Language", core: true },
      { name: "Mathematics", core: true },
      { name: "Science", core: true },
      { name: "ICT", core: true },
      { name: "Social Studies", core: true },
      { name: "Religious & Moral Education", core: true },
      { name: "French", core: false },
      { name: "Creative Arts", core: true },
      { name: "Physical Education", core: false },
    ],
    jhs: [
      { name: "English Language", core: true },
      { name: "Mathematics", core: true },
      { name: "Integrated Science", core: true },
      { name: "ICT", core: true },
      { name: "Social Studies", core: true },
      { name: "Religious & Moral Education", core: true },
      { name: "French", core: false },
      { name: "Creative Arts & Design", core: true },
      { name: "Career Technology", core: true },
      { name: "Ghanaian Language", core: true },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Our <span className="text-primary">Curriculum</span>
          </h2>
          <div className="divider w-20 mx-auto dark:before:bg-gray-700 dark:after:bg-gray-700"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive subjects designed to develop well-rounded students
          </p>
        </motion.div>

        {/* Tabs for Primary/JHS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="tabs tabs-boxed bg-base-200 dark:bg-gray-700 max-w-md mx-auto shadow-lg">
            <button
              className={`tab tab-lg font-medium ${
                activeTab === "primary"
                  ? "tab-active bg-primary text-primary-content"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("primary")}
            >
              <FiBook className="mr-2" />
              Primary School
            </button>
            <button
              className={`tab tab-lg font-medium ${
                activeTab === "jhs"
                  ? "tab-active bg-secondary text-secondary-content"
                  : "dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("jhs")}
            >
              <FiAward className="mr-2" />
              Junior High
            </button>
          </div>
        </motion.div>

        {/* Subjects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subjects[activeTab].map((subject, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`card ${
                  subject.core
                    ? "bg-base-100 dark:bg-gray-800 border-l-4 border-primary"
                    : "bg-base-200 dark:bg-gray-700 border-l-4 border-secondary"
                } shadow-md hover:shadow-xl transition-all`}
              >
                <div className="card-body p-6 flex flex-row items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      subject.core
                        ? "bg-primary text-primary-content"
                        : "bg-secondary text-secondary-content"
                    } flex items-center justify-center mr-4 shadow-md`}
                  >
                    {subject.core ? (
                      <FiCheckCircle className="h-6 w-6" />
                    ) : (
                      <FiCheck className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="card-title text-lg font-semibold dark:text-white">
                      {subject.name}
                    </h4>
                    <p className="text-sm opacity-70 dark:text-gray-300">
                      {subject.core ? "Core Subject" : "Elective Subject"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Curriculum Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <div className="alert alert-info shadow-lg dark:bg-gray-700 dark:text-gray-300">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Our curriculum follows the Ghana Education Service guidelines
                with enhancements in STEM and creative arts. French is optional
                for all levels.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
