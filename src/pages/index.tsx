import Layout from "../components/Layout";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Contact from "../components/Sections/Contact";
import WorkExperience from "../components/Sections/Projects";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Contact />
      </Layout>
    </>

  );
}