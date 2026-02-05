import Card from "../../ui/Cards/Card";
import Tittle from "../../ui/Tittle";
import { certificates } from "@/src/app/data/certificates";
import { logoMap } from "@/src/app/components/icons";
import { en } from "@/src/app/i18n/en";
import ScrollFadeUp from "../../ui/ScrollFadeUp";

const Certificates = () => {
  return (
    <section id="certificates" className="overflow-hidden my-20">
      <Tittle text="My" highlightedText="Certificates" bgText="Certificates" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:justify-center my-10">
        {certificates.map((cert) => {
          const text = en.certificates[cert.certificateKey];
          return (
            <Card
              key={cert.certificateKey}
              img={cert.img}
              title={text.title}
              subTitle={text.subTitle}
              longSubTitle={text.longSubTitle}
              demoLink={cert.demoLink}
              certificate={true}
              logos={cert.logos?.map((logo) => {
                const Logo = logoMap[logo];
                return <Logo key={logo} className="w-8 h-8" />;
              })}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
