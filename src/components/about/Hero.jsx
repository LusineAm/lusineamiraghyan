import React from "react";
import img from "../../assets/img/hero/lusineam.jpg";
import imgMobile from "../../assets/img/hero/lusineam-mob.jpg";

const content = {
  image: img,
  mobileImage: imgMobile,
  titleName: "Lusine Amiraghyan",
  designation: "Full-Stack Developer",
  longDescription: `
      I'm a Full-Stack developer, oriented in React JS and Node JS technologies.
      I like learning new and better ways to create seamless user experiences
      with clean, efficient, and scalable code. I am passionate about building
      excellent software that improves the lives of those around me.
   `,
  shortDescription: `
  I started my career as a Front-end, and continued as a Full-stack developer.
  I consider offers as a Front-End or Full-Stack developer. Also i open for a freelance work.
    `,
};

const Hero = () => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + content.image})`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={content.mobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="it's me"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {content.titleName}.<span>{content.designation}</span>
            </h1>
            <p className="open-sans-font">{content.longDescription}</p>
            <p className="open-sans-font">{content.shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
