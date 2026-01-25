import { div } from "framer-motion/client";
import CircleAnimation from "./CircleAnimation";
import CirclesContainer from "./CirclesContainer";
import Tittle from "../../ui/Tittle";

const Skills = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto">
        {/* التوسيط الآن داخلي في مكون Tittle */}
        <Tittle text="My" highlightedText="Skills" bgText="Skills" />

        <div className="mt-20">
          <CirclesContainer />
        </div>
      </div>
    </section>
  );
};

export default Skills;
