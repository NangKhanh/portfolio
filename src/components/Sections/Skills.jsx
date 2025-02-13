import { motion } from "framer-motion";
import { useState } from "react";
import { IconCloud } from "../magicui/icon-cloud";
import TypewriterText from "../TypewriterText";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiNestjs, SiMongodb, SiMysql } from "react-icons/si";

export default function Skills() {
  const [flipped, setFlipped] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
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

  const skills = [
    { name: "HTML", level: 80, icon: <FaHtml5 className="text-2xl text-orange-600" /> },
    { name: "CSS", level: 95, icon: <FaCss3Alt className="text-2xl text-blue-600" /> },
    { name: "JavaScript", level: 90, icon: <FaJs className="text-2xl text-yellow-500" /> },
    { name: "TypeScript", level: 70, icon: <SiTypescript className="text-2xl text-blue-500" /> },
    { name: "ReactJS", level: 95, icon: <FaReact className="text-2xl text-cyan-500" /> },
    { name: "NextJS", level: 75, icon: <SiNextdotjs className="text-2xl text-black dark:text-white" /> },
    { name: "ExpressJS", level: 65, icon: <SiExpress className="text-2xl text-gray-800 dark:text-white" /> },
    { name: "NestJS", level: 70, icon: <SiNestjs className="text-2xl text-red-600" /> },
    { name: "MySQL", level: 70, icon: <SiMysql className="text-2xl text-blue-700" /> },
    { name: "MongoDB", level: 65, icon: <SiMongodb className="text-2xl text-green-500" /> }
  ];

  const handleFlip = () => {
    setFlipped(!flipped);
    setAnimateSkills(!flipped);
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
      <div className="flex-media">
        <div 
          className="relative mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md inline-block text-left font-mono whitespace-break-spaces cursor-pointer size-fit" 
          style={{ height: "47rem", width: "30rem", perspective: "1000px" }}
          onClick={handleFlip}
        >
          <motion.div 
            className="relative w-full h-full" 
            animate={{ rotateY: flipped ? 180 : 0 }} 
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute w-full h-full" style={{ backfaceVisibility: "hidden" }}>
              <TypewriterText key={flipped} text={[JSON.stringify(myInformation, null, 2)]} delay={20} />
            </div>
            <div className="absolute w-full h-full flex flex-col items-start justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
              {skills.map((skill, index) => (
                <div key={index} className="w-full mb-4">
                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-gray-200">
                    <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                    <motion.div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      initial={{ width: 0 }} 
                      animate={{ width: animateSkills ? `${skill.level}%` : 0 }} 
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden mt-10  side-image">
          <IconCloud images={images} />
        </div>
      </div>
    </motion.section>
  );
}
