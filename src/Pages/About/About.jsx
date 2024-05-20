import AboutHero from "./components/AboutHero";
import MyCareer from "./components/MyCareer";
import Skills from "./components/Skills";
function About() {
  return (
    <div className="bg-DarkPurple px-10 md:px-20 lg:px-40">
      <AboutHero />
      <MyCareer />
      <Skills />
    </div>
  );
}

export default About;
