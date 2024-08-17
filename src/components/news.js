import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import axios from 'axios'
const userContentKey = process.env.GATSBY_USER_CONTENT_KEY;

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://script.googleusercontent.com/macros/echo?user_content_key=${userContentKey}`;
      try {
        const response = await axios.get(url);
        setNews(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため +1
    const day = date.getDate();
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    const dayOfWeek = daysOfWeek[date.getDay()]; // 曜日を取得

    return `${year}年${month}月${day}日(${dayOfWeek})`;
  }

  const formatTime = (timeString) => {
    // Dateオブジェクトを作成
    const date = new Date(timeString);

    // 日本時間 (JST) に変換
    const jstHours = date.getUTCHours() + 9; // UTC + 9 時間で日本標準時に変換
    const minutes = date.getMinutes();

    // 時刻を "HH:MM" 形式にフォーマット
    const formattedTime = `${String(jstHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return formattedTime;
  }


  let displayNewsList = news
    .filter(news => news.is_visible === true)
    .filter(news => {
      let now = new Date();
      let end_date = new Date(news.end_date);
      return end_date >= now;
    })
    .sort((a, b) => {
      let aNews = a.start_date;
      let bNews = b.start_date;
      if (aNews < bNews) {
        return -1;
      }
      if (aNews > bNews) {
        return 1;
      }
      return 0;
    });
  if (displayNewsList.length === 0) {
    return (
      <motion.li
        className='news-item'
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
            delay: 0.6,
          }
        }}
      >
        <div className="detail">
          現在お知らせはありません
        </div>
      </motion.li>
    );
  } else {
    return displayNewsList.map((news, index) =>
      <motion.li
        className='news-item'
        key={index}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
            delay: 0.6,
          }
        }}
      >
        <div className="detail">
          <span className="label">{news.label}</span>
          <div className="title">{news.title}</div>
          <div className="s-title">■ 日時</div>
          <div className="s-section">
            <div className="date"
              style={{
                fontSize: "20px"
              }}
            >{formatDate(news.start_date)}~{formatDate(news.end_date)}</div>
            <div
              className="time"
              style={{
                fontSize: "20px"
              }}>{formatTime(news.start_time)}~{formatTime(news.end_time)}</div>
            {
              news.date_time_note.map((note, index) =>
                <div key={index} className="small-text"> ※{note}</div>
              )
            }
          </div>
          <div className="s-title">■ 場所</div>
          <div className="s-section">
            <div className="place-name">
              {news.place_name}
            </div>
            <div className="address">
              {news.address}
            </div>
            <div className="place" style={{
              marginTop: '20px',
            }}>
              <iframe className='google-map'
                src={news.map_url}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={news.address}
                height={300}
              ></iframe>
            </div>
            <div>{news.tell}</div>
          </div>
          {/* <div className="s-title">■ 内容</div>
          <div className="s-section">
            <div className="text" dangerouslySetInnerHTML={{__html: news.html }}>

            </div>
          </div> */}
        </div>
      </motion.li>
    );
  }
}

export default News
