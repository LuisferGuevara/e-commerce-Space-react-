import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.scss";
import { useSelector } from "react-redux";
import Logout from "./Logout";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const { displayClass } = useSelector((state) => state.header);

  return (
    <header className={displayClass}>

      <Link to={"corp"}>
        <p>CAPSULE CORP.</p>
      </Link>

      <button onClick={toggleMenu} className="header-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="header-svg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className={`header-nav ${menu ? "is--active" : ""}`}>
        <ul className="header-ul">
          <li className="header-li">
            <NavLink to="corp" activeclassname={"active"}>
              Home
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink to="planets" activeclassname={"active"}>
              Planets
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink to="galaxies" activeclassname={"active"}>
              Galaxies
            </NavLink>
          </li>
          <li className="header-li">
            <NavLink to="admin" activeclassname={"active"}>
              VIP
            </NavLink>
          </li>
          <li className="header-li">
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
