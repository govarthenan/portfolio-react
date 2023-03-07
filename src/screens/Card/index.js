import React from "react";
import cardPic from "../assets/square.jpg";
import "./index.css";

function AboutMe() {
  return (
    <div className="column is-4 is-fullheight m-5">
      <div className="card" id="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img className="is-rounded" src={cardPic} alt="Profile image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Govarthenan Rajadurai</p>
              <p className="subtitle is-6">Data Scientist</p>
              {/* Social Media Icons */}
              <span>
                <span className="icon mx-4 ">
                  <a href="https://www.github.com/govarthenan"><i className="fas fa-2x fa-brands fa-github" /></a>
                </span>
                <span className="icon mx-4">
                  <a href="https://www.kaggle.com/govarthenanrajadurai"><i className="fas fa-2x fa-brands fa-kaggle" /></a>
                </span>
                <span className="icon mx-4">
                  <a href="https://www.linkedin.com/in/govarthenan/"><i className="fas fa-2x fa-brands fa-linkedin" /></a>
                </span>
                <span className="icon mx-4">
                  <a href="mailto:govarthenan@gmail.com"><i className="fas fa-2x fa-solid fa-envelope" /></a>
                </span>
              </span>
            </div>
          </div>
          <div className="content">
            <p>Hello there!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
