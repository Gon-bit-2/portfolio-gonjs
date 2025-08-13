import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="flex-center w-full flex-col gap-7 bg-black-300 py-10 md:gap-10">
      <img
        src="/images/logo.png"
        alt="logo"
        className="size-7 object-cover object-center"
      />
      <div className="flex items-center gap-8 md:gap-16">
        {footerIconsList.map((icon, index) => (
          <div
            className="cursor-pointer transition-all duration-700 hover:-translate-y-5"
            key={index}
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="size-8 md:size-10"
            />
          </div>
        ))}
      </div>
      <p className="font-regular text-sm md:text-lg">
        2025 &#169; All rights reserved
      </p>
    </div>
  );
};
export default Footer;
