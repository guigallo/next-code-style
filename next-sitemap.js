module.exports = {
  siteUrl: 'https://genesys-dev.vercel.app/',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://genesys-dev.vercel.app/server-sitemap.xml', // <==== Add here
    ],
  },
}
