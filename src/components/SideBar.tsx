import { useState } from "react";
import { navItems } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(".side-bar-bg", {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
      });
      tl.to(
        ".side-bar-item",
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.inOut",
        },
        "<",
      );
    } else {
      tl.to(".side-bar-bg", {
        x: "100%",
        opacity: 0,
        ease: "power2.inOut",
      });
      tl.to(".side-bar-item", {
        opacity: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <div className="fixed top-7 right-5 z-[100]" onClick={toggleSideBar}>
        <img src="images/menu-icon.png" alt="menu" />
      </div>
      <div className="side-bar-bg fixed z-[100] h-dvh w-screen -translate-x-[100%]">
        <div className="m-5 flex justify-end" onClick={toggleSideBar}>
          <img src="images/x.png" alt="close" />
        </div>
        <div className="mt-20 px-10">
          <div className="flex flex-col items-center gap-20">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="side-bar-item cursor-pointer opacity-0 transition-all duration-700 hover:underline"
              >
                <a
                  className="gradient-title text-2xl font-bold"
                  href={item.href}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
