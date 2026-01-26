import Hero from "@/src/app/components/sections/Home/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default page;
