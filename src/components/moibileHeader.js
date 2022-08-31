import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion } from "framer-motion"

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open_item: { x: '20%', opacity: 1 },
    closed_item: { x: '0%', opacity: 0 }
  }
  const sectionNames = ["Top", "News", "About", "Works", "Contact"];

  return (
    <motion.header
      className='mobile_header'
    >
      <motion.div
        className='header_container'
      >
        <motion.div
          className="header_icon"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: isOpen ? "#fff" : "rgba(15, 24, 101)" }}
        >
          {
            isOpen
              ? <FontAwesomeIcon icon={faXmark} className="menu-icon" />
              : <FontAwesomeIcon icon={faBars}      className="menu-icon"
           />
          }

        </motion.div>
        <motion.ul
          className="menu-item"
          animate={ isOpen ? 'open_item' : 'closed_item' }
          transition={{ type: "spring", stiffness: 100 }}
          variants={variants}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          style={{ color: 'white', display: 'flex',pointerEvents: isOpen ? 'auto' : 'none'}}
          >
          {
            sectionNames.map((sectionName, index) => {
            return (
              <li
                key={index}
                className="header-link"
                onClick={() => {
                  scrollTo(`#${sectionName.toLowerCase()}`);
                  setIsOpen(false);
                }}
              >{sectionName}</li>
            );
            })
          }
          <a
            href="https://www.instagram.com/papa.monkey/" target="_blank" rel="noreferrer"
            className="header-link-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </motion.ul>
      </motion.div>
    </motion.header>
  )
}

export default MobileHeader
