import Card from "../../ui/Cards/GlassyCard";
import SmallCard from "../../ui/Cards/SmallGlassyCard";
import Tittle from "../../ui/Tittle";
import LevitatingAnimations from "./LevitatingAnimations";
import { Cpu, Terminal } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-4
     overflow-hidden"
    >
      <div className="flex justify-center text-center mb-10 relative">
        <Tittle text="About" highlightedText="Me" bgText="ABOUT" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <Card
            title="Engineering the Web"
            subtitle="I’m Jad, a Front-End Developer with a passion for turning complex ideas into seamless,
             interactive web experiences. My background in Communication Engineering gives me a unique perspective,
              I focus on clean, efficient, and well-structured code that not only works flawlessly but scales beautifully.
               I love exploring modern technologies, crafting intuitive interfaces, and continuously learning to push the boundaries
                of what the web can do."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <SmallCard
              logo={<Cpu className="text-cyan-400" size={24} />}
              tittle="Education"
              subtitle="Comm. Engineering Student"
            />
            <SmallCard
              logo={<Terminal className="text-cyan-400" size={24} />}
              tittle="Focus"
              subtitle="Next.js & React Architect"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center h-full 
        min-h-[500px] lg:-mt-13"
        >
          <div className="scale-90 lg:scale-100 transform transition-transform">
            <LevitatingAnimations />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
