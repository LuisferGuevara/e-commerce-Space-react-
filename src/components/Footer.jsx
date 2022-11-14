import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/Footer.scss"
import { useSelector } from "react-redux";
const Footer = () => {

  const { showClass } = useSelector((state) => state.footer);
  return (
    <footer className={showClass}>
        <ul className='sponsors'>
            <li><NavLink to="https://www.spacex.com/" target="_blank">SPACE X</NavLink></li>
            <li><NavLink to="https://www.meta.com/" target="_blank">META</NavLink></li>
            <li><NavLink to="https://www.nasa.gov/" target="_blank">NASA</NavLink></li>
        </ul>
        <ul className='legal'>
            <li><NavLink>Cookies</NavLink></li>
            <li><NavLink>Policy</NavLink></li>
            <li><NavLink>Privacy</NavLink></li>
        </ul>
        <ul className='meta'>
            <li><NavLink>Explore with Us</NavLink></li>
            <li><NavLink>Aliens</NavLink></li>
            <li><NavLink>II UNIVERSE WAR</NavLink></li>
        </ul>
    </footer>
  )
}

export default Footer