"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Facebook } from "lucide-react";

const faqs = [
  {
    question: "What technologies do I specialize in?",
    answer:
      "I specialize in modern web technologies like JavaScript, TypeScript, React, Node.js, and databases like MySQL and MongoDB.",
  },
  {
    question: "Am I available for freelance projects?",
    answer: "Yes! I’m open to freelance opportunities, consulting, and collaborations.",
  },
  {
    question: "How can we work together?",
    answer: "You can reach out via email, phone number or any of my social platforms. Let’s discuss how I can help bring your project to life!",
  },
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const FPS = 60;
    const numStars = typeof window !== "undefined" && window.innerWidth < 768 ? 50 : 150;
    let mouse = { x: 0, y: 0 };

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      stars.forEach((s) => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      });

      ctx.beginPath();
      stars.forEach((starI) => {
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        stars.forEach((starII) => {
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        });
      });
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "white";
      ctx.stroke();
    }

    function distance(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }

    function update() {
      stars.forEach((s) => {
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      });
    }

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      id="contact"
      className="relative w-full h-screen flex flex-col items-center justify-center px-10 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Canvas Animation */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold uppercase">CONTACT ME</h1>
        <p className="text-lg mt-4 max-w-lg mx-auto">
          For any project inquiries, collaborations, or just to connect, feel free to reach out.
        </p>

        {/* Contact Details */}
        <div className="mt-8 space-y-4 text-lg">
          <div className="flex  space-x-4">
            <Mail className="w-6 h-6 text-white" />
            <a href="mailto:nguyennangkhanh311202@gmail.com" className="hover:text-blue-500 transition">
              nguyennangkhanh311202@gmail.com
            </a>
          </div>
          <div className="flex  space-x-4">
            <Phone className="w-6 h-6 text-white" />
            <a href="https://zalo.me/0964017363" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              0964017363
            </a>
          </div>
          <div className="flex  space-x-4">
            <Github className="w-6 h-6 text-white" />
            <a href="https://github.com/NangKhanh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition">
              GitHub
            </a>
          </div>
          <div className="flex  space-x-4">
            <Linkedin className="w-6 h-6 text-white" />
            <a href="https://www.linkedin.com/in/khánh-năng-858458303/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              LinkedIn
            </a>
          </div>
          <div className="flex  space-x-4">
            <Facebook className="w-6 h-6 text-white" />
            <a href="https://www.facebook.com/nangkhanh311202/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              Facebook
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold uppercase">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-3">
                <button
                  className="w-full text-left flex justify-between items-center font-medium text-lg"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
                </button>
                {openFAQ === index && (
                  <motion.p
                    className="mt-2 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-start">
                      {faq.answer}
                    </p>
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
