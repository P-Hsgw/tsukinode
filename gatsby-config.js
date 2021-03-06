module.exports = {
  siteMetadata: {
    title: `Tsukinode`,
    description: `Influencer Marketing agency. We will help you get the best prices for Twitch and YouTube content creators.`,
    author: `@Patryk Hasegawa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tsukinode`,
        short_name: `tsukinode`,
        start_url: `/`,
        background_color: `#1f2937`,
        theme_color: `#1f2937`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`
  ],
}
