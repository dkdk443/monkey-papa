import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../style/grid.scss';

const Works = () => {
  const data = useStaticQuery(graphql`
    query InstagramPost {
      allInstaNode(limit: 20, sort: {order: DESC, fields: likes}) {
        edges {
          node {
            id
            hashtags
            comments
            likes
            mediaType
            permalink
            timestamp
            preview
            type
            username
            caption
            original
            internal {
              content
              description
              ignoreType
              mediaType
              contentFilePath
            }
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                )
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  function convertTimestampToDateFormat(timestamp) {
    const date = new Date(timestamp * 1000); // タイムスタンプはミリ秒ではなく秒単位で表されるため、1000倍しています
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }

  const posts = data.allInstaNode.edges;
  return (
    <div className="section up" id="works">
      <div className="innner_content">
        <h2>作品<a style={{
          fontSize: "12px"
        }}
          href="https://www.instagram.com/papa.monkey/"
          target="_blank" rel="noreferrer"
        >@papa.monkey</a></h2>

        <div className="post-list grid-container">
          {
            posts.map(post => {
              const imageData = getImage(post.node.localFile);
              return (
                <div
                  className="grid-item"
                  key={post.node.id}
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
                      href={post.node.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GatsbyImage
                        image={imageData}
                        alt={'インスタグラムの投稿：'+post.node.caption}
                        className='post-item-image grid-image'
                      />
                    </a>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '400',
                    }}>投稿日：{ convertTimestampToDateFormat(post.node.timestamp) }</p>
                    <p style={{
                      height: "120px",
                      overflow: "scroll"
                    }}>{post.node.caption}</p>
                    <span className='like'>
                      <FontAwesomeIcon icon={faHeart} className
                        ="like-icon" />
                      <span className='like-count'>
                        {post.node.likes}
                      </span>
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Works
