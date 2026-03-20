import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);
    const hoverElements = document.querySelectorAll("a, button, .cursor-hover");

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseOut);
      });
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-14 w-14 rounded-full border border-[#f5b07d]/70 bg-[#f5b07d]/10 mix-blend-screen lg:block"
        animate={{
          x: position.x - 28,
          y: position.y - 28,
          scale: hovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.35 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-3 w-3 rounded-full bg-[#f4c96b] shadow-[0_0_22px_rgba(244,201,107,0.9)] lg:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: hovered ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.2 }}
      />
    </>
  );
}
