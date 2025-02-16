import { motion, useInView } from "framer-motion";
import { useMemo, useState, useRef, useEffect } from "react";
import { IconCloud } from "../magicui/icon-cloud";
import TypewriterText from "../TypewriterText";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiNestjs, SiMongodb, SiMysql } from "react-icons/si";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export default function Skills() {
  const [flipped, setFlipped] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [terminalKey, setTerminalKey] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true });

  const slugs = useMemo(() => [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma",
    "amazonaws", "postgresql", "firebase", "nginx", "vercel",
    "testinglibrary", "jest", "cypress", "docker", "git",
    "jira", "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube"
  ], []);

  const images = useMemo(() => slugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`), [slugs]);

  const skills = [
    { name: "JavaScript", level: 90, icon: <FaJs className="text-2xl text-yellow-500" /> },
    { name: "TypeScript", level: 70, icon: <SiTypescript className="text-2xl text-blue-500" /> },
    { name: "ReactJS", level: 95, icon: <FaReact className="text-2xl text-cyan-500" /> },
    { name: "NextJS", level: 75, icon: <SiNextdotjs className="text-2xl text-black dark:text-white" /> },
    { name: "ExpressJS", level: 65, icon: <SiExpress className="text-2xl text-gray-800 dark:text-white" /> },
    { name: "NestJS", level: 70, icon: <SiNestjs className="text-2xl text-red-600" /> },
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTerminalKey(prev => prev + 1);
    }
  }, [isInView, hasAnimated]);

  const handleFlip = () => {
    setFlipped(!flipped);
    setAnimateSkills(!flipped);
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center bg-white dark:bg-gray-900 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
      <div className="flex-media">
        <div
          ref={terminalRef}
          className="relative mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md inline-block text-left font-mono whitespace-break-spaces cursor-pointer size-fit"
          style={{ height: "30rem", width: "480px", perspective: "1000px" }}
          onClick={handleFlip}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute w-full h-full" style={{ backfaceVisibility: "hidden" }}>
              {isInView && (
                <Terminal key={terminalKey}>
                  <TypingAnimation>&gt; npm skills@latest init</TypingAnimation>

                  <AnimatedSpan delay={1500} className="text-green-500">
                    <span>✔ Preflight checks.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2000} className="text-yellow-500">
                    <span>✔ Verifying language. Found JavaScript, TypeScript.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2500} className="text-yellow-500">
                    <span>✔ Verifying FE framework. Found NextJs, ReactJs.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={3000} className="text-yellow-500">
                    <span>✔ Verifying BE framework. Found NestJs, ExpressJs.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={3500} className="text-green-500">
                    <span>✔ Validating import alias.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={4000} className="text-green-500">
                    <span>✔ Writing components.json.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={4500} className="text-green-500">
                    <span>✔ Checking registry.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={5000} className="text-green-500">
                    <span>✔ Updating tailwind.config.ts</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={5500} className="text-green-500">
                    <span>✔ Updating app/globals.css</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={6000} className="text-green-500">
                    <span>✔ Installing dependencies.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={6500} className="text-blue-500">
                    <span>ℹ Updated 1 file:</span>
                    <span className="pl-2">- lib/skills.ts</span>
                  </AnimatedSpan>

                  <TypingAnimation delay={7000} className="text-muted-foreground">
                    Success! Project initialization completed.
                  </TypingAnimation>

                  <TypingAnimation delay={7500} className="text-muted-foreground">
                    You may now contact me.
                  </TypingAnimation>

                  <TypingAnimation delay={8000} className="text-muted-foreground">
                    Click here to explore.
                  </TypingAnimation>
                </Terminal>
              )}
            </div>

            <div
              className="absolute w-full h-full flex flex-col items-start justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
              style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
            >
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

        <div className="relative flex items-center justify-center overflow-hidden mt-10 side-image">
          <IconCloud images={images} />
        </div>
      </div>
    </motion.section>
  );
}