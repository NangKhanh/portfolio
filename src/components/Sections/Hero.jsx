import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { NextSeo } from "next-seo";
import { Link } from "react-scroll";
import { MorphingText } from "../magicui/morphing-text";

export default function Hero() {
    const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "NextJS",
        "ExpressJS",
        "NestJS",
        "MySQL",
        "MongoDB",
    ];
    return (
        <>
            <NextSeo title="Portfolio | Home" description="Welcome to my portfolio website." />
            <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 text-center">
                <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold">Welcome to My Portfolio</h1>
                    <div className="text-lg mt-4">I am a FullStack Developer specializing in <MorphingText texts={texts} /></div>

                    <Link to="about" className="mx-4" smooth={true} duration={800} ><FaArrowDown className="mt-6 mx-auto text-3xl animate-bounce cursor-pointer cursor-hover" /></Link>

                </motion.div>
            </section>
        </>
    );
}