import NextLogo from "../../icons/NextLogo";
import ReactLogo from "../../icons/ReactLogo";
import TailwindLogo from "../../icons/TailwindLogo";
import TsLogo from "../../icons/TsLogo";
import Card from "../../ui/Cards/Card";
import Tittle from "../../ui/Tittle";
import UniWayPic from "@/public/images/UniWayPic.png";
import akhlaqGarmentPic from "@/public/images/akhlaqGarmentPic.png";
import MotionLogo from "../../icons/MotionLogo";
import JsLogo from "../../icons/JsLogo";
const Projects = () => {
  return (
    <div id="projects">
      <Tittle text="My" highlightedText="Projects" bgText="PROJECTS" />
      <div
        className="w-full overflow-x-hidden grid grid-cols-1 
      sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10"
      >
        <Card
          img={UniWayPic}
          videoSrc="/videos/UniWayShope.webm"
          title="UnyWay: Campus Marketplace Web Application"
          demoLink="https://uniway-sy.shop/"
          subTitle="A student-focused platform offering shopping and various services for university students."
          longSubTitle="UniWay was a platform I co-founded with a friend, designed to provide university students with diverse services, including product shopping, store card top-ups, and more. It featured an admin dashboard with automation and a Telegram bot for admins. Future plans included adding mentoring, educational courses, and expanding services for freelancers. The project was unfortunately discontinued shortly after launch due to insufficient funding."
          isPublic={false}
          logos={[
            <NextLogo key="react" className="w-8 h-8" />,
            <TsLogo key="react" className="w-8 h-8" />,
            <TailwindLogo key="tailwind" className="w-8 h-8" />,
            <MotionLogo key="react" className="w-8 h-8" />,
          ]}
        />
        <Card
          img={akhlaqGarmentPic}
          title="Akhlaq - clothing manufacture"
          demoLink="https://akhlaq-garment.vercel.app/#home"
          videoSrc="/videos/akhlaqGarmentVideo.webm"
          subTitle="Akhlaq Garment – Freelance work for an Ethiopian clothing manufacturer"
          longSubTitle="I worked as a freelancer for Akhlaq Garment, an Ethiopian clothing manufacturing company, contributing to their projects and supporting their digital needs."
          isPublic={false}
          logos={[
            <ReactLogo key="react" className="w-8 h-8" />,
            <JsLogo key="react" className="w-8 h-8" />,
            <TailwindLogo key="tailwind" className="w-8 h-8" />,
            <MotionLogo key="react" className="w-8 h-8" />,
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
