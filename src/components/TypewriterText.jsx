import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 150, infinite = false }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    // Hiệu ứng con trỏ nhấp nháy
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (infinite) setIsDeleting(true);
      }, 2000);
      return () => {
        clearTimeout(timeout);
        clearInterval(cursorInterval);
      };
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((current) => (current + 1) % text.length);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText(text[currentIndex].slice(0, displayText.length - 1));
      }, delay / 2);
    } else {
      if (displayText === text[currentIndex]) {
        setIsPaused(true);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText(text[currentIndex].slice(0, displayText.length + 1));
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayText, currentIndex, isDeleting, isPaused, text, delay, infinite]);

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
