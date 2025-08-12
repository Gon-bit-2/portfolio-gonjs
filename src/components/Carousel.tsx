import { useGSAP } from "@gsap/react";
import { slides } from "../constants";
import { useState } from "react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevClick = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + (slides.length - 1)) % (slides.length - 1),
    );
  };
  const nextClick = () => {
    setCurrentSlide((prev: number) => (prev + 1) % (slides.length - 1));
  };
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);
  return (
    <div className="relative">
      <div className="relative h-[60vh] w-full md:h-[40vh] lg:h-[60vh]">
        <div className="absolute top-0 -left-[43vw] w-full">
          <div className="flex h-[60vh] w-full items-center gap-[3vw] md:h-[40vh] lg:h-[60vh]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slider-item relative h-full w-[60vw] flex-none overflow-hidden"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="bg-opacity-90 absolute bottom-0 left-0 h-20 w-full bg-black-300 px-5">
                  <div className="flex h-full w-full items-center justify-between">
                    <div className="flex-center gap-2">
                      <p className="text-white-50 opacity-80 md:text-2xl">
                        {index + 1}
                      </p>
                      <p className="text-white-50 opacity-80 md:text-2xl">
                        {slide.title}
                      </p>
                    </div>
                    <div className="flex-center gap-5">
                      <p className="hidden text-2xl text-white-50 opacity-80 md:block">
                        Preview Project
                      </p>
                      <img
                        className="size-7 md:size-10"
                        src="/images/arrowupright.svg"
                        alt="arrowupright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex -translate-x-5 justify-end gap-5 text-white-50 md:-translate-x-32">
        <div
          onClick={prevClick}
          className="flex-center h-12 w-12 cursor-pointer rounded-full bg-blue-50 transition-all hover:bg-pink-100 active:scale-90"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="h-5 w-5" />
        </div>
        <div
          onClick={nextClick}
          className="flex-center h-12 w-12 cursor-pointer rounded-full bg-blue-50 transition-all hover:bg-pink-100 active:scale-90"
        >
          <img src="/images/CaretRight.svg" alt="right" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
