import React from "react";

import ReactLogo from "./ReactLogo";
import MetaLogo from "./MetaLogo";
import CourseraLogo from "./CourseraLogo";
import GitLogo from "./GitLogo";
import GitHubLogo from "./GitHubLogo";
import JsLogo from "./JsLogo";
import HtmlLogo from "./HtmlLogo";
import CssLogo from "./CssLogo";
import BootstrapLogo from "./BootstrapLogo";
import CppLogo from "./CppLogo";
import FigmaLogo from "./FigmaLogo";
import GmailLogo from "./GmailLogo";
import LinkedInLogo from "./LinkedInLogo";
import MotionLogo from "./MotionLogo";
import NextLogo from "./NextLogo";
import TailwindLogo from "./TailwindLogo";
import TelegramLogo from "./TelegramLogo";
import TsLogo from "./TsLogo";
import WhatsAppLogo from "./WhatsAppLogo";
import XLogo from "./XLogo";
import ShadcnLogo from "./ShadcnLogo";

export type LogoKey =
  | "react"
  | "meta"
  | "coursera"
  | "git"
  | "github"
  | "js"
  | "ts"
  | "html"
  | "css"
  | "bootstrap"
  | "next"
  | "tailwind"
  | "motion"
  | "cpp"
  | "figma"
  | "gmail"
  | "linkedin"
  | "telegram"
  | "whatsapp"
  | "x"
  | "shadcn";

export const logoMap: Record<
  LogoKey,
  React.ComponentType<{ className?: string }>
> = {
  react: ReactLogo,
  meta: MetaLogo,
  coursera: CourseraLogo,
  git: GitLogo,
  github: GitHubLogo,
  js: JsLogo,
  ts: TsLogo,
  html: HtmlLogo,
  css: CssLogo,
  bootstrap: BootstrapLogo,
  next: NextLogo,
  tailwind: TailwindLogo,
  motion: MotionLogo,
  cpp: CppLogo,
  figma: FigmaLogo,
  gmail: GmailLogo,
  linkedin: LinkedInLogo,
  telegram: TelegramLogo,
  whatsapp: WhatsAppLogo,
  x: XLogo,
  shadcn: ShadcnLogo,
};
