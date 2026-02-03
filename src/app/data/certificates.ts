import type { StaticImageData } from "next/image";
import type { LogoKey } from "@/src/app/components/icons/logoMap";

import {
  ReactBasicsCERTIFICATE,
  VersionControlCERTIFICATE,
  ProgrammingWithJavaScriptCERTIFICATE,
  IntroductionToFrontEndDevelopmentCERTIFICATE,
  aiPic,
  filmPic,
  filmPic1,
} from "@/src/app/data/images";

export type CertificateKeys =
  | "reactBasics"
  | "versionControl"
  | "programmingJS"
  | "frontEndIntro"
  | "aiCourse"
  | "videoCompetition"
  | "shortFilm";

export interface CertificateData {
  certificateKey: CertificateKeys;
  img: StaticImageData;
  demoLink?: string;
  logos?: LogoKey[];
}

export const certificates: CertificateData[] = [
  {
    certificateKey: "reactBasics",
    img: ReactBasicsCERTIFICATE,
    demoLink: "https://coursera.org/share/a7bd42e2bfe53f8614e3cd4a0f13e327",
    logos: ["coursera", "meta", "react"],
  },
  {
    certificateKey: "versionControl",
    img: VersionControlCERTIFICATE,
    demoLink:
      "https://www.coursera.org/account/accomplishments/verify/GXNKENO5DEZM",
    logos: ["coursera", "meta", "git", "github"],
  },
  {
    certificateKey: "programmingJS",
    img: ProgrammingWithJavaScriptCERTIFICATE,
    demoLink: "https://coursera.org/share/c4a652904936063319b70a3c6a2ec2c2",
    logos: ["coursera", "meta", "js"],
  },
  {
    certificateKey: "frontEndIntro",
    img: IntroductionToFrontEndDevelopmentCERTIFICATE,
    demoLink: "https://coursera.org/share/463d083ff7845b1de53b5df5d5cda7fd",
    logos: ["coursera", "meta", "html", "css", "bootstrap"],
  },
  {
    certificateKey: "aiCourse",
    img: aiPic,
  },
  {
    certificateKey: "videoCompetition",
    img: filmPic,
  },
  {
    certificateKey: "shortFilm",
    img: filmPic1,
  },
];
