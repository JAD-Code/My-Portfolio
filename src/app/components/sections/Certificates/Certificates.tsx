import Card from "../../ui/Cards/Card";
import Tittle from "../../ui/Tittle";
import ReactBasicsCERTIFICATE from "@/public/images/ReactBasicsCERTIFICATE.jpeg";
import VersionControlCERTIFICATE from "@/public/images/VersionControlCERTIFICATE.jpeg";
import ProgrammingWithJavaScriptCERTIFICATE from "@/public/images/ProgrammingWithJavaScriptCERTIFICATE.jpeg";
import IntroductionToFrontEndDevelopmentCERTIFICATE from "@/public/images/Introduction to Front-End DevelopmentCERTIFICATE.jpeg";
import ReactLogo from "../../icons/ReactLogo";
import MetaLogo from "../../icons/MetaLogo";
import CourseraLogo from "../../icons/CourseraLogo";
import GitLogo from "../../icons/GitLogo";
import GitHubLogo from "../../icons/GitHubLogo";
import JsLogo from "../../icons/JsLogo";
import HtmlLogo from "../../icons/HtmlLogo";
import CssLogo from "../../icons/CssLogo";
import BootstrapLogo from "../../icons/BootstrapLogo";

const Certificates = () => {
  return (
    <section id="certificates">
      <Tittle text="My" highlightedText="Certificates" bgText="Certificates" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:justify-center">
        <Card
          img={ReactBasicsCERTIFICATE}
          title="Meta Front-End React Basics Certificate"
          subTitle="Completed Meta Front-End Developer Professional Certificate"
          longSubTitle="This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies." // وصف أطول يظهر في الـ Drawer
          demoLink="https://coursera.org/share/a7bd42e2bfe53f8614e3cd4a0f13e327https://coursera.org/verify/XXXXXXX"
          logos={[
            <CourseraLogo key="coursera" className="w-14 h-4" />,
            <MetaLogo key="meta" className="w-8 h-8" />,
            <ReactLogo key="react" className="w-8 h-8" />,
          ]}
          certificate={true}
        />
        <Card
          img={VersionControlCERTIFICATE}
          title="Meta Front-End Version Control Certificate"
          subTitle="Completed Meta Front-End Developer Professional Certificate"
          longSubTitle="This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies."
          demoLink="https://www.coursera.org/account/accomplishments/verify/GXNKENO5DEZM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
          certificate={true}
          logos={[
            <CourseraLogo key="coursera" className="w-14 h-4" />,
            <MetaLogo key="meta" className="w-8 h-8" />,
            <GitLogo key="git" className="w-8 h-8" />,
            <GitHubLogo key="github" className="w-8 h-8" />,
          ]}
        />
        <Card
          img={ProgrammingWithJavaScriptCERTIFICATE}
          title="Meta Front-End Programming with JavaScript Certificate"
          subTitle="Completed Meta Front-End Developer Professional Certificate"
          longSubTitle="This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies."
          demoLink="https://coursera.org/share/c4a652904936063319b70a3c6a2ec2c2"
          certificate={true}
          logos={[
            <CourseraLogo key="coursera" className="w-14 h-4" />,
            <MetaLogo key="meta" className="w-8 h-8" />,
            <JsLogo key="git" className="w-8 h-8" />,
          ]}
        />
        <Card
          img={IntroductionToFrontEndDevelopmentCERTIFICATE}
          title="Meta Introduction to Front-End Development Certificate"
          subTitle="Completed Meta Front-End Developer Professional Certificate"
          longSubTitle="This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies."
          demoLink="https://coursera.org/share/463d083ff7845b1de53b5df5d5cda7fd"
          certificate={true}
          logos={[
            <CourseraLogo key="coursera" className="w-14 h-4" />,
            <MetaLogo key="meta" className="w-8 h-8" />,
            <HtmlLogo key="git" className="w-8 h-8" />,
            <CssLogo key="git" className="w-8 h-8" />,
            <BootstrapLogo key="git" className="w-8 h-8" />,
          ]}
        />
      </div>
    </section>
  );
};

export default Certificates;
