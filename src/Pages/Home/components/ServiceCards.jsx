import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import shilling from "../../../assets/Icons/shillingServices.svg";
import management from "../../../assets/Icons/communityManagementService.svg";
import tutor from "../../../assets/Icons/tutoringServices.svg";

function ServicesCards() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showCards, setShowCards] = useState([]);
  const sectionRef = useRef(null);

  const servicesCards = [
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
  ];

  const handleMouseEnter = () => {
    if (!showAnimation) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowCards(servicesCards);
      }, servicesCards.length * 500); // Total delay for all cards
    }
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleMouseEnter();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-DarkPurple dark:bg-DarkPurple flex flex-col items-center justify-center gap-10 pt-20 pb-40 mx-5 sm:mx-10 md:mx-20 lg:mx-40"
      onMouseEnter={handleMouseEnter}
    >
      <h2>Services</h2>
      <div className="service-container grid grid-cols-1  sm:auto-cols-min md:grid-cols-2 lg:grid-cols-2 gap-8">
        {showCards.map((serviceCard, index) => (
          <section
            className={`flex flex-col flex-1 gap-5 glass-container  bg-Yellow bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl py-6 px-4 md:gap-5 sm:px-10 animated-card delay-${
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
            <div className="flex items-center mt-auto hover:text-White active:text-White">
              <Link to="/services" target="_top" className="">
                <button className="TxtBtn px-0 hover:text-White active:text-White ">
                  Know more
                </button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default ServicesCards;
