/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
// @ts-ignore
import Alien from "../models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        toggleActions: "restart none none none",
      },
    });
    //text animation
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        toggleActions: "restart none none none",
      },
    });
  }, []);
  return (
    <section id="about" className="flex-center relative px-5 md:p-0">
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className="z-10 container my-20 h-full w-full md:my-40">
        <TitleHeader
          title="About Me"
          text={`Passionate Creator, Lifelong Learner`}
          number={"01"}
        />
        <div className="mt-10 md:mt-20">
          <div className="grid grid-cols-12 gap-5 md:grid-rows-12">
            <div className="col-span-12 row-span-5 md:col-span-7">
              <div className="h-full w-full rounded-2xl bg-black-300 p-7">
                <div className="">
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="flower w-1/6 md:w-32"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="animated-text text-3xl text-blue-50 md:text-5xl">
                    David Jhonson
                  </h1>
                  <p className="animated-text mt-2 md:text-2xl">
                    I am a San francisco-based product designer with a focus on
                    web design, illustration, a visual development. I have a
                    diverse range of experience having worked across various
                    fields and industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 row-span-5 md:col-span-5">
              <div className="h-60 w-full rounded-2xl bg-[#C8D751] hover:cursor-grab md:h-full">
                <div className="h-full w-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div id="card" className="col-span-12 row-span-3 md:col-span-6">
              <div className="h-full w-full rounded-2xl bg-black-300 p-7">
                <div className="flex h-full flex-col justify-center gap-2">
                  <h1 className="gradient-title animated-text text-2xl font-medium md:text-3xl">
                    FullStack Developer
                  </h1>
                  <p className="animated-text max-w-96 md:text-2xl">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>
            <div id="card" className="col-span-12 row-span-3 md:col-span-6">
              <div className="h-full w-full rounded-2xl bg-black-300 p-7">
                <div className="flex h-full flex-col justify-center gap-2">
                  <h1 className="gradient-title animated-text text-2xl font-medium md:text-3xl">
                    Web Design & Dev
                  </h1>
                  <p className="animated-text max-w-96 md:text-2xl">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>
            <div id="card" className="col-span-12 row-span-4 md:col-span-4">
              <div className="h-full w-full rounded-2xl bg-black-300 p-7">
                <div className="flex h-full flex-col justify-center gap-2">
                  {["BE YOURSELF", "BE DIFFERENT!", "BUILD DIFFERENT!"].map(
                    (text, index) => (
                      <h1
                        key={index}
                        className="gradient-title text-3xl font-bold md:text-5xl"
                      >
                        {text}
                      </h1>
                    ),
                  )}
                </div>
              </div>
            </div>

            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="col-span-12 row-span-2 md:col-span-4">
                <div className="group h-full w-full cursor-pointer rounded-2xl bg-black-300 p-7">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title ms-5 text-xl font-medium md:m-0 md:text-3xl">
                        {item.name}
                      </h1>
                    </div>
                    <div className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="scale-50 md:scale-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
