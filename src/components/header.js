import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => (
  <header className="header" style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FAF7F0"
  }}>
    <div className="header__left" style={{
    }}>
      <h1 style={{
        margin: 0,
        fontSize: 20
      }}>
      </h1>
    </div>
    <div className="header__right">
      <ul>
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
    </div>

  </header>
)

export default Header
