import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
      <button className="button is-medium is-danger">Personal Portfolio</button>
        <button className="button navbar-burger" data-target="navMenu">
        </button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <a className="navbar-item" href="#card">
            About Me
          </a>
          <a className="navbar-item" href="#intro">
            Intro
          </a>
        </div>
      </div>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
