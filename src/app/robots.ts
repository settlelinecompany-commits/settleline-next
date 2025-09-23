import { MetadataRoute } from 'next'
import { ENV } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = ENV.siteUrl
  
  if (ENV.noindex) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
