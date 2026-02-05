import Card from "../../ui/Cards/GlassyCard";
import SmallCard from "../../ui/Cards/SmallGlassyCard";
import Tittle from "../../ui/Tittle";
import LevitatingAnimations from "./LevitatingAnimations";
import { Cpu, Terminal } from "lucide-react";
import { en } from "@/src/app/i18n/en";
import ScrollFadeUp from "../../ui/ScrollFadeUp";

const About = () => {
  const t = en.about;

  return (
    <section id="about" className="relative w-full px-4 overflow-hidden">
      <div className="flex justify-center text-center mb-10 relative">
        <Tittle text="About" highlightedText="Me" bgText="ABOUT" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <ScrollFadeUp>
            <Card title={t.cardTitle} subtitle={t.cardSubtitle} />
          </ScrollFadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <ScrollFadeUp>
              <SmallCard
                logo={<Cpu className="text-cyan-400" size={24} />}
                tittle={t.smallCards[0].title}
                subtitle={t.smallCards[0].subtitle}
              />
            </ScrollFadeUp>
            <ScrollFadeUp>
              <SmallCard
                logo={<Terminal className="text-cyan-400" size={24} />}
                tittle={t.smallCards[1].title}
                subtitle={t.smallCards[1].subtitle}
              />
            </ScrollFadeUp>
          </div>
        </div>
        <div className="flex justify-center items-center h-full min-h-[500px] lg:-mt-13">
          <div className="scale-90 lg:scale-100 transform transition-transform">
            <LevitatingAnimations />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
