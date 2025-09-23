import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Static service data for now
const services = {
  'rnor-planning': {
    title: 'RNOR Tax Planning Service',
    description: 'Comprehensive RNOR tax planning service to maximize your tax benefits during your return to India.',
    priceFrom: '$2,500',
    ctaText: 'Book RNOR Consultation',
    ctaHref: '/book?service=rnor-planning',
  }
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]
  
  if (!service) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{service.description}</p>
        
        <div className="flex gap-4">
          <a href={service.ctaHref || '/book'} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            {service.ctaText || 'Book Consultation'}
          </a>
          <a href="/tools/free-return-to-india-planner" className="border border-gray-300 px-6 py-3 rounded-lg">
            Try Free Planner
          </a>
        </div>
      </div>
    </div>
  )
}