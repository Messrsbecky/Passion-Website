import MainHero from "./components/MainHero";
import AboutSect from "./components/AboutSect";
import ServicesCards from "./components/ServiceCards";
import Triangle from "./components/Triangle";
import Footer from "../../Components/Footer";
function HomePage() {
  return (
    <div className="bg-DarkPurple">
      <MainHero />
      <Triangle />
      <AboutSect />
      <ServicesCards />
    </div>
  );
}

export default HomePage;
