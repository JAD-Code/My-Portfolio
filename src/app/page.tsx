import Hero from "@/src/app/components/sections/Home/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Certificates from "./components/sections/Certificates/Certificates";
import Contact from "./components/sections/Contact/Contact";
import { SpeedInsights } from "@vercel/speed-insights/next";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <SpeedInsights />
    </>
  );
};

export default page;
