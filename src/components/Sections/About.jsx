import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/profile.png";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <Image src={profilePic} alt="Profile" width={150} height={150} className="mx-auto rounded-full" />
      <p className="mt-4 text-lg">I am a passionate frontend developer specializing in modern web technologies.</p>
    </motion.section>
  );
}