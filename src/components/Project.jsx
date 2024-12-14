import React from "react";
import "../styles/Project.css";
import Carousel from "react-bootstrap/Carousel";

import pro01 from "../assets/projects/poster01.png";
import pro02 from '../assets/projects/ccodussehra.jpeg';
import pro03 from '../assets/projects/ccoguntur.jpg';
import pro04 from '../assets/projects/ccokidsdayhyd.jpg';
import pro05 from '../assets/projects/expertdasara.jpg';
import pro06 from '../assets/projects/fashion.jpg';
import pro07 from '../assets/projects/fusion.jpg';
import pro08 from '../assets/projects/growth.jpg';
import pro09 from '../assets/projects/invixadd.jpg';
import pro10 from '../assets/projects/invixbottle.jpg';
import pro11 from '../assets/projects/invixdesign.jpg';
import pro12 from '../assets/projects/invixmensday.jpg';
import pro13 from '../assets/projects/invixzero.jpg';
import pro14 from '../assets/projects/kovela.jpg';
import pro15 from '../assets/projects/kovelatwo.jpg';
import pro16 from '../assets/projects/mangobottle.jpg';
import pro17 from '../assets/projects/okinawa.jpg';
import pro18 from '../assets/projects/redmirchibottle.jpg';
import pro19 from '../assets/projects/thanksgiving.jpg';
import pro20 from '../assets/projects/tomatobottile.jpg';

function Project() {
  const projects = [
    { img: pro01},
    { img: pro02},
    { img: pro03},
    { img: pro04},
    { img: pro05},
    { img: pro06},
    { img: pro07},
    { img: pro08},
    { img: pro09},
    { img: pro10},
    { img: pro11},
    { img: pro12},
    { img: pro13},
    { img: pro14},
    { img: pro15},
    { img: pro16},
    { img: pro17},
    { img: pro18},
    { img: pro19},
    { img: pro20},
  ];

  return (
    <div className="project-div-main" id="project-div-main" name="projects">
      <div className="project-card-text-container">
        <h1>
          <span className="project-div-span">Proje</span>cts
        </h1>
        <div className="carousel-div">
          <Carousel>
            {projects.map((project, index) => (
              <Carousel.Item key={index} interval={1000}>
                <div className="carousels-data-container">
                  <div className="carousel-img-div">
                    <img src={project.img} alt={project.name} />
                  </div>
                  {/* <h3>{project.name}</h3> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Project;

