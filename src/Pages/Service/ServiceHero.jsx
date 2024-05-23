
import heroBg from "../../assets/Images/serviceHeroImage.svg"
function ServiceHero() {
  
  return (
    <header className="mx-auto  bg-cover bg-center w-full text-center py-10 bg-DarkPurple dark:bg-DarkPurple" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className=" flex flex-col justify-center items-center gap-8 sm:py-5 md:py-10 px-10">
        <div className="md:w-4/5 lg:w-4/6">
          <h1>Explore the services we have to offer in the Crypto Space</h1>
        </div>
        <div>
          <button className="bg-transparent"> <a href="mailto:ojouyiduyilemi@gmail.com" target="_blank" rel="noopener noreferrer" className="btn dark:bg-Yellow hover:text-white active:text-[#283b56] focus:[#283b56]">Hire me </a> </button>
        </div>
      </div>
    </header>
  );
}

export default ServiceHero;


