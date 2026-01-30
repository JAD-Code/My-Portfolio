import BootstrapLogo from "../../icons/BootstrapLogo";
import CppLogo from "../../icons/CppLogo";
import CssLogo from "../../icons/CssLogo";
import FigmaLogo from "../../icons/FigmaLogo";
import GitLogo from "../../icons/GitLogo";
import HtmlLogo from "../../icons/HtmlLogo";
import JsLogo from "../../icons/JsLogo";
import MotionLogo from "../../icons/MotionLogo";
import NextLogo from "../../icons/NextLogo";
import ReactLogo from "../../icons/ReactLogo";
import TailwindLogo from "../../icons/TailwindLogo";
import TsLogo from "../../icons/TsLogo";
import CircleAnimation from "./CircleAnimation";

const CirclesContainer = () => {
  const SkillGroup = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="flex flex-col items-center w-full mb-16">
      <h3 className="text-2xl font-bold text-white/50 mb-8 uppercase tracking-widest">
        {title}
      </h3>
      <div className="flex flex-wrap gap-8 justify-center">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-10 bg-transparent">
      {/* Languages */}
      <SkillGroup title="Programming Languages">
        <CircleAnimation
          tittle="JavaScript"
          icon={<JsLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="TypeScript"
          icon={<TsLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="C++"
          icon={<CppLogo className="w-12 h-12" />}
        />
      </SkillGroup>

      {/*Front-End Stack */}
      <SkillGroup title="Frontend Stack">
        <CircleAnimation
          tittle="HTML5"
          icon={<HtmlLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="CSS"
          icon={<CssLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="React"
          icon={<ReactLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="Next.js"
          icon={<NextLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="Tailwind"
          icon={<TailwindLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="Bootstrap"
          icon={<BootstrapLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="Motion"
          icon={<MotionLogo className="w-12 h-12" />}
        />
      </SkillGroup>

      {/*Tools & Software */}
      <SkillGroup title="Tools & DevOps">
        <CircleAnimation
          tittle="Git"
          icon={<GitLogo className="w-12 h-12" />}
        />
        <CircleAnimation
          tittle="Figma"
          icon={<FigmaLogo className="w-12 h-12" />}
        />
      </SkillGroup>
    </div>
  );
};

export default CirclesContainer;
