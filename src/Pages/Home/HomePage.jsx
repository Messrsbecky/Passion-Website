import MainHero from "./components/MainHero";
import AboutSect from "./components/AboutSect";
import ServicesCards from "./components/ServiceCards";
import Triangle from "./components/Triangle";
function HomePage() {
  return (
    <div className="bg-DarkPurple w-full">
      <MainHero />
      <Triangle />
      <AboutSect />
      <ServicesCards />
    </div>
  );
}

export default HomePage;
