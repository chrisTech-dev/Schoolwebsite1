"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10 opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-white mix-blend-overlay"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-white mix-blend-overlay"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-yellow-300">Join Our</span> School
            Family?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Take the first step toward exceptional education. We're currently
            accepting applications for the 2024-2025 academic year.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
           <a href="https://forms.gle/hpVpq5V2J1WZ3uLJ9" >
            <button className="btn btn-lg btn-accent hover:scale-105 transform transition-all duration-300 shadow-lg">
              Apply Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            </a>

            <button className="btn btn-lg btn-outline btn-white hover:bg-white hover:text-primary transition-colors duration-300">
              Schedule a Tour
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Supporting Information */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 8.707a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Limited seats available</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Application deadline: June 30</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
              <span>Financial aid available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
