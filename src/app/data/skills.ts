import type { LogoKey } from "@/src/app/components/icons/logoMap";

export interface SkillData {
  titleKey: "programmingLanguages" | "frontendStack" | "toolsDevOps";
  skills: {
    name: string;
    logo: LogoKey;
  }[];
}

export const skillGroups: SkillData[] = [
  {
    titleKey: "programmingLanguages",
    skills: [
      { name: "JavaScript", logo: "js" },
      { name: "TypeScript", logo: "ts" },
      { name: "C++", logo: "cpp" },
    ],
  },
  {
    titleKey: "frontendStack",
    skills: [
      { name: "HTML5", logo: "html" },
      { name: "CSS", logo: "css" },
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "next" },
      { name: "Tailwind", logo: "tailwind" },
      { name: "Bootstrap", logo: "bootstrap" },
      { name: "Motion", logo: "motion" },
    ],
  },
  {
    titleKey: "toolsDevOps",
    skills: [
      { name: "Git", logo: "git" },
      { name: "Figma", logo: "figma" },
    ],
  },
];
