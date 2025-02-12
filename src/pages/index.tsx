import Layout from "../components/Layout";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import CustomCursor from "../components/CustomCusor";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>

  );
}