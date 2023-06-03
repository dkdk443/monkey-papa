import React from 'react';
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Top = () => {
  return (
    <div className="section" id="top">
      <div style={{
        marginRight: "64px",
      }}
        className="main-title">
        <motion.h1
          style={{
            fontSize: "32px",
            fontFamily: "Zen Maru Gothic, sans-serif",
            textAlign: "right"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >アトリエ 出本</motion.h1>
        <motion.p
          style={{
            marginRight: "40px",
            fontSize: "24px",
            textAlign: "right"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >Atelier Demoto</motion.p>
      </div>
      <StaticImage
        src="../images/hero.png"
        alt="アトリエ出本"
        placeholder="blurred"
        layout="fixed"
        width={240}
        height={320}
        loading="lazy"
        className='hero-image'
      />
    </div>
  )
}

export default Top
