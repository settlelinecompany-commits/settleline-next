import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface CaseStudy {
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
  category: string
  featured: boolean
  draft: boolean
  company: string
  clientRole: string
  savings: string
  timeline: string
  challenges: string[]
  faq?: Array<{
    question: string
    answer: string
  }>
  content: string
}

export function getCaseStudies(): CaseStudy[] {
  const caseStudiesDir = path.join(contentDirectory, 'case-studies')
  if (!fs.existsSync(caseStudiesDir)) return []
  
  const files = fs.readdirSync(caseStudiesDir)
  const caseStudies = files
    .filter(file => file.endsWith('.md') && !file.includes('template'))
    .map(file => {
      try {
        const filePath = path.join(caseStudiesDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        return {
          slug: file.replace('.md', ''),
          ...data,
          readTime: readingTime(content).text,
          content,
        } as CaseStudy
      } catch (error) {
        console.error(`Error reading case study file ${file}:`, error)
        return null
      }
    })
    .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null)
    .filter(caseStudy => !caseStudy.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return caseStudies
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const caseStudies = getCaseStudies()
  return caseStudies.find(caseStudy => caseStudy.slug === slug) || null
}

export function getFeaturedCaseStudies(limit: number = 3): CaseStudy[] {
  const caseStudies = getCaseStudies()
  const featuredCaseStudies = caseStudies.filter(caseStudy => caseStudy.featured)
  
  // If we have enough featured case studies, return them
  if (featuredCaseStudies.length >= limit) {
    return featuredCaseStudies.slice(0, limit)
  }
  
  // Otherwise, fill with latest case studies
  const remainingSlots = limit - featuredCaseStudies.length
  const latestCaseStudies = caseStudies.filter(caseStudy => !caseStudy.featured).slice(0, remainingSlots)
  
  return [...featuredCaseStudies, ...latestCaseStudies]
}
