import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";

const Project = () => {
  return (
    <section className="flex-center relative h-full w-full" id="projects">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />
      <div className="relative z-10 my-20 w-full md:my-40">
        <div className="container mx-auto px-5 md:p-0">
          <TitleHeader
            title={`MY PROJECT`}
            text={`Check my recent project below for your Goal `}
            number="03"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <Carousel />
        </div>
      </div>
    </section>
  );
};
export default Project;
