import type { StaticImageData } from "next/image";
import { LogoKey } from "../components/icons";
import { ProjectKeys } from "../i18n/en";
import { UniWayPic, akhlaqGarmentPic, dashboardPic } from "./images";

export interface ProjectData {
  projectKey: ProjectKeys;
  img: string | StaticImageData;
  videoSrc?: string;
  demoLink?: string;
  repoLink?: string;
  isPublic?: boolean;
  logos?: LogoKey[];
}

export const projects: ProjectData[] = [
  {
    projectKey: "uniway",
    img: UniWayPic,
    videoSrc: "/videos/UniWayShope.webm",
    demoLink: "https://uniway-sy.shop/",
    isPublic: false,
    logos: ["next", "ts", "tailwind", "motion"],
  },
  {
    projectKey: "akhlaq",
    img: akhlaqGarmentPic,
    videoSrc: "/videos/akhlaqGarmentVideo.webm",
    demoLink: "https://akhlaq-garment.vercel.app/#home",
    isPublic: false,
    logos: ["react", "js", "tailwind", "motion"],
  },
  {
    projectKey: "dashboard",
    img: dashboardPic,
    demoLink: "https://shadcndashboard-khaki.vercel.app",
    isPublic: true,
    repoLink: "https://github.com/JAD-Code/shadcn_dashboard",
    logos: ["next", "ts", "tailwind", "shadcn"],
  },
];
