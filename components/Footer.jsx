"use client";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
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
  };

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* 1. School Name & Tagline */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold mb-2">Hanvil Academy</h2>
            <p className="text-blue-100">Shaping tomorrow's leaders, today.</p>
            <div className="flex gap-4 mt-4">
              {[
                { icon: <FaFacebook className="text-xl" />, label: "Facebook" },
                {
                  icon: <FaInstagram className="text-xl" />,
                  label: "Instagram",
                },
                { icon: <FaWhatsapp className="text-xl" />, label: "WhatsApp" },
                { icon: <FaTwitter className="text-xl" />, label: "Twitter" },
                { icon: <FaYoutube className="text-xl" />, label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="hover:text-blue-300 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about" },
                { text: "Academics", href: "/academics" },
                { text: "Admissions", href: "/admissions" },
                { text: "Gallery", href: "/gallery" },
                { text: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Academics */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              {[
                { text: "Kindergarten", href: "/kindergarten" },
                { text: "Primary School", href: "/primary" },
                { text: "Junior High", href: "/jhs" },
                { text: "Curriculum", href: "/curriculum" },
                { text: "Our Faculty", href: "/faculty" },
                { text: "School Calendar", href: "/calendar" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mt-0.5 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-blue-100">
                  123 Education Avenue
                  <br />
                  Tema, Ghana
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+233240000000"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  +233 24 000 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@brightfuture.edu.gh"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  info@brightfuture.edu.gh
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-100">
                  Mon-Fri: 7:30 AM - 4:30 PM
                </span>
              </div>
            </address>
          </motion.div>
        </motion.div>

        {/* 5. Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-blue-500/30 mt-10 pt-6 text-center"
        >
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Hanvil Academy. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-blue-300">
            {[
              { text: "Privacy Policy", href: "/privacy" },
              { text: "Terms of Service", href: "/terms" },
              { text: "Sitemap", href: "/sitemap" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
