import React from "react";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="exp-div-container" name="experience">
      <div className="exp-secnd-div">
        <div className="exp-head-text-div">
          <h1>
            <span>Exper</span>ience
          </h1>
        </div>
        <div className="exp-description-div">
          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>Apex solution</h1>
              <h3>Data Entry</h3>
              <ul>
                <li>
                In-depth understanding of data entry workflows and processes, with proficiency in mastering tools and adapting to evolving requirements.
                </li>
                <li>
                Gained valuable industry knowledge and expertise through active participation in diverse tasks, guided by experienced mentors to ensure accuracy and efficiency in every detail.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={"https://media.licdn.com/dms/image/v2/C510BAQEm41bmo0ltIw/company-logo_200_200/company-logo_200_200/0/1630619012004?e=2147483647&v=beta&t=5QKfBGddRMyWtRqkCiYTLk7T0tHHa3BKjwJCJgJd0wo"} />
            </div>
          </div>
          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>Myntra</h1>
              <h3>Designing</h3>
              <ul>
                <li>
                During my one-year role as a designer, I successfully completed several projects that not only demonstrated my creativity and technical expertise but also strengthened my understanding of user-centered design, web development concepts, and responsive design practices.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ltMngzVG6vhPtrhwRnpJzjQTwReUL1aF2w&s"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
