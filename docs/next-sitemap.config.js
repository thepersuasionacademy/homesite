/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://thepowerark.com',
  changefreq: 'weekly',
  priority: '0.7',
  generateIndexSitemap: false,
  exclude: ['/icon.svg', '/docs/*'],
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = 0.5
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/articles/')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path === '/articles' || path === '/store' || path === '/services') {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path.startsWith('/principles-of-influence/') || path.startsWith('/dreamstate-selling/')) {
      priority = 0.7
      changefreq = 'monthly'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
