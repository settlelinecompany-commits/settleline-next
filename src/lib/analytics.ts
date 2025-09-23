// Analytics configuration
export const ANALYTICS_CONFIG = {
  enabled: process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production',
  events: {
    page_view: 'page_view',
    book_click: 'book_click',
    planner_start: 'planner_start',
  }
}

// Simple analytics tracking
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (!ANALYTICS_CONFIG.enabled) return
  
  // In a real implementation, you would send this to your analytics service
  // For now, we'll just log it in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties)
  }
  
  // Example: Google Analytics 4
  // gtag('event', eventName, properties)
  
  // Example: PostHog
  // posthog.capture(eventName, properties)
}

export function trackPageView(url: string, title: string) {
  trackEvent(ANALYTICS_CONFIG.events.page_view, {
    url,
    title,
    timestamp: new Date().toISOString(),
  })
}

export function trackBookClick(source: string) {
  trackEvent(ANALYTICS_CONFIG.events.book_click, {
    source,
    timestamp: new Date().toISOString(),
  })
}

export function trackPlannerStart() {
  trackEvent(ANALYTICS_CONFIG.events.planner_start, {
    timestamp: new Date().toISOString(),
  })
}
