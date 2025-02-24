"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-700/70 rounded-full pointer-events-none mix-blend-difference"
      animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    />
  );
};

export default CustomCursor;
