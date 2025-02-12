import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-lg">Feel free to reach out for collaborations or inquiries.</p>
    </motion.section>
  );
}