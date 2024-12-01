import React from "react";
import "../styles/Project.css";
import Carousel from 'react-bootstrap/Carousel';

import itsmeimg from '../assets/amanwithlapto.png';

import project1 from "../assets/motionposter.png"
import project2 from "../assets/poster01.jpg"
import project3 from "../assets/poster03.png"
import project4 from "../assets/motionposter02.png"
import project5 from "../assets/poster04.png"
import project6 from "../assets/poster02.jpg"
import project7 from "../assets/poster06.png"
import project8 from "../assets/poster05.png"

function Project() {

  const projects = [
    {
      img: project1,
      name: "Motion Pictures",
    },
    {
      img: project2,
      name: "Construction Poster",
    },
    {
      img: project3,
      name: "Digital Marketing",
    },
    {
      img: project4,
      name: "Motion Pictures",
    },
    {
      img: project8,
      name: "Posters",
    },
    {
      img: project5,
      name: "Digital Marketing",
    },
    {
      img: project6,
      name: "Construction Poster",
    },
    {
      img: project7,
      name: "Posters",
    },
  ];

  return (
    <div className="project-div-main" id="project-div-main" name="projects">
      <div className="project-scend-div-container">
        <div className="project-card-text-container">
          <h1>
            <span className="project-div-span">Proje</span>cts
          </h1>
          <div className="carousel-div">
            <Carousel>
              {projects.map((project, index)=>(
                 <Carousel.Item key={index} interval={1000}>
                 <div className="carousels-data-continer">
                   <div className="carousel-img-div">
                     <img src={project.img} alt={project.name} />
                   </div>
                   <h3>{project.name}</h3>
                   <div className="buttons-continer">
                     <a href={"https://drive.google.com/drive/folders/1f83zZ6pdH8KEsMs2Hw2EDXqv4s8irkN4"} target="_blank" style={{marginTop:"10px"}}>
                       <button className="carousels-button-02">Live Demo</button>
                     </a>
                   </div>
                 </div>
               </Carousel.Item>
              ))}
              </Carousel>
          </div>

        </div>

        <div className="project-pics-div">
          <img src={itsmeimg} alt="itsmeimg" />
        </div>
      </div>
    </div>
  );
}

export default Project;

