import aboutMe from "../../../assets/Images/aboutMeSectImage.svg";
function AboutSect() {
  return (
    <section className="flex flex-col justify-center items-center text-DarkPurple bg-White px-5 md:px-10 pt-8 gap-8 lg:gap-5 dark:text-DarkPurple dark:bg-White ">
      <div className="flex gap-2 font-bold">
        <h2 className="text-DarkPurple dark:text-DarkPurple">About</h2>
        <h2 className="text-Yellow dark:text-Yellow">Me</h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse sm:mx-10 md:mx-5 md:gap-8 lg:mx-40 justify-center items-center gap-8  ">
        <div className="md:w-2/5  md:flex md:justify-end ">
          <img
            src={aboutMe}
            alt="an halo behind duyilemi"
            width={250}
            height={250}
            className=" w-80 lg:w-full"
          />
        </div>
        <div className="md:w-3/5 ">
          <p className="text-DarkPurple dark:text-DarkPurple">
            I am a Dedicated, Goal-oriented and forward thinking community
            manager with 3+ years experience in coordinating projects from
            ideation to the implementation phase and subsequent addition of
            utilities in a fast-paced and competitive market.
            <br />
            Excel at community relations, event management, trend analysis and
            expansion of loyal client base with in-depth knowledge of various
            social media channels and strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSect;
