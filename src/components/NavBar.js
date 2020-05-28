import React from "react";
import { bool, func } from "prop-types";

const NavBar = ({ open, setOpen }) => {
  return (
    <div>
      <div className="menu-toggler" open={open} onClick={() => setOpen(!open)}>
        <div className="bar half start" />
        <div className="bar" />
        <div className="bar half end" />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavBar;
