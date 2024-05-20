import React, { useState } from "react";
import no1 from "../../../assets/Icons/no1.svg";
import no2 from "../../../assets/Icons/no2.svg";
import no3 from "../../../assets/Icons/no3.svg";
import no4 from "../../../assets/Icons/no4.svg";
import no5 from "../../../assets/Icons/no5.svg";
import no6 from "../../../assets/Icons/no6.svg";
import no7 from "../../../assets/Icons/no7.svg";
import no8 from "../../../assets/Icons/no8.svg";
import no9 from "../../../assets/Icons/no9.svg";

function Skills() {
  const [skills, setSkills] = useState([
    { image: no1, alt: "first skill", name: "Branding", id: 1 },
    { image: no2, alt: "second skill", name: "Leadership", id: 2 },
    { image: no3, alt: "third skill", name: "Community Manager", id: 3 },
    { image: no4, alt: "fourth skill", name: "Trend analysis", id: 4 },
    { image: no5, alt: "fifth skill", name: "Networking", id: 5 },
    { image: no6, alt: "sixth skill", name: "Data analysis", id: 6 },
    { image: no7, alt: "seventh skill", name: "Event coordination", id: 7 },
    { image: no8, alt: "eight skill", name: "Time management", id: 8 },
    { image: no9, alt: "ninth skill", name: "Creativity", id: 9 },
  ]);

  return (
    <section className="flex flex-col items-center justify-center py-10 gap-7 my-5 mb-20">
      <div>
        <h2>Skills</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container mx-auto p-4 items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 ">
        {skills.map((skill) => (
          <div className="" key={skill.id}>
            <div className="flex items-center gap-2  ">
              <div>
                <img src={skill.image} alt={skill.alt} width={56} height={56} />
              </div>
              <div>
                <p>{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
