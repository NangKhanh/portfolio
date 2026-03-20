import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    year: "09/2023 - 01/2024",
    position: "Intern JavaScript Developer",
    company: "Keysoft Technology",
    description: "Learned team workflows, supported development tasks, and built a stronger engineering foundation in commercial projects.",
  },
  {
    year: "01/2024 - 04/2025",
    position: "Fullstack Developer",
    company: "Ecocheck Tenant · BeevR Technologies",
    description: "Built software for carbon emissions evaluation and reporting, helping businesses measure and improve environmental impact.",
  },
  {
    year: "03/2024 - 01/2025",
    position: "Fullstack Developer",
    company: "Ecocheck Landing Page · BeevR Technologies",
    description: "Delivered landing experiences focused on SEO, lead capture, and certification support through greenhouse gas training flows.",
  },
  {
    year: "05/2024 - 06/2024",
    position: "Front-End Developer",
    company: "BeevR Website · BeevR Technologies",
    description: "Built a company introduction website with a stronger focus on brand presentation and UX clarity.",
  },
  {
    year: "09/2024 - 04/2025",
    position: "Back-End Developer",
    company: "Subscription Service · BeevR Technologies",
    description: "Built shared subscription and resource-management logic used across multiple internal and client-facing products.",
  },
  {
    year: "05/2025 - 12/2025",
    position: "Front-End Developer",
    company: "Synaptic · Sotatek",
    description: "Implemented UI features for a medical scheduling platform so doctors and patients could manage appointments effectively.",
  },
  {
    year: "09/2025 - 12/2025",
    position: "Front-End Developer",
    company: "SotaVision · Sotatek / US Client",
    description: "Contributed to AI and computer-vision product UI for defect detection workflows and real-time quality feedback.",
  },
  {
    year: "09/2025 - Present",
    position: "Front-End Developer",
    company: "Sentbe · Sotatek / South Korea Client",
    description: "Develop and maintain the webview experience for a cross-border remittance product used in Korea.",
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow max-w-full justify-center">Experience Timeline</div>
          <h2 className="section-title mt-6">A progression shaped by real product delivery.</h2>
          <p className="section-copy mt-6">
            My experience spans internal tools, SEO-focused pages, product webviews, and systems that needed both speed and
            maintainability. The common pattern is shipping usable software, not just demos.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#f79752] via-[#f4c96b] to-[#49b5ba] md:left-1/2 md:block" />
          <div className="grid gap-6">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={`${exp.company}-${exp.year}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-5 ${isRight ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`hidden md:flex ${isRight ? "justify-start pl-10" : "justify-end pr-10"}`}>
                    <div className="max-w-md rounded-full border border-[#f4c96b]/25 bg-[#16110f]/80 px-5 py-3 text-sm font-medium tracking-[0.18em] text-[#f4c96b] shadow-[0_12px_40px_rgba(0,0,0,0.18)] w-fit h-fit">
                      {exp.year}
                    </div>
                  </div>

                  <div className={`relative ${isRight ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="panel animated-border h-full p-5 md:p-7">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-[#8ed1cf]">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[#f5b07d] md:hidden">{exp.year}</p>
                            <p className="text-xs uppercase tracking-[0.22em] text-[#9ddeda]">Role</p>
                          </div>
                        </div>
                        <Sparkles className="h-4 w-4 shrink-0 text-[#f4c96b]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#fff4e8] sm:text-2xl">{exp.position}</h3>
                      <p className="mt-2 break-words text-sm font-medium text-[#8fd7d1] sm:text-base">{exp.company}</p>
                      <p className="mt-4 text-sm leading-7 text-[#d1c6bc]">{exp.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#f7b57c]">
                        Product work
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
