module.exports = {
  pathPrefix: `/parliament-listening`,
  siteMetadata: {
    title: `เขาคุยอะไรกัน? ดูบันทึกประชุมสภาย้อนหลัง (เวอร์ชั่นทดสอบ)`,
    description: `ใครพูดตอนไหน ใครประท้วงบ่อย เลือกช่วงที่อยากดูได้ที่นี่`,
    author: `Voluteers and the ELECT team`,
    image: `/images/cover.png`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-48736618-8",
      },
    },
  ],
}
