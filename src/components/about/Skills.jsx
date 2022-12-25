import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const skillsContent = [
  { skillPercent: "75", skillName: "HTML" },
  { skillPercent: "70", skillName: "CSS" },
  { skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillPercent: "89", skillName: "TYPESCRIPT" },
  { skillPercent: "80", skillName: "REACT JS" },
  { skillPercent: "65", skillName: "NODE JS" },
  { skillPercent: "40", skillName: "PHP" },
  { skillPercent: "40", skillName: "WORDPRESS" },
  { skillPercent: "50", skillName: "JQUERY" },
  { skillPercent: "50", skillName: "POSTGRESQL" },
  { skillPercent: "65", skillName: "MSSQL" },
  { skillPercent: "50", skillName: "MYSQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="skills col-9 col-md-3 mb-3">
          <ProgressBar
            className="bar"
            completed={val.skillPercent}
            customLabel={`${val.skillPercent} %`}
            bgColor="#ffb400"
            height="35px"
            borderRadius="15px"
            animateOnRender={true}
            transitionDuration="10"
            transitionTimingFunction="ease"
          />
          <h6 className="open-sans-font mt-2">{val.skillName}</h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
