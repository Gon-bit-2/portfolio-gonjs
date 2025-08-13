import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  const { progress, total } = useProgress();

  useGSAP(() => {
    if (total === 20 && progress === 100) {
      gsap.to(".loader-screen", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [progress]);

  return (
    <div className="loader-screen fixed top-0 left-0 z-[100] h-dvh w-screen bg-black-100">
      <div className="flex-center h-full w-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="gradient-title absolute right-10 bottom-10 text-7xl leading-none font-bold text-white-50">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
