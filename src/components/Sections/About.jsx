import { motion } from "framer-motion";
import { ArrowUpRight, Download, Film, Gamepad2, Lightbulb } from "lucide-react";
import TypewriterText from "../TypewriterText";

const highlights = [
  {
    title: "Product mindset",
    copy: "I do not only build screens. I care about task flow, clarity, and how features support business goals.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "Strong execution",
    copy: "From API integration to polished UI states, I focus on shipping reliable experiences without losing speed.",
    icon: <ArrowUpRight className="h-5 w-5" />,
  },
  {
    title: "Curious by default",
    copy: "Outside work, I stay sharp by exploring new tooling, AI workflows, films, games, and product trends.",
    icon: <Film className="h-5 w-5" />,
  },
];

const personalTags = ["React architecture", "Motion design", "API integration", "Design systems", "Problem solving", "Fast iteration"];

export default function About() {
  const typingTexts = ["I'm Nguyen Nang Khanh", "I build products with depth", "I care about the finish"];

  const handleOpenCV = () => {
    window.open(
      "https://drive.google.com/file/d/1O9DEZXFnQ5GInfhcuzc7FewVZehEksRH/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">About Me</div>
            <h2 className="section-title mt-6 max-w-3xl">
              Building immersive web products with a frontend eye and a fullstack backbone.
            </h2>
            <div className="mt-6 text-2xl font-semibold text-[#f7b57c] md:text-4xl">
              <TypewriterText text={typingTexts} delay={70} infinite />
            </div>
            <p className="section-copy mt-8 max-w-3xl">
              I am a JavaScript fullstack developer with strong frontend instincts. My work leans into responsive interfaces,
              fluid interactions, maintainable architecture, and translating rough ideas into something users can trust quickly.
              I enjoy balancing technical constraints with visual quality so products feel complete, not just functional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {personalTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-[#dcccc2]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="panel animated-border p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#8fd7d1]">Snapshot</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#fff4e8]">Practical, collaborative, detail-driven</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#f4c96b]">
                <Gamepad2 className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="panel-soft flex gap-4 p-5"
                >
                  <div className="mt-1 rounded-2xl bg-white/5 p-3 text-[#f7b57c] h-fit">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[#d2c6bd]">{item.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-[#f7b57c]/20 bg-gradient-to-br from-[#2d1c16] to-[#11181b] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[#f4c96b]">Open for</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/[0.08] px-3 py-2 text-sm text-[#f5ede5]">Frontend roles</span>
                <span className="rounded-full bg-white/[0.08] px-3 py-2 text-sm text-[#f5ede5]">Fullstack products</span>
                <span className="rounded-full bg-white/[0.08] px-3 py-2 text-sm text-[#f5ede5]">Freelance collaboration</span>
              </div>
            </div>

            <button
              onClick={handleOpenCV}
              className="cursor-hover mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#49b5ba] to-[#8fd7d1] px-6 py-4 text-sm font-semibold text-[#111517] shadow-[0_18px_34px_rgba(73,181,186,0.28)] transition hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Explore my CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
