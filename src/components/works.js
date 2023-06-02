import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { motion } from "framer-motion"
import { StaticImage } from 'gatsby-plugin-image';

const Works = () => {
  const [posts, setPosts] = useState([]);
  const urlEndpoint = 'https://graph.facebook.com/v13.0/';
  const limit = 200;
  const accessToken = process.env.GATSBY_ACCSESS_TOKEN;
  const businessId = process.env.GATSBY_BUSINESS_ID;

  const compareFunc = (a, b) => {
    const aPost = a.like_count;
    const bPost = b.like_count;

    let comparison = 0;
    if (aPost < bPost) {
      comparison = 1;
    } else if (aPost > bPost) {
      comparison = -1;
    }
    return comparison;
  }
  function convertDateFormat(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }


  useEffect(() => {
    axios
      .get(`${urlEndpoint}/${businessId}?fields=name,media .limit(${limit}){ caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type,timestamp}&access_token=${accessToken}`)
      .then(resp => {
        let data = resp.data.media.data;
        console.log(data);
        data = data.sort(compareFunc);
        data = data.slice(0, 20);
        setPosts(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="section up" id="works">
      <div className="innner_content">
        <h2>Works <a style={{
          fontSize: "12px"
        }}
          href="https://www.instagram.com/papa.monkey/"
          target="_blank" rel="noreferrer"
        >@papa.monkey</a></h2>

        <div className="post-list">
          {
            posts.map(post => {
              return (
                <motion.div
                  key={post.id}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 0.8,
                      delay: 0.4
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
                      <img
                        src={post.media_url}
                        alt={post.caption}
                        className='post-item-image'
                        width="167px" />
                    </a>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '400',
                    }}>投稿日：{convertDateFormat(post.timestamp)}</p>
                    <p>{post.caption}</p>
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
