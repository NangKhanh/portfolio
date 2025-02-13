import { motion } from "framer-motion";
import { useState } from "react";
import { IconCloud } from "../magicui/icon-cloud";
import TypewriterText from "../TypewriterText";

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
      technologies: ["ReactJS", "NextJS", "Redux Toolkit"],
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
    { name: "HTML", level: 80 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 70 },
    { name: "ReactJS", level: 95 },
    { name: "NextJS", level: 75 },
    { name: "ExpressJS", level: 65 },
    { name: "NestJS", level: 70 },
    { name: "MySQL", level: 70 },
    { name: "MongoDB", level: 65 },
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
              <TypewriterText key={flipped} text={[JSON.stringify(myInformation, null, 2)]} delay={10} />
            </div>
            <div className="absolute w-full h-full flex flex-col items-start justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
              {skills.map((skill, index) => (
                <div key={index} className="w-full mb-4">
                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-gray-200">
                    <span>{skill.name}</span>
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

        <div className="relative flex items-center justify-center overflow-hidden mt-10 size-fit">
          <IconCloud images={images} />
        </div>
      </div>
    </motion.section>
  );
}
