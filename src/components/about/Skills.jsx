import React from "react";

const skillsContent = [
  { skillClass: "p75", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "NODE" },
  { skillClass: "p40", skillPercent: "40", skillName: "PHP" },
  { skillClass: "p40", skillPercent: "40", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p50", skillPercent: "50", skillName: "POSTGRESQL" },
  { skillClass: "p65", skillPercent: "65", skillName: "MSSQL" },
  { skillClass: "p50", skillPercent: "50", skillName: "MYSQL" },
];

const Skills = () => {
  return (
    <>
    <h1 style={{color: "red", textAlign: "center"}}>Think of something else for this section</h1>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
