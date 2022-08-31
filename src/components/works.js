import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { motion } from "framer-motion"

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

  useEffect(() => {
      axios
        .get(`${urlEndpoint}/${businessId}?fields=name,media .limit(${limit}){ caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`)
        .then(resp => {
          let data = resp.data.media.data;
          data = data.sort(compareFunc);
          data = data.slice(0, 20);
          setPosts(data);
        })
        .catch(error => {
          console.log(error);
        })
  }, [])

  return posts.map(post =>
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
      }}}
    >
      <div className='post-item'>
        <a
          className="post-item__image"
          href={post.permalink}
          target="_blank"
          rel="noreferrer"
          >
          <img src={post.media_url} alt={post.caption} className='post-item-image' />
        </a>
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
    );
  }

export default Works
