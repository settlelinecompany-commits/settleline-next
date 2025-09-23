import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  authorRole: string
  reviewedBy?: string
  date: string
  updated?: string
  readTime: string
  tags: string[]
  cover?: string
  draft: boolean
  faq?: Array<{
    question: string
    answer: string
  }>
  content: string
}

export interface Service {
  slug: string
  title: string
  description: string
  priceFrom?: string
  bullets: string[]
  cover?: string
  draft: boolean
  faq?: Array<{
    question: string
    answer: string
  }>
  ctaText?: string
  ctaHref?: string
  content: string
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog')
  if (!fs.existsSync(blogDir)) return []
  
  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.md', ''),
        ...data,
        readTime: readingTime(content).text,
        content,
      } as BlogPost
    })
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find(post => post.slug === slug) || null
}

export function getServices(): Service[] {
  const servicesDir = path.join(contentDirectory, 'services')
  if (!fs.existsSync(servicesDir)) return []
  
  try {
    const files = fs.readdirSync(servicesDir)
    const services = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        try {
          const filePath = path.join(servicesDir, file)
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data, content } = matter(fileContent)
          
          return {
            slug: file.replace('.md', ''),
            ...data,
            content,
          } as Service
        } catch (error) {
          console.error(`Error reading service file ${file}:`, error)
          return null
        }
      })
      .filter((service): service is Service => service !== null)
      .filter(service => !service.draft)
      .sort((a, b) => a.title.localeCompare(b.title))
    
    return services
  } catch (error) {
    console.error('Error reading services directory:', error)
    return []
  }
}

export function getService(slug: string): Service | null {
  const services = getServices()
  return services.find(service => service.slug === slug) || null
}

export function getAllContentSlugs() {
  const blogPosts = getBlogPosts()
  const services = getServices()
  
  return {
    blog: blogPosts.map(post => `/blog/${post.slug}`),
    services: services.map(service => `/services/${service.slug}`),
  }
}
