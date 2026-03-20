"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Github, Linkedin, Mail, MessageCircleMore, Phone } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    label: "Email",
    value: "nguyennangkhanh311202@gmail.com",
    href: "mailto:nguyennangkhanh311202@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Phone / Zalo",
    value: "0964017363",
    href: "https://zalo.me/0964017363",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "github.com/NangKhanh",
    href: "https://github.com/NangKhanh",
    icon: <Github className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "Khánh Năng",
    href: "https://www.linkedin.com/in/khánh-năng-858458303/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "Facebook",
    value: "facebook.com/nangkhanh311202",
    href: "https://www.facebook.com/nangkhanh311202/",
    icon: <Facebook className="h-5 w-5" />,
  },
];

const faqs = [
  {
    question: "What kind of work do you want to take on?",
    answer: "Frontend-heavy product work, polished landing pages, and fullstack features where the interface quality matters.",
  },
  {
    question: "Can you collaborate with an existing team?",
    answer: "Yes. I am comfortable joining ongoing projects, understanding current codebases, and improving them without disrupting delivery.",
  },
  {
    question: "What should clients expect from you?",
    answer: "Clear implementation, responsive communication, and attention to finish across both technical behavior and UI detail.",
  },
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <section id="contact" className="section-shell overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(73,181,186,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(247,151,82,0.18),transparent_28%)]" />
      </div>
      <div className="section-container relative">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow w-fit max-w-full">Get In Touch</div>
            <h2 className="section-title mt-6">Let&apos;s build something that feels sharp from the first interaction.</h2>
            <p className="section-copy mt-6">
              For product roles, freelance work, or collaborations, reach out with the scope and I can respond quickly.
              I am especially interested in products that need both strong implementation and better presentation.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="cursor-hover panel-soft flex items-center gap-3 p-4 transition hover:border-white/[0.15] hover:bg-white/[0.07] sm:gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-[#f7b57c]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#8fd7d1]">{item.label}</p>
                    <p className="mt-1 break-all text-sm text-[#f4ebe2] sm:break-normal">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="panel animated-border p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#f4c96b]">Why work together</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#fff4e8]">Professional output, not generic portfolio work</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#8fd7d1]">
                <MessageCircleMore className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { label: "Response", value: "Fast and direct" },
                { label: "Focus", value: "Frontend quality" },
                { label: "Style", value: "Practical execution" },
              ].map((item) => (
                <div key={item.label} className="rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#9ddeda]">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/[0.08] bg-[#0f1518]/70 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[#f5b07d]">FAQs</p>
              <div className="mt-5 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-4">
                    <button
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="pr-2 text-sm font-medium text-[#fff4e8] sm:text-base">{faq.question}</span>
                      <span className="text-2xl text-[#f4c96b]">{openFAQ === index ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm leading-7 text-[#d1c6bc]">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
