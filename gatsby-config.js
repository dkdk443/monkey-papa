require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `アトリエ出本`,
    titleTemplate: "%s · アトリエ出本",
    description: `広島県東広島市志和町の山里で、柿渋染や鯉のぼり、大漁旗、藍古布を用いて洋服を製作しています。`,
    author: `@demoto`,
    image: `/static/coat.png`,
    siteUrl: `https://monkey-papa.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `アトリエ出本`,
        short_name: `アトリエ出本`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: process.env.GATSBY_BUSINESS_ID,
        params: {
          fields: [
            'name',
            'media',
          ],
        },
        // Access Token from facebook
        accessToken: process.env.GATSBY_ACCSESS_TOKEN,
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
