"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiBook,
  FiUsers,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const staffMembers = [
  {
    id: 1,
    name: "Mr. John Mensah",
    role: "Math Teacher",
    bio: "Passionate about helping students master numbers through real-world applications.",
    category: "teachers",
    img: "/pic72.png",
    width: 400,
    height: 500,
  },
  {
    id: 2,
    name: "Mrs. Ama Ansah",
    role: "Headmistress",
    bio: "Dedicated to creating an environment where every child can thrive.",
    category: "management",
    img: "/pic76.png",
    width: 400,
    height: 500,
  },
  {
    id: 3,
    name: "Mr. Kwame Osei",
    role: "Science Teacher",
    bio: "Brings science to life with exciting experiments and demonstrations.",
    category: "teachers",
    img: "/pic74.png",
    width: 400,
    height: 500,
  },
  {
    id: 4,
    name: "Ms. Efua Boateng",
    role: "English Teacher",
    bio: "Fosters a love for literature and creative expression.",
    category: "teachers",
    img: "/pic79.png",
    width: 400,
    height: 500,
  },
  {
    id: 5,
    name: "Mr. David Asare",
    role: "Administrator",
    bio: "Ensures smooth operations so teachers can focus on teaching.",
    category: "non-teaching",
    img: "/pic73.png",
    width: 400,
    height: 500,
  },
  {
    id: 6,
    name: "Mrs. Yaa Nyarko",
    role: "ICT Teacher",
    bio: "Prepares students for the digital future with hands-on tech skills.",
    category: "teachers",
    img: "/pic77.png",
    width: 400,
    height: 500,
  },
];

export default function StaffPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredStaff =
    activeCategory === "all"
      ? staffMembers
      : staffMembers.filter((member) => member.category === activeCategory);

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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const filterItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Meet Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Dedicated Staff
          </span>
        </motion.h1>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          At Bright Future Academy, we're proud of our team who guide and
          inspire our students every day.
        </motion.p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          {
            value: "all",
            label: "All Staff",
            icon: <FiUsers className="mr-2" />,
          },
          {
            value: "management",
            label: "Management",
            icon: <FiAward className="mr-2" />,
          },
          {
            value: "teachers",
            label: "Teachers",
            icon: <FiBook className="mr-2" />,
          },
          {
            value: "non-teaching",
            label: "Support Staff",
            icon: <FiHeart className="mr-2" />,
          },
        ].map((category) => (
          <motion.button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`btn btn-sm ${
              activeCategory === category.value ? "btn-primary" : "btn-ghost"
            } transition-all`}
            variants={filterItem}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            {category.icon}
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Staff Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredStaff.map((member) => (
          <motion.div
            key={member.id}
            variants={item}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(member.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative group"
          >
            <figure className="relative h-60 overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                width={member.width}
                height={member.height}
                className="w-[210px] h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority={member.id <= 2} // Prioritize first two images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              {hoveredCard === member.id && (
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </figure>
            <div className="card-body text-center p-6">
              <motion.h2
                className="text-xl font-bold"
                whileHover={{ color: "#4f46e5" }} // Change to your primary color
              >
                {member.name}
              </motion.h2>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <motion.button
                className="btn btn-ghost btn-sm text-primary inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                View Profile <FiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">
          Interested in Joining Our Team?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate educators to join our community.
        </p>
        <motion.a
          href="/careers"
          className="btn btn-primary px-8 inline-flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(79, 70, 229, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Open Positions <FiArrowRight />
        </motion.a>
      </motion.div>
    </div>
  );
}
