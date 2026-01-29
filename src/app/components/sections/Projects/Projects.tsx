import ReactLogo from "../../icons/ReactLogo";
import TailwindLogo from "../../icons/TailwindLogo";
import Card from "../../ui/Cards/Card";
import Tittle from "../../ui/Tittle";
import image1 from "@/public/images/image1.jpg";

const Projects = () => {
  const projectsData = [
    { id: 1, title: "My Project 1", subTitle: "Description 1..." },
    { id: 2, title: "My Project 2", subTitle: "Description 2..." },
    { id: 3, title: "My Project 3", subTitle: "Description 3..." },
    { id: 4, title: "My Project 4", subTitle: "Description 4..." },
  ];
  return (
    <div id="projects" className="py-10">
      <Tittle text="My" highlightedText="Projects" bgText="PROJECTS" />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 
     my-8 justify-items-center"
      >
        <Card
          img={image1}
          title="My Project"
          subTitle="Description goes here..."
          isPublic={false}
          logos={[<TailwindLogo key="tailwind" />, <ReactLogo key="react" />]}
        />
        <Card
          img={image1}
          title="My Project"
          subTitle="Description goes here..."
          isPublic={true}
          logos={[<TailwindLogo key="tailwind" />, <ReactLogo key="react" />]}
        />
        <Card
          img={image1}
          title="My Project"
          subTitle="Description goes here..."
          isPublic={false}
          logos={[<TailwindLogo key="tailwind" />, <ReactLogo key="react" />]}
        />
        <Card
          img={image1}
          title="My Project"
          subTitle="Description goes here..."
          isPublic={true}
          logos={[<TailwindLogo key="tailwind" />, <ReactLogo key="react" />]}
        />
      </div>
    </div>
  );
};

export default Projects;
