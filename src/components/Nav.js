import React from "react";

function Nav() {
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
            <a href="#experience" className="nav-link">
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
