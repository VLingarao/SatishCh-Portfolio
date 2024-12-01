import Photoshop from '../assets/adobe-photoshop.png';
import ill from '../assets/adobe-illustrator.png';
import pre from '../assets/adobe-premiere-pro.png';

import "../styles/Skills.css";

function Skills() {
  const skills = [Photoshop,ill,pre];
  return (
    <div className="div-skills animate__animated animate__bounce" name="skills">
      <div className="div-main-container">
        <div className="tag-heading">
          <h1><span>Skil</span>ls</h1>
        </div>
        <div className="imgs-main">
          {skills.map((value, index) => (
            <div key={index} className="pic-container">
              <img src={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

// className="skills-main-container"

