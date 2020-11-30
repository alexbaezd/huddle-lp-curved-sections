module.exports = {
  siteMetadata: {
    title: `Huddle landing page with curved sections`,
    description: `Frontend Mentor challenges allow you to improve your skills in a real-life workflow.`,
    author: `@alexbaezd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Huddle Landing Page With Curved Sections`,
        short_name: `Huddle`,
        start_url: `/`,
        background_color: `#ff52bf`,
        theme_color: `#ff52bf`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
