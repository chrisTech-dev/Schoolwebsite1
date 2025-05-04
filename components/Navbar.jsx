"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;

  // Custom Clerk modal appearance
  const appearance = {
    elements: {
      rootBox: "w-full",
      card: "bg-white rounded-lg shadow-xl border border-gray-200",
      headerTitle: "text-blue-600 font-bold",
      headerSubtitle: "text-gray-600",
      socialButtonsBlockButton: "border-gray-300 hover:bg-gray-50",
      formFieldInput:
        "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
      formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
      footerActionLink: "text-blue-600 hover:text-blue-800",
    },
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/academics", name: "Academics" },
    { path: "/admissions", name: "Admissions" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact Us" },
  ];

  const aboutLinks = [
    { path: "/mission-vision", name: "Mission & Vision" },
    { path: "/achievement", name: "Achievements" },
    { path: "/announcements", name: "Announcements", protected: true },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/pic45.jpg"
                width={50}
                height={50}
                alt="school badge"
                className="rounded-full border-2 border-white"
              />
              <span className="text-white font-bold text-xl hidden sm:block">
                Hanvil Academy
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  aboutDropdownOpen ||
                  aboutLinks.some((link) => isActive(link.path))
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                About Us
                <motion.span
                  animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                  className="ml-1"
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl z-50"
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {aboutLinks.map((link) =>
                        link.protected && !isSignedIn ? (
                          <SignInButton
                            key={link.path}
                            mode="modal"
                            appearance={appearance}
                            afterSignInUrl={link.path}
                          >
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                              {link.name}
                            </button>
                          </SignInButton>
                        ) : (
                          <Link
                            key={link.path}
                            href={link.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Button for Desktop */}
            {isSignedIn && (
              <div className="ml-2">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                    },
                  }}
                />
              </div>
            )}
          </nav>

          {/* Mobile Menu Button and User Button */}
          <div className="md:hidden flex items-center">
            {isSignedIn && (
              <div className="mr-3">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                    },
                  }}
                />
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
              aria-label="Main menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-xl"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile About Dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium ${
                    aboutDropdownOpen ||
                    aboutLinks.some((link) => isActive(link.path))
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  About Us
                  <motion.span
                    animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-1 space-y-1"
                    >
                      {aboutLinks.map((link) =>
                        link.protected && !isSignedIn ? (
                          <SignInButton
                            key={link.path}
                            mode="modal"
                            appearance={appearance}
                            afterSignInUrl={link.path}
                          >
                            <button
                              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setAboutDropdownOpen(false);
                              }}
                            >
                              {link.name}
                            </button>
                          </SignInButton>
                        ) : (
                          <Link
                            key={link.path}
                            href={link.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setAboutDropdownOpen(false);
                            }}
                          >
                            {link.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
