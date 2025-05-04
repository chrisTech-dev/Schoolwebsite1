"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiInfo,
  FiCheck,
  FiFileText,
  FiCalendar,
  FiUser,
  FiBook,
  FiAward,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

export default function AdmissionsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const pulse = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px 5px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Admissions at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Hanvil Academy
          </span>
        </motion.h1>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* 1. Intro Message */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/5 to-purple-100/30 p-8 md:p-10 rounded-2xl border border-primary/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-xl"></div>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-6"
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Welcome Future Families
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We're excited that you're considering Hanvil Academy for your
            child's education. Our admissions process is simple, transparent,
            and designed to help every child find their perfect learning
            environment.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10 max-w-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <FiInfo className="h-6 w-6" />
            </div>
            <p className="text-gray-600 font-medium">
              Applications for the 2024-2025 academic year are now being
              accepted.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Who Can Apply */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          variants={itemVariants}
        >
          Who Can Apply
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kindergarten */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="card bg-white shadow-xl hover:shadow-2xl border border-gray-100"
          >
            <div className="card-body">
              <motion.div
                className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-2xl mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                🧒
              </motion.div>
              <h3 className="card-title text-2xl mb-2">Kindergarten</h3>
              <div className="badge badge-primary mb-4">Ages 3–5</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Must be fully toilet trained</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Birth certificate required</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Primary */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="card bg-white shadow-xl hover:shadow-2xl border border-gray-100"
          >
            <div className="card-body">
              <motion.div
                className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                👦
              </motion.div>
              <h3 className="card-title text-2xl mb-2">Primary School</h3>
              <div className="badge badge-primary mb-4">Ages 6–11</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Grade 1: Must be 6 by September</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Previous school records required for transfers</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* JHS */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="card bg-white shadow-xl hover:shadow-2xl border border-gray-100"
          >
            <div className="card-body">
              <motion.div
                className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                👩‍🎓
              </motion.div>
              <h3 className="card-title text-2xl mb-2">Junior High</h3>
              <div className="badge badge-primary mb-4">Ages 12–15</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Entrance assessment required</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Full academic records needed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. How to Apply */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 bg-gradient-to-br from-primary/5 to-purple-100/30 rounded-2xl p-8 md:p-10 border border-primary/20"
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-6 text-center"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          How to Apply
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <ol className="space-y-6">
              {[
                {
                  icon: <FiFileText />,
                  step: "1",
                  title: "Submit Application",
                  desc: "Complete our online form or visit the admissions office",
                },
                {
                  icon: <FiBook />,
                  step: "2",
                  title: "Assessment",
                  desc: "Age-appropriate evaluation (for certain grade levels)",
                },
                {
                  icon: <FiAward />,
                  step: "3",
                  title: "Admission Decision",
                  desc: "Notification within 2 weeks of assessment",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-4 bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-gray-200"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                      <span className="text-primary">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
          <motion.div
            className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <FiFileText className="text-primary" />
              Required Documents
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Birth certificate (photocopy)",
                "2 passport photos",
                "Previous school records (if applicable)",
                "Medical immunization records",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <FiCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-6"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Apply?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Begin your child's journey at Hanvil Academy today
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() =>
              window.open("https://forms.gle/hpVpq5V2J1WZ3uLJ9", "_blank")
            }
            className="btn btn-primary btn-lg px-8 flex items-center"
            variants={pulse}
            whileHover="hover"
            whileTap="tap"
          >
            Start Application <FiArrowRight className="ml-2" />
          </motion.button>

          <Link href="/contact">
            <motion.button
              className="btn btn-outline btn-lg border-emerald-500 text-primary hover:bg-emerald-400 hover:text-white flex items-center"
              variants={pulse}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Admissions <FiMail className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* 6. Fee Information */}
      <motion.section
        className="mb-16 mt-20 bg-gradient-to-br from-primary/5 to-purple-100/30 rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Floating decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-purple-500/10 blur-xl"></div>

        <div className="relative z-10">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Fee Information
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm max-w-md text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <div className="text-5xl mb-2">💲</div>
              <p className="text-lg text-gray-700 mb-4">
                Our fees are affordable and vary by level. We offer flexible
                payment plans and sibling discounts.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://wa.me/233205393283?text=Hello!%20I%27m%20interested%20in%20your%20school",
                      "_blank"
                    )
                  }
                  className="btn btn-success"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px 2px rgba(74, 222, 128, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat on WhatsApp
                </motion.button>

                <motion.a
                  href="tel:+1234567890"
                  className="btn btn-outline"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Our Office
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              initial={{ rotate: -2 }}
              whileInView={{ rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <FiInfo className="h-6 w-6" />
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-primary">Note:</span> Fees
                  include tuition, textbooks, and basic materials. Uniforms and
                  extracurricular activities may have additional costs.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
