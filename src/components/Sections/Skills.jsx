import { motion } from "framer-motion";
import { IconCloud } from "../magicui/icon-cloud";
import TypewriterText from "../TypewriterText";

export default function Skills() {
  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma",
    "amazonaws", "postgresql", "firebase", "nginx", "vercel",
    "testinglibrary", "jest", "cypress", "docker", "git",
    "jira", "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube"
  ];
  const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);

  const myInformation = {
    language: ["JavaScript", "TypeScript"],
    front_end: {
      technologies: ["ReactJS", "Redux Toolkit", "Ant Design"],
      features: [
        "Responsive with devices",
        "Develop user-friendly interfaces"
      ]
    },
    back_end: {
      technologies: [
        "ExpressJS", "NestJS", "MySQL", "MongoDB"
      ],
      features: [
        "Design and develop APIs following REST standards",
        "Optimize SQL queries"
      ]
    }

  };

  const formattedText = [JSON.stringify(myInformation, null, 2)]; // Format JSON đẹp
  console.log(formattedText);

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="flex-media">
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md inline-block text-left font-mono whitespace-break-spaces size-fit">
          <TypewriterText text={formattedText} />
        </div>

        <div className="relative flex  items-center justify-center overflow-hidden mt-10 size-fit">
          <IconCloud images={images} />
        </div>
      </div>
    </motion.section>
  );
}
