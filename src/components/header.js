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
          <a
            style={{
              width: "200px",
              padding: "8px",
              backgroundColor: "#0f1865",
              color: "#fff",
              fontSize: "16px",
              display: 'inline-block',
              textAlign: 'center',
              margin: "0 30px",
              borderRadius: "12px",
              fontWeight: "600"
            }}
            href="https://jp.mercari.com/user/profile/536948409">ご購入はこちら</a>
        </ul>
      </motion.div>
    </header>
  )
}

export default Header
