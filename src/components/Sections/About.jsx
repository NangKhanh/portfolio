import { motion } from "framer-motion";
import Image from "next/image";
import projectImage from "../../public/profile.png";
import TypewriterText from "../TypewriterText";
import { Globe } from "../magicui/globe";

export default function About() {
  const typingTexts = [
    "I'm Nguyen Nang Khanh"
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto pt-20">
        <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
          About me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center">
          <div className="text-left space-y-4 col-span-4">
            <h3 className="text-3xl md:text-4xl font-bold text-pink-500 h-20">
              Hey There 👋, <br />
              <TypewriterText text={typingTexts} delay={100} infinite={true} />
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A Full-Stack JavaScript Developer with a passion for building modern, high-performance web applications. I thrive on solving complex problems and crafting seamless user experiences with technologies like React, Next.js, Node.js, and MySQL.
              <br />Beyond coding, I love watching movies, playing games, and exploring new technologies. Whether it's diving into the latest JavaScript frameworks or experimenting with AI, I'm always eager to learn and push my skills further.
              <br />Let's build something awesome together! 🚀
            </p>
          </div>

          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[400px]"
            >
              {/* <Image
                src={projectImage}
                alt="Profile"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              /> */}

              <div className="flex justify-center size-full">
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background px-40 pb-40 pt-8 md:pb-60 ">
               
               <Globe className="top-25 medium-left" />
               <div className="pointer-events-none absolute inset-0 h-full " />
             </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}