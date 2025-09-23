// Environment configuration
export const ENV = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isStaging: process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'staging',
  isPreview: process.env.VERCEL_ENV === 'preview',
  
  // Site configuration based on environment
  siteUrl: process.env.NODE_ENV === 'production' 
    ? 'https://settleline.com'
    : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000',
    
  // SEO configuration
  noindex: process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'staging',
  
  // Analytics
  analyticsEnabled: process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production',
} as const

export function getEnvironmentBadge() {
  if (ENV.isProduction) return null
  
  return {
    text: ENV.isStaging ? 'Staging' : 'Development',
    color: ENV.isStaging ? 'bg-yellow-500' : 'bg-red-500'
  }
}
