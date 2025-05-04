"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const formItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
    hover: { scale: 1.02 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-purple-50">
      {/* 1. Vibrant Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          className="w-24 h-2 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Let's Connect!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for inquiries, admissions, or to
          schedule a colorful school tour.
        </p>
      </motion.div>

      {/* 2. Colorful Contact Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {/* Address Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200 hover:border-pink-300 transition-colors"
        >
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 text-white">
            <FiMapPin className="h-8 w-8" />
            <h3 className="text-xl font-bold mt-2">Our Location</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              <span className="font-semibold text-pink-600">
                Hanvil Academy
              </span>
              <br />
              Off Accra-Kumasi Road
              <br />
              Tema, Ghana
            </p>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-blue-300 transition-colors"
        >
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 text-white">
            <FiPhone className="h-8 w-8" />
            <h3 className="text-xl font-bold mt-2">Call Us</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Main Office:</span>{" "}
              +233 24 000 0000
              <br />
              <span className="font-semibold text-blue-600">
                Admissions:
              </span>{" "}
              +233 24 000 0001
              <br />
              <span className="font-semibold text-blue-600">
                Emergency:
              </span>{" "}
              +233 24 000 0002
            </p>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200 hover:border-purple-300 transition-colors"
        >
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 text-white">
            <FiMail className="h-8 w-8" />
            <h3 className="text-xl font-bold mt-2">Email Us</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              <span className="font-semibold text-purple-600">
                General Inquiries:
              </span>
              <br />
              info@Hanvil.edu.gh
              <br />
              <br />
              <span className="font-semibold text-purple-600">Admissions:</span>
              <br />
              admissions@Hanvil.edu.gh
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Animated Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white flex flex-col justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="text-center"
              >
                <FiMessageSquare className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                <p className="text-purple-100">
                  Have questions? Our team is ready to help you with any
                  inquiries about admissions, programs, or school visits.
                </p>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-8">
              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.div variants={formItem}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300"
                    required
                  />
                </motion.div>

                <motion.div variants={formItem}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300"
                    required
                  />
                </motion.div>

                <motion.div variants={formItem}>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300"
                    required
                  />
                </motion.div>

                <motion.div variants={formItem}>
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300"
                    rows="5"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white hover:from-purple-600 hover:to-pink-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FiSend className="ml-2" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Interactive Map */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Find Us on the Map
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755238724263!2d-0.02050392468691506!3d5.603732794393038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x6d9f3a9b4ef7c4b9!2sTema%2C%20Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* 5. Colorful Opening Hours */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 max-w-2xl mx-auto text-white shadow-xl"
      >
        <div className="flex items-center justify-center mb-6">
          <FiClock className="h-10 w-10 mr-4" />
          <h2 className="text-3xl font-bold">Office Hours</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">Weekdays</h3>
            <p>8:00 AM – 4:00 PM</p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">Saturday</h3>
            <p>9:00 AM – 1:00 PM</p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm md:col-span-2">
            <h3 className="font-bold text-xl mb-2">Sunday</h3>
            <p>Closed</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
