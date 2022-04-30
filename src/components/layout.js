import * as React from "react"
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

  return (
    <>
      <div>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            backgroundColor: "#FAF7F0"
          }}
        >
          <div className="section">
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
          <div className="section"
            style={{
              margin: "100px 0"
          }}>
            <About />
          </div>
          <div className="section">
            <div className="innner_content">
              <h2>Instagram  <a style={{
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
          <div className="section">
            <div className="innner_content">
              <h2>Contact</h2>
              <p>オーダーメイドの洋服も承っております。</p>
              <div className="prices">
                <div className="price-title">参考価格</div>
                <div>シャツ：¥15,000~</div>
                <div>ワンピース：¥20,000~</div>
                <div>コート：¥50,000~</div>
              </div>
              <p> <a href="https://www.instagram.com/papa.monkey/">Instagram</a>のダイレクトメールよりお問い合わせください。</p>
           </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout
