import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { NextSeo } from "next-seo";
import { Link } from "react-scroll";
import { MorphingText } from "../magicui/morphing-text";
import TypewriterText from "../TypewriterText";

const metrics = [
  { value: "2+ yrs", label: "Shipping production products" },
  { value: "7", label: "Commercial projects delivered" },
  { value: "Fast", label: "UX-first implementation style" },
];

const capabilityCards = [
  "Complex dashboards and internal tools",
  "Smooth product landing pages and webviews",
  "Fullstack delivery with React, Next.js, Node.js",
];

export default function Hero() {
  const texts = [
    "ReactJS experiences",
    "NextJS interfaces",
    "TypeScript systems",
    "NodeJS backends",
    "animation-rich experiences",
  ];

  return (
    <>
      <NextSeo title="Portfolio | Nguyen Nang Khanh" description="Frontend-focused fullstack developer building polished product experiences." />
      <section id="hero" className="section-shell min-h-screen">
        <div className="section-container flex min-h-[calc(100vh-6rem)] items-center">
          <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="eyebrow mb-6">
                <Sparkles className="h-4 w-4" />
                Crafted interfaces with product depth
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#fff5ea] md:text-7xl">
                Building digital products that feel premium, fast, and intentional.
              </h1>
              <div className="mt-6 max-w-3xl text-lg leading-8 text-[#d9cdc4] md:text-xl">
                I am Nguyen Nang Khanh, a frontend-focused fullstack developer turning product requirements into
                <span className="ml-2 inline-flex min-w-[50px] font-semibold text-[#f7b57c]">
                  {/* <MorphingText texts={texts} /> */}
                  <TypewriterText text={texts} delay={70} infinite />
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="experience"
                  smooth
                  duration={700}
                  offset={-80}
                  className="cursor-hover inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f79752] to-[#f4c96b] px-7 py-4 text-sm font-semibold text-[#1d130d] shadow-[0_15px_35px_rgba(247,151,82,0.35)] transition hover:scale-[1.02]"
                >
                  View Experience
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="contact"
                  smooth
                  duration={700}
                  offset={-80}
                  className="cursor-hover inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/5 px-7 py-4 text-sm font-semibold text-[#f5ede5] backdrop-blur-md transition hover:bg-white/10"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    className="panel-soft rounded-[22px] p-5"
                  >
                    <div className="text-2xl font-semibold text-[#fff5ea]">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-[#baaca2]">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
              className="relative"
            >
              <div className="panel animated-border relative overflow-hidden p-6 md:p-8">
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(247,151,82,0.22), transparent 28%), radial-gradient(circle at bottom left, rgba(73,181,186,0.2), transparent 32%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-[#f5b07d]">Creative Engineering</p>
                    <h2 className="mt-3 text-3xl font-semibold text-[#fff4e8]">From concept to polished release</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#f4c96b]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {capabilityCards.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.3 + index * 0.12 }}
                      className="panel-soft flex items-start gap-4 p-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#76d0ca]" />
                      <p className="text-sm leading-7 text-[#e2d6cc]">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#12161d] p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7fd6d0]">Focus</p>
                    <p className="mt-3 text-xl font-semibold text-white">Design-aware frontend systems</p>
                  </div>
                  <div className="rounded-[24px] bg-[#241814] p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f4c96b]">Approach</p>
                    <p className="mt-3 text-xl font-semibold text-white">Clean code with motion that serves the product</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-8 right-4 hidden rounded-[24px] border border-white/10 bg-[#0f1518]/90 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#8ed1cf]">Current stack</p>
                <p className="mt-2 text-lg font-semibold text-white">Next.js, React, TypeScript, Node.js</p>
              </motion.div>
            </motion.div>
          </div>

          <Link
            to="about"
            smooth
            duration={700}
            offset={-80}
            className="cursor-hover absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#f4ebe2] backdrop-blur-md md:inline-flex"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </section>
    </>
  );
}
