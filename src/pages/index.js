import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ExperienceCard from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Burgos - Programador Full-Stack</title>
        <meta
          name="description"
          content="Portafolio de Sebastian Burgos, programador full-stack con experiencia en desarrollo web, SEO, y estrategias digitales."
        />
        <meta
          name="keywords"
          content="Sebastian Burgos, programador, full-stack, SEO, React, Tailwind, portfolio, desarrollo web, tecnología, software"
        />
        <meta name="author" content="Sebastian Burgos" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <NavBar />
        <Hero />
        <AboutMe />
        <ExperienceCard />
        <ProjectsSection />
        <Technologies />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
