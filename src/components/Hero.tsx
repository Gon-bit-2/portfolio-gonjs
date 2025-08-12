import GradientSpheres from "./GradientSpheres";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-dvh border border-red-500 px-5 text-white-50 md:p-0"
    >
      <GradientSpheres
        sphere1Class={"gradient-sphere sphere-1"}
        sphere2Class={"gradient-sphere sphere-2"}
      />
      <div className="flex-center h-full w-full">
        <div className="relative container h-full w-full">
          <div className="mt-20 md:mt-40">
            <p className="text-base font-medium md:text-2xl">
              👋 Hey, I'm Here
            </p>
            <h1 className="text-5xl font-bold md:text-9xl">NGUYỄN VĂN THIỆN</h1>
            <h1 className="font-bold md:text-9xl">CREATIVE</h1>
          </div>
          <div className="absolute right-0 bottom-20 z-30 w-full">
            <div className="flex items-end justify-between">
              <div className="flex flex-col items-center gap-1 md:gap-5">
                <p className="text-xs md:text-base">Explore </p>
                <img
                  className="size-7 animate-bounce"
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col items-end">
                <img src="images/shape.svg" alt="shape" />
                <h1 className="text-5xl font-bold md:text-9xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
