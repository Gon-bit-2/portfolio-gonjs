import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

const TechStack = () => {
  return (
    <div className="h-full w-full">
      <div className="my-20 w-full md:my-40">
        <div className="container mx-auto px-5 md:p-0">
          <TitleHeader
            title="TECH STACK"
            text="My Go-To Tools for Crafting Solutions"
            number="02"
          />
        </div>
        <div className="relative mt-10 md:mt-20">
          <div className="tech-stack-gradient-left-box absolute bottom-0 left-0 z-20 h-full w-36"></div>
          <div className="tech-stack-gradient-right-box absolute right-0 bottom-0 z-20 h-full w-36"></div>
          <div className="marquee h-52 overflow-hidden">
            <div className="marquee-box animate-marquee flex gap-5 md:gap-12">
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={iconsList.length + index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechStack;
