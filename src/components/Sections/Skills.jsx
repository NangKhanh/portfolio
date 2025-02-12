import { motion } from "framer-motion";
import { IconCloud } from "../magicui/icon-cloud";


export default function Skills() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube"
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (

    <motion.section
      id="skills"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold pt-20">Skills</h2>
      <p className="mt-4 text-lg">JavaScript, React, Next.js, Tailwind CSS, Framer Motion.</p>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </motion.section>
  );
}