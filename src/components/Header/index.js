import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {

  return (
    <div className="header">
      <div>
        <NavLink to="/">Directors</NavLink>
      </div>
      <div>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </div>
  );
};
export default Header;
