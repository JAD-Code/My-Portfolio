import type { StaticImageData } from "next/image";
import { LogoKey } from "../components/icons";
import { ProjectKeys } from "../i18n/en";
import { UniWayPic, akhlaqGarmentPic } from "./images";

export interface ProjectData {
  projectKey: ProjectKeys;
  img: string | StaticImageData;
  videoSrc?: string;
  demoLink?: string;
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
];
