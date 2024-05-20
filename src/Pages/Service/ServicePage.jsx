import ServiceHero from "./ServiceHero";
import Services from "./Services";

function ServicePage() {
    return ( 
        <div className="bg-DarkPurple py-20 sm:py-16 md:py-10 lg:py-5">
        <ServiceHero/>
        <Services />
        </div>
     );
}

export default ServicePage;