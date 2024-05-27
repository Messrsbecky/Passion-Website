import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/Images/heroImage.svg";

function MainHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="bg-DarkPurple flex flex-col justify-center items-center gap-14 pt-10 px-5 md:flex-row-reverse md:gap-0 md:py-10 md:px-20 lg:py-20 lg:px-40">
      <div className="flex justify-center md:justify-end lg:w-2/5 lg:gap-0">
        {isVisible && (
          <img
            src={heroImage}
            alt="Duyilemi Ojo-Uyi"
            width={900}
            className="w-3/4 sm:full h-34 rounded-full border-[#1b2a3e]"
          />
        )}
      </div>
      <div className="text-center flex flex-col gap-6 md:text-left md:w-3/5 md:gap-4 lg:w-3/5 lg:py-0 lg:my-10">
        <div className="flex flex-col gap-1">
        <h2 className="text-White dark:text-White">Hello</h2>
        <h1 className="text-Yellow dark:text-Yellow">I&#39;m Duyilemi Ojo-uyi</h1>
        </div>
        <h3 className="text-DullGold dark:text-DullGold">Shiller and Community Manager</h3>
        <div className="mt-2">
          <Link to="/services">
            <button className="btn hover:text-White">Hire me</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainHero;
