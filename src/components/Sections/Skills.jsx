import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mt-4 text-lg">JavaScript, React, Next.js, Tailwind CSS, Framer Motion.</p>
    </motion.section>
  );
}