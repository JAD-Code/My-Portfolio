import { projects } from "@/src/app/data/projects";
import { logoMap } from "@/src/app/components/icons";
import Card from "../../ui/Cards/Card";
import Tittle from "../../ui/Tittle";
import { en } from "@/src/app/i18n/en";

const Projects = () => {
  return (
    <div id="projects">
      <Tittle text="My" highlightedText="Projects" bgText="PROJECTS" />
      <div className="w-full overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10">
        {projects.map((project) => {
          const texts = en.projects[project.projectKey];
          return (
            <Card
              key={project.projectKey}
              img={project.img}
              videoSrc={project.videoSrc}
              title={texts.title}
              subTitle={texts.subTitle}
              longSubTitle={texts.longSubTitle}
              demoLink={project.demoLink}
              isPublic={project.isPublic}
              logos={project.logos?.map((logo) => {
                const Logo = logoMap[logo];
                return <Logo key={logo} className="w-8 h-8" />;
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
