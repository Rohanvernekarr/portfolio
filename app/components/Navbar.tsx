import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full bg-zinc-900/80 backdrop-blur-md shadow-lg z-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex items-center group">
            <Mail className="h-4 w-4 md:h-5 md:w-5  text-gray-200 group-hover:text-blue-400 transition-colors duration-300" />
            <a
              className="flex items-center ml-2 font-mono text-gray-200 text-sm md:text-2xl hover:text-blue-400 cursor-pointer transition-all duration-300 truncate"
              href="mailto:rohanrv2004@gmail.com"
            >
              rohanrv2004@gmail.com
              <span className="opacity-0 group-hover:opacity-100 ml-1 flex items-center transition-opacity duration-300">
                ↗
              </span>
            </a>
          </div>

          {isMobile && (
            <button
              title="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}

          <div className="hidden md:flex text-lg items-center space-x-8">
            <Link
              href="#projects"
              className="text-gray-200 font-mono hover:text-blue-400 transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="https://github.com/Rohanvernekarr/Resume/blob/main/rohanvernekar.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-200 font-mono hover:text-blue-400 transition-all duration-300 relative group"
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
           
          </div>
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-zinc-90 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#projects"
              className="block py-2 px-3 text-gray-200 font-mono hover:text-blue-400 hover:bg-zinc-700/50 rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="https://github.com/Rohanvernekarr/Resume/blob/main/rohanvernekar.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 px-3 text-gray-200 font-mono hover:text-blue-400 hover:bg-zinc-700/50 rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
           
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
