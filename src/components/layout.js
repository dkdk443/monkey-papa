import React from 'react';

import Seo from "../components/seo"
import MobileHeader from "./moibileHeader"
import Header from "./header.js"
import "./layout.css"
import Works from "./works"
import About from "./about"
import News from './news';
import Top from './top';

import { motion } from 'framer-motion';
import { useIsSmall } from '../hooks/utils'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/zen-maru-gothic"


config.autoAddCss = false;

const Layout = () => {
  const date = new Date();
  const year = date.getFullYear();
  // レスポンシブ対応
  const isSmall = useIsSmall()

  return (
    <>
      <Seo title="アトリエ出本" />
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
              ? <MobileHeader
                siteTitle="アトリエ出本"
                style={!isSmall ? 'opacity' : 0}
              />
              : <Header style={!isSmall ? 'opacity' : 1}></Header>
          }
          <Top />
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <motion.a
              style={{
                width: "320px",
                padding: "8px",
                backgroundColor: "#0f1865",
                color: "#fff",
                fontSize: "16px",
                display: 'inline-block',
                textAlign: 'center',
                margin: "40px 30px 10px",
                borderRadius: "12px",
                fontWeight: "600"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              href="https://jp.mercari.com/user/profile/536948409">ご購入はこちら</motion.a>
            <motion.p
              style={{
                fontSize: "12px",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>※メルカリのサイト（アプリ）に遷移します</motion.p>
          </div>
          <div className="section" id="news">
            <div className="innner_content">
              <h2>お知らせ</h2>
              <ul className='news'>
                <News />
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
          <Works />
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
          <div className="copy-right">©{year} Atelier Demoto All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Layout
