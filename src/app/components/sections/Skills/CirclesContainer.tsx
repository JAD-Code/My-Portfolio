import { skillGroups } from "@/src/app/data/skills";
import { logoMap } from "@/src/app/components/icons";
import CircleAnimation from "./CircleAnimation";
import { en } from "@/src/app/i18n/en";

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
      {skillGroups.map((group) => (
        <SkillGroup key={group.titleKey} title={en.skills[group.titleKey]}>
          {group.skills.map((skill) => {
            const Logo = logoMap[skill.logo];
            return (
              <CircleAnimation
                key={skill.name}
                tittle={skill.name}
                icon={<Logo className="w-12 h-12" />}
              />
            );
          })}
        </SkillGroup>
      ))}
    </div>
  );
};

export default CirclesContainer;
