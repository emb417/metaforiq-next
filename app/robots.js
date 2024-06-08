export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/libowski','/libowski/*'],
      },
      sitemap: 'https://www.metaforiq.com/sitemap.xml',
    }
  }