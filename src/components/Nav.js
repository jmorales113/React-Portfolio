import React, { useEffect } from "react";
import AOS from "aos";

function Nav() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1800,
    });
  });

  return (
    <div>
      <div className="menu-toggler">
        <div className="bar half start" />
        <div className="bar" />
        <div className="bar half end" />
      </div>
      <nav className="top-nav">
        <ul className="nav-list">
          <li>
            <a href="index2.html" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;