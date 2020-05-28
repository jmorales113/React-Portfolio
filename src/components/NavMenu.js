import React from "react";
import { bool } from "prop-types";

const NavMenu = ({ open }) => {
  return (
    <nav className="top-nav" open={open}>
      <ul className="nav-list">
        <li>
          <a href="index.html" className="nav-link">
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
  );
};

NavMenu.propTypes = {
  open: bool.isRequired,
};

export default NavMenu;
