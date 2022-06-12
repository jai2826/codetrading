// module.exports = {
//     siteUrl: process.env.SITE_URL || 'https://example.com',
//     generateRobotsTxt: true, // (optional)
//     // ...other options
// }
// /** @type {import('next-sitemap').IConfig} */

module.exports  = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
};


// /** @type {import('next-sitemap').IConfig} */

// const config = {
//   siteUrl: 'https://example.com',
//   generateRobotsTxt: true,
//   exclude: ['/server-sitemap.xml'], // <= exclude here
//   robotsTxtOptions: {
//     additionalSitemaps: [
//       'https://example.com/server-sitemap.xml', // <==== Add here
//     ],
//   },
// }

// export default config