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
import filmPic1 from "@/public/images/filmPic1.jpg";
import filmPic from "@/public/images/filmPic.jpg";
import aiPic from "@/public/images/aiPic.jpg";

const Certificates = () => {
  return (
    <section id="certificates" className="my-20">
      <Tittle text="My" highlightedText="Certificates" bgText="Certificates" />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
       justify-items-center lg:justify-center my-10"
      >
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
        <Card
          img={aiPic}
          title="100 hour course in Introduction to AI By UNRWA"
          subTitle="100-hour course in Introduction to AI, UNRWA Grade: Excellent."
          longSubTitle="Completed a 100-hour “Introduction to AI” course through UNRWA, earning an Excellent grade. The course covered fundamental AI concepts, basic algorithms, and practical applications, providing a strong foundation in artificial intelligence principles"
          certificate={true}
        />
        <Card
          img={filmPic}
          title="Winner in a video competition organized by Dar Al-Fikr"
          subTitle="Winner in a video competition organized by Dar Al-Fikr, Damascus, 2019"
          longSubTitle="Recognized in a video competition organized by Dar Al-Fikr in Damascus (2019), highlighting creativity, visual storytelling, and video production skills — Sponsored by the Syrian Arab Republic, Ministry of Culture, Zebra (Open Your Imagination), Class Mabed, and YE Media."
          certificate={true}
        />
        <Card
          img={filmPic1}
          title="Certificate in Short Film & Animation"
          subTitle="Visual storytelling, video editing, and basic motion design."
          longSubTitle="Earned a certificate in Short Film & Animation, covering principles of cinematography, Photoshop, Premiere Pro, video editing, and basic animation techniques. Developed skills in visual storytelling, motion, and creative content production, enhancing both technical and artistic abilities."
          certificate={true}
        />
      </div>
    </section>
  );
};

export default Certificates;
