import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 150, infinite = false }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (infinite) setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % text.length);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, delay / 2);
    } else {
      if (displayText === text[currentIndex]) {
        setIsPaused(true);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText((prev) => text[currentIndex].slice(0, prev.length + 1));
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, text, delay, infinite]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`inline-block w-[0.6ch] ${showCursor ? "opacity-100" : "opacity-0"}`}>
        |
      </span>
    </span>
  );
};

export default TypewriterText;
