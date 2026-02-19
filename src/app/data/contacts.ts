import type { LogoKey } from "@/src/app/components/icons/logoMap";

export interface ContactInfo {
  title: string;
  value: string;
  link: string;
  icon: LogoKey;
}

export const contacts: ContactInfo[] = [
  {
    title: "Email",
    value: "jadcode9@gmail.com",
    link: "mailto:jadcode9@gmail.com",
    icon: "gmail",
  },
  {
    title: "GitHub",
    value: "JAD-Code",
    link: "https://github.com/JAD-Code",
    icon: "github",
  },
  {
    title: "LinkedIn",
    value: "Jad Yousef (JADCode)",
    link: "https://www.linkedin.com/in/jad-yousef-2619963b0/",
    icon: "linkedin",
  },
  {
    title: "X (formally Twitter)",
    value: "@JADCode",
    link: "https://x.com/JadCode",
    icon: "x",
  },
];
