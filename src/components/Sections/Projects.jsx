import { motion } from "framer-motion";
import Image from "next/image";
import projectImage from "../../public/profile.png";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <Image src={projectImage} alt="Project" width={300} height={200} className="mx-auto rounded-lg" />
      <p className="mt-4 text-lg">Some of my notable projects showcasing my skills and experience.</p>
    </motion.section>
  );
}