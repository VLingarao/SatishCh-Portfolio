import React from "react";
import "../styles/About.css";
import aboutimg from '../assets/manwithlaptop.png';
function About() {
  return (
    <div className="main-container" id="card-main-container" name="about">
      <div className="card-container">
        <div className="img-container">
          <img src={aboutimg} />
        </div>
        <div className="div-description">
          <h1>
            <span className="spam-tag">About</span> Me!!
          </h1>
          <p>
            
As a passionate and creative graphic designer, I specialize in transforming ideas into visually compelling designs. With a strong foundation in digital and print media, I excel at creating impactful visuals that resonate with audiences. My dedication lies in delivering high-quality, innovative designs that enhance user engagement and brand identity. I thrive on challenges, always seeking opportunities to refine my skills and explore new design trends. Collaborating effectively with teams, I foster a positive and innovative environment that drives creative excellence. My goal is to redefine the design landscape by continuously pushing the boundaries of artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
