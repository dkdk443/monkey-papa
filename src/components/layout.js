import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/zen-maru-gothic"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "./layout.css"
import Works from "./works"
import About from "./about"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const sectionNames = ["top", "about", "works", "contact"];
  const elms = useRef([]);
  sectionNames.forEach((_, i) => {
    elms.current[i] = React.createRef()
  })

  const date = new Date();
  const year = date.getFullYear();
  const [height, setHeight] = useState(0);

  const toggleScroll = () => {
    setHeight(window.scrollY);
  }

  const isTop = height === 0 ? true : false;

  useEffect(() => {
    let elmsCurrent = elms.current;
    elmsCurrent.forEach(elm => {
      const rect = JSON.parse(JSON.stringify(elm.current.getBoundingClientRect()));
      const targetHeight = rect.y;
      console.log(elm.current.id + ':' + rect.bottom);
      let target = document.getElementById(elm.current.id);
      if (elm.current.id === 'top') {
        setTimeout(() => {
            target.classList.add('show');
        }, 500)
      } else if (elm.current.id === 'contact') {
        if (rect.bottom > 600) {
           target.classList.add('show');
        }
      } else {
        if (targetHeight < 60) {
          let target = document.getElementById(elm.current.id);
          target.classList.add('show');
        }
      }
    })
    window.addEventListener('scroll', toggleScroll);
    return () => window.removeEventListener('scroll', toggleScroll)
  })

  return (
    <>
      <div className='layout'>
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            backgroundColor: "#FAF7F0"
          }}
        >
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          isTop={isTop}
        />
          <div className="section" id="top" ref={elms.current[0]}>
            <div style={{
              marginRight: "64px",
            }}
            className="main-title">
               <h1
              style={{
                fontSize: "32px",
                fontFamily: "Zen Maru Gothic, sans-serif",
                 textAlign: "right"
            }}
            >アトリエ 出本</h1>
            <p
              style={{
                  marginRight: "40px",
                  fontSize: "24px",
                  textAlign: "right"
              }}
            >Atelier Demoto</p>
            </div>
            <StaticImage
              src="../images/hero.png"
              alt="アトリエ出本"
              placeholder="blurred"
              layout="fixed"
              width={240}
              height={320}
              loading="lazy"
            />
          </div>
          <div className="section up"
            id="about"
            ref={elms.current[1]}
            style={{
              margin: "100px 0"
          }}>
            <About />
          </div>
          <div className="section up" id="works" ref={elms.current[2]}>
            <div className="innner_content">
              <h2>Works <small>by Instagram</small>  <a style={{
                fontSize: "12px"
              }}
                href="https://www.instagram.com/papa.monkey/"
                target="_blank" rel="noreferrer"
              >@papa.monkey</a></h2>

              <div className="post-list">
                   <Works />
              </div>
            </div>
          </div>
          <div className="section up" id="contact" ref={elms.current[3]}>
            <div className="innner_content">
              <h2>Contact</h2>
              <p>オーダーメイドの洋服も承っております。</p>
              <div className="prices">
                <div className="price-title">参考価格</div>
                <div>シャツ：¥15,000~</div>
                <div>ワンピース：¥20,000~</div>
                <div>コート：¥50,000~</div>
              </div>
              <p>
                <a href="https://www.instagram.com/papa.monkey/"
                  target="_blank"
                  rel="noreferrer"
                >Instagram</a>のダイレクトメールよりお問い合わせください。</p>
           </div>
          </div>
        </main>
        <div className="footer">
          <div className="copy-right">©{ year } Atelier Demoto All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Layout
