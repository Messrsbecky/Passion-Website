import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Images/passionLogo.svg";
import menu from "../assets/Icons/menu.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mx-auto flex items-center justify-between p-4 sm:px-10 md:px-20 lg:px-40">
      <div className="mr-auto">
        <NavLink to="/">
          <img src={logo} alt="passion logo" width={100} height={100} />
        </NavLink>
      </div>
      <div className="flex">
        <div className="hidden ml-10 md:flex pl-2 py-2 ">
          <ul className="flex justify-between lg:gap-5 space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-lg active:font-bold active:text-Yellow lg:text-xl"
                exact
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg active:font-bold active:text-Yellow lg:text-xl"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className=" text-lg active:font-bold active:text-Yellow lg:text-xl"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="text-lg active:font-bold active:text-Yellow lg:text-xl"
                onClick={toggleMenu}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="flex p-2 rounded-lg hover:border hover:border-Yellow active:bg-Yellow active:border active:border-Yellow md:hidden"
          onClick={toggleMenu}
        >
          <img src={menu} alt="menu" width={24} height={24} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-DarkPurple shadow-lg rounded-lg w-2/3 h-60 z-50 md:hidden">
          <ul className="flex flex-col items-center justify-center p-4 space-y-2 gap-5 w-full h-full">
            <li>
              <NavLink
                to="/"
                className="text-lg active:font-bold active:text-Yellow block w-full"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg active:font-bold active:text-Yellow block w-full"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-lg active:font-bold active:text-Yellow block w-full"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="text-lg active:font-bold active:text-Yellow block w-full"
                onClick={toggleMenu}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
