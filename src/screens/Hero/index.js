import React from "react";
import heroImg from "../assets/hero.png";
import "./index.css";

function AboutMe() {
  return (
    <section className="hero is-danger is-fullheight m-0">
      <div className="hero-body m-0" id="intro">
        <div className="columns">
          <div className="column">
            <p className="title">
              Hi, I'm Gova!
              I wonder what led you here? 🤔
            </p>
            <p className="subtitle">
              I'm a young data enthusiast who believes that data, in the right hands, has the ability
              to
              change the world for the better.
            </p>
            <div className="tags are-large">
              <span className="tag is-primary">#dataScience</span>
              <span className="tag is-info">#scientificComputing</span>
              <span className="tag is-warning">#FOSS</span>
              <span className="tag">#linux</span>
            </div>
          </div>
          <div className="column">
            <figure className="image">
              <img className="is-rounded" src={heroImg} alt="Profile image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
