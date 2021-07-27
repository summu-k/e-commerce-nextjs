const siteUrl = `${process.env.NEXT_PUBLIC_URL}`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/fallback' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/fallback'],
};
