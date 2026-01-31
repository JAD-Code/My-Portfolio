import CirclesContainer from "./CirclesContainer";
import Tittle from "../../ui/Tittle";

const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden">
      <div className="container mx-auto">
        <Tittle text="My" highlightedText="Skills" bgText="SKILLS" />

        <div className="mt-10">
          <CirclesContainer />
        </div>
      </div>
    </section>
  );
};

export default Skills;
