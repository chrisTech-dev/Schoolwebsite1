"use client";

import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge badge-primary badge-lg text-white gap-2">
              <FaHeart /> Since 1995
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Educating <span className="text-primary">Tomorrow's Leaders</span>{" "}
              Today
            </h2>

            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                Founded in 1995, Hanvil Academy has been a cornerstone of
                academic excellence and character development in our community.
              </p>
              <p className="leading-relaxed">
                Our student-centered approach combines innovative teaching
                methods with time-tested educational values to prepare children
                for success in an ever-changing world.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/learn">

              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
                </Link>
                
              <Link href="/staff">
            <button
                className="btn btn-outline btn-lg 
                  border-emerald-500 text-emerald-600 
                  hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                  hover:shadow-md hover:shadow-emerald-100
                  active:bg-emerald-700 active:border-emerald-700
                  transition-all duration-300 ease-in-out 
                  group"
              >
                Meet Our Staff
                <FaChalkboardTeacher className="ml-2 group-hover:text-emerald-100 transition-colors" />
              </button>
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-box overflow-hidden shadow-2xl aspect-video w-full hover:shadow-primary/30 transition-shadow duration-500">
              <Image
                src="/pic46.jpg"
                alt="Students in classroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Stats Badge with Animation */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-primary text-white p-4 md:p-6 rounded-box shadow-lg w-40 md:w-48 hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">25+</p>
                <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
                  Years of Excellence
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid - Responsive */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaGraduationCap size={32} />,
              value: "98%",
              label: "Graduation Rate",
            },
            {
              icon: <FaChalkboardTeacher size={32} />,
              value: "50+",
              label: "Qualified Staff",
            },
            {
              icon: <FaUsers size={32} />,
              value: "10:1",
              label: "Student Ratio",
            },
            {
              icon: <FaHeart size={32} />,
              value: "100%",
              label: "Satisfaction",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 hover:bg-base-300 transition-colors duration-300 p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-2 mx-auto">{stat.icon}</div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
