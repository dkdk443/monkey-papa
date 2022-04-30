import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import axios from "axios"

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
    <a href={post.permalink} target="_blank" rel="noreferrer"  key={post.id}>
      <div className='post-item'>
        <div className="post-item__image">
          <img src={post.media_url} alt={post.caption} className='post-item-image' />
          <div className="mask">
            <div className="caption">
              <p>{post.caption}</p>
            </div>
          </div>
        </div>
        <span className='like'>
          {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
          {post.like_count} likes</span>
      </div>
    </a>
    );
  }

export default Works
