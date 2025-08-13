import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="flex-center fixed top-0 left-0 z-50 w-full px-5 md:p-0">
      <div className="container my-5 flex items-center justify-between md:my-10">
        <img
          src="/images/logo.png"
          alt="logo"
          className="size-10 object-cover object-center md:size-12"
        />
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
