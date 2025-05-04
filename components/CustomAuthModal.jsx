// // components/CustomAuthModal.js
// "use client";
// import { SignIn } from "@clerk/nextjs";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CustomAuthModal({ show, onClose }) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="bg-base-100 rounded-xl overflow-hidden shadow-xl w-full max-w-md"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-1 bg-gradient-to-r from-primary to-accent">
//               <div className="bg-base-100 p-6 rounded-t-lg">
//                 <SignIn
//                   appearance={{
//                     elements: {
//                       rootBox: "w-full",
//                       card: "shadow-none bg-transparent w-full",
//                       headerTitle: "text-2xl font-bold text-neutral",
//                       headerSubtitle: "text-neutral-content",
//                       socialButtonsBlockButton:
//                         "border-neutral hover:bg-base-200",
//                       socialButtonsBlockButtonText: "text-neutral-content",
//                       dividerLine: "bg-neutral",
//                       dividerText: "text-neutral-content",
//                       formFieldLabel: "text-neutral-content",
//                       formButtonPrimary:
//                         "bg-gradient-to-r from-primary to-accent hover:opacity-90",
//                       footerActionText: "text-neutral-content",
//                       footerActionLink: "text-accent hover:text-primary",
//                     },
//                   }}
//                   afterSignInUrl="/announcements"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
