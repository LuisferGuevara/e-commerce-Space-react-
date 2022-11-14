import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.scss";
import { useSelector } from "react-redux";
const Footer = () => {
  const { showClass } = useSelector((state) => state.footer);
  return (
    <footer>
      <div className={showClass}>
        <ul className="footer__menu--list">
          <li>
            <a href="nowhere">Sponsors</a>
            <input type="checkbox" id="footer__btn1" className="footer__btn1" />
            <label htmlFor="footer__btn1" className="footer__btn1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="chevron"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </span>
            </label>
            <ul className="footer__sublist footer__sublist--1">
              <li>
                <NavLink to="https://www.spacex.com/" target="_blank">
                  SPACE X
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.meta.com/" target="_blank">
                  META
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.nasa.gov/" target="_blank">
                  NASA
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="nowhere">Terms and Use</a>
            <input type="checkbox" id="footer__btn2" className="footer__btn2" />
            <label htmlFor="footer__btn2" className="footer__btn2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="chevron"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </span>
            </label>
            <ul className="footer__sublist footer__sublist--2">
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Cookies</a>
              </li>
              <li>
                <a href="/">Policy</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="nowhere">Discover</a>
            <input type="checkbox" id="footer__btn3" className="footer__btn3" />
            <label htmlFor="footer__btn3" className="footer__btn3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="chevron"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </span>
            </label>

            <ul className="footer__sublist footer__sublist--3">
              <li>
                <a href="/">VR Experience</a>
              </li>
              <li>
                <a href="/">EXPLORE WITH US</a>
              </li>
              <li>
                <a href="/">II UNIVERSE WAR</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
