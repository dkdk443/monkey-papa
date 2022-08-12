import { useStaticQuery, graphql } from "gatsby"

export const useNewsMetadata = () => {
  const news = useStaticQuery(
    graphql`
     query MyQuery {
        allMarkdownRemark {
          nodes {
            html
            frontmatter {
              address
              date
              date_time_note
              end_date
              end_time
              label
              map_url
              place_name
              start_date
              start_time
              tel
              title
            }
            id
          }
        }
      }
    `
  )
  return news.allMarkdownRemark.nodes;
}