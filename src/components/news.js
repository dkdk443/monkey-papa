import React from 'react';
import { motion } from "framer-motion"
import { useNewsMetadata } from '../hooks/news-meta-data';

const News = () => {
  const newsList = useNewsMetadata();
  newsList.sort((a, b) => {
    let aNews = a.frontmatter.start_date;
    let bNews = b.frontmatter.start_date;
    if (aNews < bNews) {
      return -1;
    }
     if (aNews > bNews) {
      return 1;
    }
    return 0;
  });
  return newsList.map(news =>
    <motion.li
      className='news-item'
      key={news.id}
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
          duration: 0.4,
          delay: 0.6,
      }}}
    >
      <div className="detail">
        <span className="label">{ news.frontmatter.label }</span>
        <div className="title">{ news.frontmatter.title }</div>
        <div className="s-title">■ 日時</div>
        <div className="s-section">
          <div className="date">{ news.frontmatter.start_date }~{ news.frontmatter.end_date }</div>
          <div className="time">{news.frontmatter.start_time}~{news.frontmatter.end_time}</div>
          {
            news.frontmatter.date_time_note.map(note => 
              <div className="small-text"> ※{ note }</div>
            )
          }
        </div>
        <div className="s-title">■ 場所</div>
        <div className="s-section">
          <div className="place-name">
            { news.frontmatter.place_name }
          </div>
          <div className="address">
            { news.frontmatter.address }
          </div>
          <div className="place">
            <iframe className='google-map' src={ news.frontmatter.map_url } style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>{ news.frontmatter.tell }</div>
        </div>
        <div className="s-title">■ 内容</div>
        <div className="s-section">
          <div className="text" dangerouslySetInnerHTML={{__html: news.html }}>

          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default News
