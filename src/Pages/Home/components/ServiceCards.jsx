import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shilling from "../../../assets/Icons/shillingServices.svg";
import management from "../../../assets/Icons/communityManagementService.svg";
import tutor from "../../../assets/Icons/tutoringServices.svg";

function ServicesCards() {
  const [servicesCards, setServicesCards] = useState([
    {
      image: shilling,
      alt: "shilling service",
      title: "Shilling",
      description:
        "As a professional shiller I help promote services within the cryptocurrency communities to raise awareness and interest in a specific token via targeted advertising and engagement.",
      id: 1,
    },
    {
      image: management,
      alt: "community management service",
      title: "Community Management",
      description:
        "Our community management service offers comprehensive support for cryptocurrency projects. From fostering engagement and moderating discussions to creating and curating valuable content.",
      id: 2,
    },
    {
      image: shilling,
      alt: "crypto trading service",
      title: "Crypto Trading",
      description:
        "At our crypto trading service, we actively engage in the dynamic world of buying, selling, and exchanging cryptocurrencies to help clients achieve their financial goals.",
      id: 3,
    },
    {
      image: tutor,
      alt: "tutoring services",
      title: "Tutor",
      description:
        "At our crypto tutoring service, we're dedicated to guiding you through the intricate world of cryptocurrencies and blockchain technology.",
      id: 4,
    },
  ]);

  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const timers = servicesCards.map(
      (_, index) =>
        setTimeout(() => {
          setShowCards((prev) => [...prev, servicesCards[index]]);
        }, (index + 1) * 500) // Delay each card by 1 second
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [servicesCards]);

  return (
    <section className="bg-DarkPurple flex flex-col items-center justify-center gap-10 py-20 mx-5 sm:mx-10 md:mx-20 lg:mx-40 ">
      <h2>Services</h2>
      <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {showCards.map((serviceCard, index) => (
          <section
            className={`flex flex-col flex-1 gap-5 glass-container bg-Yellow bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl py-6 px-4 md:gap-5 sm:px-10 animated-card delay-${
              index + 1
            }`}
            key={serviceCard.id}
          >
            <div>
              <img
                src={serviceCard.image}
                alt={serviceCard.alt}
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
            <div className="w-full">
              <h3 className="leading-10 mb-5">{serviceCard.title}</h3>
              <p className="flex-grow lg:leading-7">
                {serviceCard.description}
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <Link to="/services" target="_top" rel="noopener noreferrer">
                <button className="TxtBtn px-0">Know more</button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default ServicesCards;
