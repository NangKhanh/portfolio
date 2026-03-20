import { motion, useInView } from "framer-motion";
import { Code2, Layers3, Rocket, Wand2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IconCloud } from "../magicui/icon-cloud";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

const skillGroups = [
  {
    title: "Frontend",
    description: "High-fidelity pages, app flows, dashboard UI, responsive states, and scalable component structure.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Backend",
    description: "REST APIs, business flows, database design, and integration work that supports reliable product delivery.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Delivery",
    description: "Iterative shipping, collaboration with teams, and practical decisions that keep scope moving.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const measuredSkills = [
  { name: "ReactJS", level: 95, icon: <FaReact className="text-2xl text-cyan-400" /> },
  { name: "JavaScript", level: 90, icon: <FaJs className="text-2xl text-yellow-400" /> },
  { name: "TypeScript", level: 82, icon: <SiTypescript className="text-2xl text-blue-400" /> },
  { name: "NextJS", level: 88, icon: <SiNextdotjs className="text-2xl text-white" /> },
  { name: "NodeJS", level: 80, icon: <FaNodeJs className="text-2xl text-green-400" /> },
  { name: "NestJS", level: 72, icon: <SiNestjs className="text-2xl text-red-400" /> },
  { name: "ExpressJS", level: 74, icon: <SiExpress className="text-2xl text-neutral-200" /> },
];

export default function Skills() {
  const [terminalKey, setTerminalKey] = useState(0);
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, amount: 0.35 });

  const slugs = useMemo(
    () => [
      "typescript",
      "javascript",
      "react",
      "nextdotjs",
      "nodedotjs",
      "express",
      "nestjs",
      "docker",
      "git",
      "github",
      "mysql",
      "mongodb",
      "postgresql",
      "tailwindcss",
      "vercel",
      "jira",
      "figma",
    ],
    []
  );

  const images = useMemo(() => slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`), [slugs]);

  useEffect(() => {
    if (isInView) {
      setTerminalKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <div className="eyebrow w-fit max-w-full">Technical Range</div>
          <h2 className="section-title mt-6">A practical stack shaped around modern product work.</h2>
          <p className="section-copy mt-6">
            I am strongest when product quality depends on both engineering fundamentals and visual refinement. The focus is not
            only which tools I know, but how I use them to ship clean experiences faster.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="panel-soft p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-[#f7b57c]">
                    {group.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#d0c4bb]">{group.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              ref={terminalRef}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="panel animated-border overflow-hidden p-4 sm:p-5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#8fd7d1]">Workflow</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#fff4e8] sm:text-2xl">How I usually work</h3>
                </div>
                <div className="shrink-0 rounded-full border border-white/10 bg-white/5 p-3 text-[#f4c96b]">
                  <Wand2 className="h-5 w-5" />
                </div>
              </div>
              {isInView && (
                <Terminal key={terminalKey} className="border-0 bg-transparent shadow-none">
                  <TypingAnimation>&gt; product.build --mode polished</TypingAnimation>
                  <AnimatedSpan delay={1000} className="text-green-400">
                    <span>✔ Define component structure and interaction states.</span>
                  </AnimatedSpan>
                  <AnimatedSpan delay={1600} className="text-cyan-400">
                    <span>✔ Implement responsive UI with accessible behavior.</span>
                  </AnimatedSpan>
                  <AnimatedSpan delay={2200} className="text-yellow-300">
                    <span>✔ Connect APIs, handle edge cases, refine loading states.</span>
                  </AnimatedSpan>
                  <AnimatedSpan delay={2800} className="text-pink-300">
                    <span>✔ Add motion where it improves comprehension and feel.</span>
                  </AnimatedSpan>
                  <TypingAnimation delay={3600} className="text-[#bfb1a7]">
                    Result: product-ready UI that looks finished, not rushed.
                  </TypingAnimation>
                </Terminal>
              )}
            </motion.div>
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="panel min-h-[340px] p-4 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#f5b07d]">Stack Orbit</p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Tools I reach for often</h3>
                </div>
                <div className="shrink-0 rounded-full bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#9bdfda]">
                  Active
                </div>
              </div>
              <div className="relative mt-4 hidden min-h-[240px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-[radial-gradient(circle_at_center,rgba(73,181,186,0.14),transparent_46%)] sm:flex">
                <IconCloud images={images} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
                {slugs.slice(0, 8).map((slug) => (
                  <div key={slug} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-[#e6ddd6]">
                    {slug.replace("dotjs", ".js")}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="panel-soft p-4 sm:p-6"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#f4c96b]">Depth</p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Core strengths</h3>
                </div>
                <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#d6c8be]">
                  2026
                </div>
              </div>
              <div className="grid gap-4">
                {measuredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-3 text-sm font-medium text-[#f4ebe2]">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#b9aca2]">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/[0.08]">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-[#f79752] via-[#f4c96b] to-[#49b5ba]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: index * 0.06 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
