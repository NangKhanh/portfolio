import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./magicui/scroll-progress";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle("dark", storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const menuItems = [
    { id: "about", icon: <FaUser /> },
    { id: "skills", icon: <FaTools /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "contact", icon: <FaEnvelope /> }
  ];

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center z-40">


      <Link to="hero" smooth={true} duration={800} className="cursor-pointer"><h1 className="text-xl font-bold cursor-hover animated-gradient-text"><i>KhanhNN</i></h1></Link>
      <nav className="hidden md:flex cursor-hover hover-gardient font-bold">
        <div className="z-10 rounded-lg p-4">
          <ScrollProgress className="top-[70px]" />
        </div>
        <Link to="about" className="mx-4 cursor-pointer " smooth={true} duration={800}>About</Link>
        <Link to="skills" className="mx-4 cursor-pointer" smooth={true} duration={800}>Skills</Link>
        <Link to="projects" className="mx-4 cursor-pointer" smooth={true} duration={800}>Projects</Link>
        <Link to="contact" className="mx-4 cursor-pointer" smooth={true} duration={800}>Contact</Link>
      </nav>
      <button onClick={toggleDarkMode} className="hidden md:block">
        <motion.div animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.5 }}>
          {darkMode ? <FaMoon className="text-white-700" /> : <FaSun className="text-yellow-500" />}
        </motion.div>
      </button>

      <div className="relative md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          <FaBars className="text-gray-700 dark:text-white" />
        </button>
        <AnimatePresence>
          {menuOpen && (
            <div className="absolute top-0 right-10 z-50">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0, opacity: 0, y: 0 }}
                  animate={{ scale: 1, opacity: 1, y: (index + 1) * 50 }}
                  exit={{ scale: 0, opacity: 0, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="absolute w-12 h-12 bg-white dark:bg-gray-900 flex justify-center items-center rounded-full shadow-lg"
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={800}
                    className="text-lg cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
