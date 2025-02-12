import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll(".cursor-hover");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 bg-black opacity-30 rounded-full pointer-events-none z-50"
      animate={{
        x: position.x - 24,
        y: position.y - 24,
        scale: hovered ? 2 : 1,
        backgroundColor: hovered ? "black" : "rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
