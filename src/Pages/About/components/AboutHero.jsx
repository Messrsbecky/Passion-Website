import aboutHeroImage from "../../../assets/Images/aboutImage.svg";
import arrow from "../../../assets/Images/aboutArrow.svg";
import smallArrow from "../../../assets/Images/aboutArrowSmall.svg";
function AboutHero() {
  return (
    <header className="bg-DarkPurple py-10 flex flex-col md:flex-row-reverse justify-center items-center text-center md:gap-0 lg:items-center">
      <div className="flex items-center justify-center md:w-2/5">
        <img src={aboutHeroImage} alt="duyilemi ojo-uyi smiling" width={400} className="w-full" />
      </div>
      <div className="flex flex-col md:w-3/5 md:flex-col-reverse">
        <div className="hidden md:flex justify-end items-end ">
          <img src={arrow} alt="arrow" width={300} className=" w-full pl-10"/>
        </div>
        <div className=" mx-auto md:hidden">
          <img src={smallArrow} alt="" width={68} className="w-full" />
        </div>
        <div className="flex flex-col gap-2 md:text-start  md:mr-10 md:w-4/5 lg:w-4/6">
          <h1>Hi there!</h1>
          <p className="">
            Fueled by a passion for anything crypto, i will like to formally
            introduce myself, journey, career and growth.
          </p>
        </div>
      </div>
    </header>
  );
}

export default AboutHero;
