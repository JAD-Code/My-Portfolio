import Card from "../../ui/Cards/Card";
import SmallCard from "../../ui/Cards/SmallCard";
import Tittle from "../../ui/Tittle";
import LevitatingAnimations from "./LevitatingAnimations";
import { Cpu, Terminal } from "lucide-react";

const About = () => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <div className="flex justify-center text-center mb-16 relative">
        <Tittle text="About" highlightedText="Me" bgText="ABOUT" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <Card
            tittle="Engineering the Web"
            subtitle="I am a who bridges the gap between complex logic and intuitive design. My
              background in engineering has honed my ability to analyze systems
              and optimize data flow, which I translate into clean, scalable code."
            hashtag1=" #System_Architecture"
            hashtag2=" #Performance_Opt"
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
