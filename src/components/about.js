import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <>
    <div className="section__left">
      <StaticImage
        src="../images/souen.jpeg"
        alt="アトリエ出本"
        placeholder="blurred"
        layout="fixed"
        width={240}
        height={240}
        loading="lazy"
        className='image1'
        />
      <StaticImage
        src="../images/coat.png"
        alt="アトリエ出本"
        placeholder="blurred"
        layout="fixed"
        width={240}
        height={300}
        loading="lazy"
        className='image2'

      />
    </div>
    <div className="section__right">
      <div className="section__right__top">
          <h2>About</h2>
          <h3>出本 正彦</h3>
        <p>Demoto Masahiko</p>
        <p>広島県東広島市志和町の山里で、柿渋染や鯉のぼり、大漁旗、藍古布を用いて洋服を製作しています。</p>
      </div>
      <div className="section__right__bottom">
        <h2>Profile</h2>
        <ul className="profile">
          <History />
      </ul>
    </div>
    </div>
  </>
)
const years = [
  {
    "year": "1970",
    "content": "桑沢デザイン研究所ドレスデザイン科卒"
  },
  {
    "year": "1973",
    "content": "デザイナー細野久氏に師事"
  },
   {
    "year": "1975",
    "content": "第37回装苑賞受賞"
  },
  {
    "year": "1977~1986",
    "content": "桑沢デザイン研究所専任講師"
  },
  {
    "year": "1986",
    "content": "出身地広島に帰る アトリエモンキーパパ開設"
  },
  {
    "year": "2001",
    "content": "第11回キルトジャパン金賞・審査員賞など３賞を受賞"
  },
  {
    "year": "2002",
    "content": "第10回インターナショナル・キルトウィーク横浜2002　バッグ・ウェア部門　優秀賞"
  },
   {
    "year": "2003",
    "content": "第13回キルトジャパン審査員賞受賞"
  },
]

const History = () => {
  return years.map(year => 
    <li key={year.year}><span className="year">{year.year}</span><span className="content">{ year.content }</span></li>
  );
}


export default About;
