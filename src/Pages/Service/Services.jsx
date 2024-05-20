import { useState } from "react";
import shilling from "../../assets/Icons/shillingServices.svg";
import management from "../../assets/Icons/communityManagementService.svg";
import tutor from "../../assets/Icons/tutoringServices.svg";

function Services() {
  const [services, setServices] = useState([
    {
      image: shilling,
      alt: "shilling service",
      title: "Shilling",
      shortDescription:
        "As a professional shiller I help promote services within the cryptocurrency communities to raise awareness and interest in a specific token via targeted advertising and engagement.",
      fullDescription:
        "As a professional shiller I help promote services within the cryptocurrency communities to raise awareness and interest in a specific token via targeted advertising and engagement. I have a knack for helping community members see and explore the potential of crypto assets I have made my research on and endorse so they can invest in it.",
      showFullDescription: false,
      id: 1,
    },
    {
      image: management,
      alt: "community management service",
      title: "Community Management",
      shortDescription:
        "Our community management service offers comprehensive support for cryptocurrency projects. From fostering engagement and moderating discussions to creating and curating valuable content.",
      fullDescription:
        "Our community management service offers comprehensive support for cryptocurrency projects. From fostering engagement and moderating discussions to creating and curating valuable content, our experienced team ensures your community thrives. We gather feedback, facilitate growth, and provide education and support to both existing and potential community members. With our service, you can build a strong, active community around your project, fostering trust and driving long-term success.",
      showFullDescription: false,
      id: 2,
    },
    {
      image: shilling,
      alt: "Crypto trading service",
      title: "Crypto Trading",
      shortDescription:
        "At our crypto trading service, we actively engage in the dynamic world of buying, selling, and exchanging cryptocurrencies to help clients achieve their financial goals.",
      fullDescription:
        "At our crypto trading service, we actively engage in the dynamic world of buying, selling, and exchanging cryptocurrencies to help clients achieve their financial goals. Our team of experienced traders leverages in-depth market analysis, news insights, and technical indicators to make informed decisions for optimal returns. Whether you're interested in day trading, swing trading, or trend following, we tailor our strategies to match your risk tolerance and investment objectives. With a focus on effective risk management and disciplined execution, we strive to navigate the complexities of the crypto market to generate profits for our clients.",
      showFullDescription: false,
      id: 3,
    },
    {
      image: tutor,
      alt: "tutoring services",
      title: "Tutor",
      shortDescription:
        "At our crypto tutoring service, we're dedicated to guiding you through the intricate world of cryptocurrencies and blockchain technology.",
      fullDescription:
        "At our crypto tutoring service, we're dedicated to guiding you through the intricate world of cryptocurrencies and blockchain technology. Our experienced tutors offer personalized sessions, workshops, and online courses designed to equip you with essential knowledge and skills. Learn how to securely trade, invest, and manage cryptocurrencies, grasp the fundamentals of blockchain technology, and stay updated on industry trends. With our expert guidance, you'll gain the confidence to navigate the crypto landscape effectively and make informed decisions.",
      showFullDescription: false,
      id: 4,
    },
  ]);

  const toggleDescription = (id) => {
    if (window.innerWidth < 768) {
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === id
            ? { ...service, showFullDescription: !service.showFullDescription }
            : service
        )
      );
    }
  };

  return (
    <section className="bg-DarkPurple flex flex-col items-center justify-center gap-10 py-14 md:px-20 lg:px-40">
      <h2>Services</h2>
      <div className="flex flex-wrap gap-6">
        {services.map((service) => (
          <section
            className="flex flex-col gap-5 glass-container bg-Yellow bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl md:items-center md:text-center p-5 mx-5 md:py-10"
            key={service.id}
          >
            <div>
              <img
                src={service.image}
                alt={service.alt}
                width={64}
                height={64}
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col gap-5 py-5">
              <h3>{service.title}</h3>
              <p
                className={`md:hidden ${
                  service.showFullDescription ? "hidden" : "block"
                }`}
              >
                {service.shortDescription}
              </p>
              <p
                className={` md:block ${
                  service.showFullDescription ? "block" : "hidden"
                }`}
              >
                {service.fullDescription}
              </p>
            </div>
            <div className="flex items-center">
              <button
                className="TxtBtn px-2 md:hidden"
                onClick={() => toggleDescription(service.id)}
              >
                {service.showFullDescription ? "Show less" : "Know more"}
              </button>
              <button className="btn p-0 hidden md:flex">
                <a
                  href="mailto:ojouyiduyilemi@gmail.com"
                  target="_self"
                  rel="noopener noreferrer"
                  className="btn hover:text-white active:text-[#283b56] focus:[#283b56]"
                >
                  Hire me
                </a>
              </button>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Services;
