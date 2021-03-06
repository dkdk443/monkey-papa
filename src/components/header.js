import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import scrollTo from 'gatsby-plugin-smoothscroll';


const Header = () => (
  <header className='header'>
    <div className="header__left">
      <h1 style={{
        margin: 0,
        fontSize: 20
      }}>
      </h1>
    </div>
    <div className="header__right">
      <ul className="menu-item">
         <li
          className="header-link"
          onClick={() =>  scrollTo('#top')}
        >Top</li>
        <li
          className="header-link"
          onClick={() =>  scrollTo('#about')}
        >About</li>
        <li
          className="header-link"
           onClick={() =>  scrollTo('#works')}
        >Works</li>
        <li
          className="header-link"
           onClick={() =>  scrollTo('#contact')}
        >Contact</li>
        <a
          href="https://www.instagram.com/papa.monkey/" target="_blank" rel="noreferrer"
          className="header-link-icon"
        >
            <FontAwesomeIcon icon={faInstagram} />
        </a>
      </ul>
      <div className="menu">
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>
    </div>
  </header>
)

export default Header
