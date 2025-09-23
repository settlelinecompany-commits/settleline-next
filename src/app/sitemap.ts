import { MetadataRoute } from 'next'
import { getAllContentSlugs } from '@/lib/content'
import { ENV } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ENV.siteUrl
  const { blog } = getAllContentSlugs()
  const services = ['/services/rnor-planning'] // Static services for now
  
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/free-return-to-india-planner`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]
  
  const blogRoutes = blog.map(slug => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  const serviceRoutes = services.map(slug => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticRoutes, ...blogRoutes, ...serviceRoutes]
}
