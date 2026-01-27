import TypingAnimation from "./TypingAnimation";
import TechOrbit from "./TechOrbit";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div
      id="#home"
      className="relative w-full h-auto lg:h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 pt-20 lg:pt-0 overflow-hidden"
    >
      {/* left side */}
      <div className="flex-1 text-center lg:text-left lg:ml-8 max-w-2xl z-10">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white">
          Hi, I'm{" "}
          <span className="font-fugaz text-transparent bg-clip-text bg-gradient-to-r from-[#02668a] via-[#63b3f1] to-[#55d7f7]">
            JAD
          </span>
        </h1>
        <div className="mt-4 mb-6">
          <TypingAnimation
            words={["Front-end developer", "Communication engineer student"]}
          />
        </div>
        <p className="max-w-xl text-lg text-white/80 leading-relaxed mx-auto lg:mx-0">
          Front-End Developer Designing and crafting modern, efficient web
          interfaces, guided by an engineering mindset rooted in Communication
          Engineering, where performance and structure actually matter.
        </p>
        {/* buttons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-8">
          <Button colorClass="blue-glass blue-glass-hover" text="Hire me" />
          <Button
            colorClass="liquid-glass liquid-glass-hover"
            text="My Resume"
          />
        </div>
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
