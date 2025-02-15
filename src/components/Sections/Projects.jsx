import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "09/2023 – 01/2024",
    position: "Intern Javascripts Developer",
    company: "Keysoft technology.",
    description: "Learn and support project development.",
  },
  {
    year: "01/2024 – now",
    position: "FullStack Developer",
    company: "Ecocheck Tenant - BeevR Technologies",
    description: "Develop software to support evaluation and calculation of emissions for businesses and organizations looking to measure and improve their environmental impact.",
  },
  {
    year: "3/2024 – 01/2025",
    position: "FullStack Developer",
    company: "Ecocheck Landing Page - BeevR Technologies",
    description: "Build a landing page website for SEO, collect user data, provide certification through a greenhouse gas inventory lesson system.",
  },
  {
    year: "5/2024 – 6/2024",
    position: "Front-End Developer",
    company: "Beevr website - BeevR Technologies",
    description: "Build a introduce website for company.",
  },
  {
    year: "09/2024 – now",
    position: "Back-End Developer",
    company: "Subscriptions service - BeevR Technologies",
    description: "Build a common resource management and subscription system for different projects (ecocheck tenant and others).",
  }
];

export default function WorkExperience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 text-center bg-gradient-to-r from-[#E8CBC0] to-[#aab2d8] dark:from-[#796772] dark:to-[#25182e] w-[100vh]"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 pt-10">Work Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center justify-between mb-10 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 1 }}
          >
            <div className="w-1/2 p-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{exp.description}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full shadow-lg">{exp.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
