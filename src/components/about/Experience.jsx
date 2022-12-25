import React from "react";

const experienceContent = [
  {
    year: "2022 Sep - Present",
    position: "Full-Stack Web Developer",
    compnayName: "INSCOPE LLS",
    details: `Java Script Full-Steck Web Developer`,
  },
  {
    year: "2021 Jul- 2021 Sep",
    position: "Intern Web Developer",
    compnayName: "INSCOPE LLS",
    details: `Java Script Full-Steck Web Developer Intern`,
  },
  {
    year: "2016 Sep - 2018 Dec",
    position: "Cashear",
    compnayName: "Fast Credit Capital UCO",
    details: ``,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
