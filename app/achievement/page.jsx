"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiBook,
  FiUsers,
  FiStar,
  FiTrendingUp,
  FiAward as FiAwardDuplicate, // Removing duplicate import
  // FiTrophy doesn't exist in react-icons/fi, using FiAward instead for trophy
} from "react-icons/fi";

const AchievementsPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const achievements = {
    academic: [
      {
        icon: <FiAward className="w-6 h-6" />,
        title: "2024 – Best Basic School in Tema by GES",
        highlight: true,
      },
      {
        icon: <FiBook className="w-6 h-6" />,
        title: "2023 – 98% Distinction in BECE results",
        highlight: true,
      },
      {
        icon: <FiStar className="w-6 h-6" />,
        title: "5 consecutive years of 100% BECE pass rate (2019-2023)",
      },
      {
        icon: <FiUsers className="w-6 h-6" />,
        title: "85% of 2023 graduates admitted to top-tier senior high schools",
      },
      {
        icon: <FiAward className="w-6 h-6" />,
        title:
          "Top Student: Ama Serwaa – National Science Quiz for Juniors (2022)",
      },
    ],
    extracurricular: [
      {
        icon: <FiAward className="w-6 h-6" />,
        title: "2022 – Champions, Inter-School Football Tournament",
        highlight: true,
      },
      {
        icon: <FiBook className="w-6 h-6" />,
        title: "2023 – Debate Champions, Greater Accra Junior League",
      },
      {
        icon: <FiAward className="w-6 h-6" />,
        title: "2023 – 1st Place, Regional Cultural Dance Competition",
      },
      {
        icon: <FiAward className="w-6 h-6" />,
        title: "2024 – Robotics Club won National Junior Innovation Award",
      },
    ],
    milestones: [
      {
        icon: <FiTrendingUp className="w-6 h-6" />,
        title: "2021 – Opened new science & ICT lab with 30 computers",
        highlight: true,
      },
      {
        icon: <FiUsers className="w-6 h-6" />,
        title: "2023 – Student population grew to 400+",
      },
      {
        icon: <FiTrendingUp className="w-6 h-6" />,
        title: "2022 – Established partnership with Ghana STEM Academy",
      },
      {
        icon: <FiTrendingUp className="w-6 h-6" />,
        title:
          "2024 – Launched community literacy program serving 200+ children",
      },
    ],
    alumni: [
      {
        name: "Kwame Aboagye",
        year: "Class of 2018",
        achievement:
          "Studying Engineering at KNUST after excelling in SHS and national competitions",
        image: "/placeholder-alumni.jpg",
      },
      {
        name: "Esi Mensah",
        year: "Class of 2019",
        achievement:
          "Awarded full scholarship to Wesley Girls' High School, now studying Medicine",
        image: "/placeholder-alumni.jpg",
      },
      {
        name: "Yaw Boateng",
        year: "Class of 2020",
        achievement:
          "Represented Ghana at International Math Olympiad, now at Mfantsipim School",
        image: "/placeholder-alumni.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={item} className="text-center mb-16">
          <motion.h1
            variants={scaleUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Our Achievements
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            We celebrate our growth, our learners' excellence, and the
            dedication of our staff. These milestones reflect our ongoing
            commitment to academic and moral excellence.
          </motion.p>
        </motion.div>

        {["academic", "extracurricular", "milestones"].map((section, idx) => {
          // Define section-specific properties without dynamic string interpolation
          let sectionIcon;
          let sectionTitle;
          let bgColorClass;
          let textColorClass;
          let borderColorClass;
          let gradientFromClass;

          if (section === "academic") {
            sectionIcon = <FiBook className="w-8 h-8" />;
            sectionTitle = "Academic Achievements";
            bgColorClass = "bg-blue-100";
            textColorClass = "text-blue-600";
            borderColorClass = "border-blue-500";
            gradientFromClass = "from-blue-50";
          } else if (section === "extracurricular") {
            sectionIcon = <FiAward className="w-8 h-8" />; // Using FiAward instead of FiTrophy
            sectionTitle = "Extracurricular Achievements";
            bgColorClass = "bg-green-100";
            textColorClass = "text-green-600";
            borderColorClass = "border-green-500";
            gradientFromClass = "from-green-50";
          } else if (section === "milestones") {
            sectionIcon = <FiTrendingUp className="w-8 h-8" />;
            sectionTitle = "School Milestones";
            bgColorClass = "bg-purple-100";
            textColorClass = "text-purple-600";
            borderColorClass = "border-purple-500";
            gradientFromClass = "from-purple-50";
          }

          return (
            <motion.section key={idx} variants={item} className="mb-16">
              <motion.div variants={fadeIn} className="flex items-center mb-8">
                <div
                  className={`p-3 rounded-lg ${bgColorClass} ${textColorClass} mr-4`}
                >
                  {sectionIcon}
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {sectionTitle}
                </h2>
              </motion.div>

              <motion.ul
                variants={container}
                className="grid md:grid-cols-2 gap-4"
              >
                {achievements[section].map((entry, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    whileHover={{ x: 5 }}
                    className={`p-4 rounded-lg ${
                      entry.highlight
                        ? `bg-gradient-to-r ${gradientFromClass} to-indigo-50 border-l-4 ${borderColorClass}`
                        : "bg-white"
                    } shadow-sm`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-full ${
                          entry.highlight
                            ? `${bgColorClass} ${textColorClass}`
                            : "bg-gray-100 text-gray-600"
                        } mr-3`}
                      >
                        {entry.icon}
                      </div>
                      <span
                        className={`${
                          entry.highlight ? "font-semibold" : "font-medium"
                        } text-gray-700`}
                      >
                        {entry.title}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          );
        })}

        <motion.section variants={item} className="mb-16">
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-amber-100 text-amber-600 mr-4">
              <FiUsers className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Alumni Success Stories
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            className="grid md:grid-cols-3 gap-6"
          >
            {achievements.alumni.map((alum, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="card bg-white shadow-lg overflow-hidden rounded-xl"
              >
                <div className="h-40 bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-amber-600 text-4xl font-bold">
                    {alum.name.charAt(0)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {alum.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{alum.year}</p>
                  <p className="text-gray-700 text-sm">{alum.achievement}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AchievementsPage;
