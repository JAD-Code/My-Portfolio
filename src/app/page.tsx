// page.tsx
import Hero from "@/src/app/components/sections/Home/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
