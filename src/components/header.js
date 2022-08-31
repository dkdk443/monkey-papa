import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import scrollTo from 'gatsby-plugin-smoothscroll';

import { motion } from "framer-motion"

const Header = () => {
  const sectionNames = ["Top", "About", "Works", "Contact"];

  return (
    <header className='header'>
      <motion.div
        className='header_container'
        initial={{ opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="menu-item">
          {
            sectionNames.map((sectionName) => {
            return (
              <motion.li
                key={sectionName}
                className="header-link"
                onClick={() => {
                  scrollTo(`#${sectionName.toLowerCase()}`);
                }}
                 whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
              >{sectionName}</motion.li>
            );
            })
          }
          <a
            href="https://www.instagram.com/papa.monkey/" target="_blank" rel="noreferrer"
            className="header-link-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </ul>
      </motion.div>
    </header>
  )
}

export default Header
