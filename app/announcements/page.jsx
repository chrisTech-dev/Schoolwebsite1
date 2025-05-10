"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiBook,
  FiBell,
  FiHome,
  FiAward,
  FiUsers,
  FiDownload,
} from "react-icons/fi";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";


export default function AnnouncementsContent() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  // Removed the undefined useUser() hook and related variables
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return <LoadingSpinner />; // or a loading spinner
  }

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  // Announcements data
  const announcements = [
    {
      id: 1,
      title: "Term 3 Begins – May 6, 2025",
      date: "2025-05-06",
      description:
        "All students are to report by 7:30 AM in full uniform. Let's start strong!",
      type: "academic",
      icon: <FiCalendar className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
      attachment: "/term3-circular.pdf",
    },
    {
      id: 2,
      title: "BECE Mock Exams – June 10, 2025",
      date: "2025-06-10",
      description:
        "Final-year students will begin their third mock exams. Parents are advised to support preparation at home.",
      type: "academic",
      icon: <FiBook className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
      important: true,
    },
    {
      id: 3,
      title: "PTA Meeting – May 15, 2025",
      date: "2025-05-15",
      description:
        "All parents are invited to our quarterly PTA meeting at 3:00 PM in the school hall.",
      type: "pta",
      icon: <FiUsers className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "School Excursion to Cape Coast",
      date: "2025-05-25",
      description:
        "Forms 1 and 2 will visit Cape Coast Castle and Kakum National Park. Permission slips due by May 18.",
      type: "event",
      icon: <FiHome className="w-5 h-5" />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      title: "Admissions Open for 2025/2026",
      date: "2025-04-01",
      description:
        "We are now accepting applications for the 2025/2026 academic year. Limited spaces available.",
      type: "admissions",
      icon: <FiAward className="w-5 h-5" />,
      color: "bg-amber-100 text-amber-600",
      important: true,
    },
    {
      id: 6,
      title: "Inter-School Sports Competition",
      date: "2025-06-20",
      description:
        "Our school will host the annual inter-school sports competition. Volunteers needed.",
      type: "event",
      icon: <FiHome className="w-5 h-5" />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 7,
      title: "Mid-Term Break – May 30 to June 3",
      date: "2025-05-30",
      description:
        "School will be closed for mid-term break. Classes resume June 4.",
      type: "academic",
      icon: <FiCalendar className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  // Filter logic
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesFilter =
      activeFilter === "all" || announcement.type === activeFilter;
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Announcement types for filter buttons
  const announcementTypes = [
    {
      id: "all",
      name: "All Announcements",
      icon: <FiBell className="w-4 h-4" />,
    },
    { id: "academic", name: "Academic", icon: <FiBook className="w-4 h-4" /> },
    { id: "pta", name: "PTA", icon: <FiUsers className="w-4 h-4" /> },
    { id: "event", name: "Events", icon: <FiHome className="w-4 h-4" /> },
    {
      id: "admissions",
      name: "Admissions",
      icon: <FiAward className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto"
      >
        {/* Page Header with Sign Out Button */}
        <motion.div variants={item} className="text-center mb-12 relative">
          <motion.h1
            variants={scaleUp}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Latest Announcements
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Stay up to date with the latest news, events, and important updates
            from our school.
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={item} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search announcements..."
                className="input input-bordered w-full pl-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-3 text-gray-400 dark:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {announcementTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn btn-sm ${
                    activeFilter === type.id
                      ? "btn-primary"
                      : "btn-ghost dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveFilter(type.id)}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Announcements List */}
        <motion.div variants={container} className="space-y-6">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => (
              <motion.div
                key={announcement.id}
                variants={item}
                whileHover={{ y: -3 }}
                className={`card shadow-lg dark:bg-gray-800 dark:border-gray-700 ${
                  announcement.important
                    ? "border-l-4 border-yellow-400 dark:border-yellow-500"
                    : ""
                }`}
              >
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-lg ${announcement.color} mr-4`}
                      >
                        {announcement.icon}
                      </div>
                      <div>
                        <h2 className="card-title text-lg md:text-xl dark:text-white">
                          {announcement.title}
                          {announcement.important && (
                            <div className="badge badge-warning ml-2 dark:bg-yellow-600 dark:text-white">
                              Important
                            </div>
                          )}
                        </h2>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {new Date(announcement.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {announcement.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {announcement.attachment && (
                    <div className="card-actions justify-end mt-4">
                      <motion.a
                        href={announcement.attachment}
                        className="btn btn-sm btn-outline dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiDownload className="mr-2" />
                        Download Circular
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div variants={fadeIn} className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                No announcements found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Need help or have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Contact the school office for more information about any
              announcements.
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}