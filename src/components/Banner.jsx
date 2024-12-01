import React from "react";
import "../styles/Banner.css";
import Typing from 'react-typing-effect';
import BannerOne from "../assets/bannerpixletwo.jpg"


import resume from '../assets/satishresume.pdf';
function Banner() {
  return (
    <div className="frist-div-container">
      <div className="secnd-div-container">
        <div className="third-heading-div">
          <div className="fourth-div-heading">
            <div className="content-div-heading">
              <h1>Hello!! I'm</h1>
            </div>
            <div className="content-div-heading-2">
              <h1>
                <h1>
                  <span className="name-heading-span">NAGA SATISH</span>
                 <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>
                  <Typing
                      text={['Graphic designer !', 'Welcome to my site!']}
                      speed={100}
                      eraseSpeed={50}
                      eraseDelay={1000}
                      typingDelay={500}
                    />
                 </h1>
                </h1>
              </h1>
            </div>
            <div className="content-div-heading-3">
              <p>
              A visionary of digital design, I craft stunning and intuitive graphics that bring ideas to life. From concept to creation, I blend artistry and strategy to deliver visual experiences that captivate and inspire. Let’s collaborate to design the future, one masterpiece at a time.
              </p>
            </div>
          </div>

          <div className="screen-button-div-main">
            <button className="screen-button-div-1">
              <a href={resume} download={true} target="_black">Resume</a>
              </button>
            <button className="screen-button-div-2">
              <a href="mailto:satishchelluri1@gmail.com" target="_black">Hire Me!!</a>
            </button>
          </div>
        </div>
      </div>

      <div className="screen-pic-div-main">
        <div className="screen-pic-div-1">
          <div className="screen-scend-pic-div-1">
            <img src={BannerOne} />
          </div>
        </div>
        <div className="screen-scend-pic-div-2">
          <img src={"https://media.licdn.com/dms/image/D5612AQH1Ux_vhrk1iA/article-cover_image-shrink_720_1280/0/1687478101441?e=2147483647&v=beta&t=fhTeSneaDEwewGkgOOz_UOXSoyp0BkTqPj0GyPGWNVs"} />
        </div>
      </div>
    </div>
  );
}

export default Banner;


