import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

import MobileHeader from "./moibileHeader"
import Header from "./header.js"
import "./layout.css"
import Works from "./works"
import About from "./about"

import { motion } from 'framer-motion';
import { useIsSmall } from '../hooks/utils'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/zen-maru-gothic"


config.autoAddCss = false;

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

  const date = new Date();
  const year = date.getFullYear();
  // レスポンシブ対応
  const isSmall = useIsSmall()

  return (
    <>
      <Seo title="アトリエ出本"/>
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
        {
          isSmall
            ?  <MobileHeader
            siteTitle={data.site.siteMetadata?.title || `Title`}
            style={!isSmall ? 'opacity': 0}
              />
            : <Header style={!isSmall ? 'opacity': 1}></Header>
        }

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
            />
          </div>
          <div className="section" id="news">
            <div className="innner_content">
              <h2>お知らせ</h2>
              <ul className="news">
                <li className='news-item'>
                  <div className="detail">
                    <span className="label">展示会のお知らせ</span>
                    <div className="title">柿渋染と古裂服展</div>
                    <div className="s-title">■ 日時</div>
                    <div className="s-section">

                      <div className="date">2022/08/17(水)~2022/08/31(水)</div>
                      <div className="time">10:30~17:00</div>
                      <div className="small-text"> ※最終日16:00終了</div>
                      <div className="small-text">※火曜日定休日</div>
                    </div>
                     <div className="s-title">■ 場所</div>
                    <div className="s-section"> 
                      <div className="place-name">
                        カモメのばぁばぁ
                      </div>
                      <div className="address">
                         広島県広島市西区横川町1-5-23
                      </div>
                      <div className="place">
                      <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.806503072102!2d132.44833671517088!3d34.40626380643806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a989f1e8641f3%3A0x782cd8bb00308e1c!2zR2FsbGVyee-8i0NhZmUg44Kr44Oi44Oh44Gu44Gw44GB44Gw44GB!5e0!3m2!1sja!2sjp!4v1660135587687!5m2!1sja!2sjp" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>082-232-5074</div>
                    </div>
                    <div className="s-title">■ 内容</div>
                    <div className="s-section">
                      <div className="text">
                        <ul>
                          <div>作品展示</div>
                          <div className="s-title">ワークショップ ガマグチ作り</div>
                          <div className="s-title">①ガマグチ大サイズ</div>
                          <div className=''>
                            <div className="">日時：8/20(土) 10:30~13:30</div>
                            <div className="">講習費：3000円　材料費・珈琲付</div>
                            <div className="">持参物：洋裁用ハサミなど</div>
                          </div>
                          <div className="s-title">②ガマグチ小サイズ</div>
                          <div>
                            <div className="">日時：8/27(土) 10:30~13:30</div>
                            <div className="">講習費：2000円　材料費・珈琲付</div>
                            <div className="">持参物：洋裁用ハサミなど</div>
                          </div>
                        </ul>
                        ワークショップ参加を希望する方は <a href="https://www.instagram.com/papa.monkey/"
                  target="_blank"
                  rel="noreferrer"
                >アトリエ出本</a>かカモメのばぁばぁまでご連絡ください。
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="section up"
            id="about"
            style={{
              margin: "100px 0"
          }}>
            <About />
          </div>
          <div className="section up" id="works">
            <div className="innner_content">
              <h2>Works <a style={{
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
          <div className="section up" id="contact">
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
