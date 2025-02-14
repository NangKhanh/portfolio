import { motion } from "framer-motion";
import TypewriterText from "../TypewriterText";
import { Ripple } from "../magicui/ripple";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";

export default function About() {
  const typingTexts = [
    "I'm Nguyen Nang Khanh"
  ];
  const handleDownloadCV = async () => {
    const response = await fetch("http://api.cloudinary.com/v1_1/dqsjc7ny3/image/download?api_key=489171623791828&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiOTc3YjE3ZGRlMTgzMjIxMjZlZTgwNDNkZTA0ODA4NjQiLCJ1c2VyX2V4dGVybmFsX2lkIjoiNThiYzc4YTBjOTc0ZDBlMDE4ZjNjMzFhNTI4Yjc4IiwidXNlcl9jdXN0b21faWQiOiJuYW5na2hhbjMxMTIwMkBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=CV%2FCV_Developer_Nguyen_Nang_Khanh_qng6od&signature=b1f81ff46104d6da54fe9966c557ad8e4fa8f3ed&source=ml&target_filename=CV_Developer_Nguyen_Nang_Khanh_qng6od&timestamp=1739505981&type=upload");
    const blob = await response.blob();
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", "CV_Developer_Nguyen_Nang_Khanh.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

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

        <div className=" items-center w-full">
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

              {/* <div className="flex justify-center size-full">
                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background px-40 pb-40 pt-8 md:pb-60 ">

                  <Globe className="top-25 medium-left" />
                  <div className="pointer-events-none absolute inset-0 h-full " />
                </div>
              </div> */}
              <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
                  Ripple
                </p> */}
                <ShimmerButton className="shadow-2xl " onClick={handleDownloadCV}>
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Dowload my CV
                  </span>

                </ShimmerButton>

                <Ripple numCircles={3} mainCircleSize={220} />
              </div>

            </motion.div>
          </div>
        </div>
      </div >
    </motion.section >
  );
}