import TypingAnimation from "./TypingAnimation";
import TechOrbit from "./TechOrbit";
import Button from "../../ui/Button";
import { en } from "@/src/app/i18n/en";
import ScrollFadeUp from "../../ui/ScrollFadeUp";

const Hero = () => {
  const t = en.hero;

  return (
    <div
      id="home"
      className="relative w-full h-auto lg:h-screen flex flex-col 
      lg:flex-row items-center justify-center lg:justify-between mt-3 
      px-4 pt-20 lg:pt-0 overflow-hidden"
    >
      {/* left side */}

      <div className="flex-1 text-center lg:text-left lg:ml-8 max-w-2xl z-10">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white">
          {t.greeting}{" "}
          <span
            className="font-fugaz text-transparent bg-clip-text 
            bg-gradient-to-r from-[#02668a] via-[#63b3f1] to-[#55d7f7]"
          >
            {t.name}
          </span>
        </h1>

        <div className="mt-4 mb-6">
          <TypingAnimation words={t.typingWords} />
        </div>

        <p className="max-w-xl text-lg text-white/80 leading-relaxed mx-auto lg:mx-0">
          {t.description}
        </p>

        {/* buttons */}
        <ScrollFadeUp>
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <Button
              colorClass="blue-glass blue-glass-hover"
              text={t.buttons.contact}
              href="#contact"
            />
            <Button
              href="https://drive.google.com/file/d/1uMjRqgdXlpMlblUOSkCV3j-aMZzkx9Ry/view?usp=drivesdk"
              target="_blank"
              colorClass="liquid-glass liquid-glass-hover"
              text={t.buttons.resume}
            />
          </div>
        </ScrollFadeUp>
      </div>

      {/* right side */}
      <div className="flex-1 flex justify-center items-center mt-20 lg:mt-0 w-full overflow-visible">
        <div className="scale-[0.8] sm:scale-[0.8] lg:scale-100 transition-all duration-700">
          <TechOrbit />
        </div>
      </div>
    </div>
  );
};

export default Hero;
