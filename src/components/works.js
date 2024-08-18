import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import '../style/grid.scss';
import axios from 'axios'

const Works = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const accessToken = process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN;
    const url = `https://graph.facebook.com/v13.0/17841408405715074?fields=name,media.limit(20){ caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data.media.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [])

  function convertTimestampToDateFormat(timestamp) {
    const date = new Date(timestamp * 1000); // タイムスタンプはミリ秒ではなく秒単位で表されるため、1000倍
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }

  return (
    <div className="section up" id="works">
      <div className="innner_content">
        <h2>作品<a style={{
          fontSize: "18px"
        }}
          href="https://www.instagram.com/papa.monkey/"
          target="_blank" rel="noreferrer"
        ><FontAwesomeIcon icon={faInstagram}
          style={{
            marginLeft: "10px",
            marginRight: "6px"
          }}
          />@papa.monkey</a></h2>

        <div className="post-list grid-container">
          {
            posts.map(post => {
              return (
                <motion.div
                  viewport={{ onece: false }}
                  className="grid-item"
                  key={post.id}
                  initial={{
                    opacity: 0,
                    y: 12
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'easeIn',
                      bounce: 0.4,
                      duration: 0.5,
                      delay: 0.4,
                    }
                  }}
                >
                  <div className='post-item'>
                    <a
                      className="post-item__image"
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={post.media_url} width={160} />

                    </a>
                    <p style={{
                      height: "120px",
                      overflow: "scroll"
                    }}>{post.caption}</p>
                    <span className='like'>
                      <FontAwesomeIcon icon={faHeart} className
                        ="like-icon" />
                      <span className='like-count'>
                        {post.like_count}
                      </span>
                    </span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Works
