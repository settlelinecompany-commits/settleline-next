# Settleline Next.js Site

A TurboTax-style website for Settleline, built with Next.js App Router, featuring clean reusable blocks, SEO optimization, and a lightweight CMS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # All main routes
│   ├── sitemap.ts         # Auto-generated sitemap
│   ├── robots.ts          # Environment-aware robots.txt
│   └── layout.tsx         # Root layout with header/footer
├── components/
│   ├── blocks/            # Reusable page blocks
│   ├── ui/                # UI primitives (shadcn-style)
│   └── layout/            # Layout primitives
├── lib/
│   ├── content.ts         # Content management
│   ├── seo.ts            # SEO helpers & schema
│   ├── analytics.ts      # Analytics configuration
│   ├── env.ts            # Environment configuration
│   └── utils.ts          # Utility functions
└── content/              # Lightweight CMS
    ├── blog/             # Blog posts (markdown)
    └── services/         # Services (markdown)
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Text**: Deep navy (#1e293b)
- **Backgrounds**: Neutral grays
- **Accents**: Success, warning, destructive variants

### Typography
- **Font**: Inter (system fallback)
- **Scale**: Display, H1-H4, Body, Caption
- **Responsive**: Mobile-first approach

### Components
- **UI Primitives**: Button, Card, Input, Badge, Accordion
- **Layout**: Container, Section, Grid
- **Blocks**: Hero, FAQ, CalculatorMount, etc.

## 📝 Content Management

### Adding a Blog Post

1. Create a new `.md` file in `/content/blog/`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
description: "Brief description for SEO"
author: "Author Name"
authorRole: "Author Title"
date: "2024-01-15"
tags: ["tag1", "tag2"]
draft: false
faq:
  - question: "FAQ Question?"
    answer: "FAQ Answer"
---
```

3. Write your content in markdown below the frontmatter
4. Set `draft: true` to hide from public listings

### Adding a Service

1. Create a new `.md` file in `/content/services/`
2. Add frontmatter:

```yaml
---
title: "Service Name"
slug: "service-slug"
description: "Service description"
priceFrom: "$2,500"
bullets:
  - "Feature 1"
  - "Feature 2"
draft: false
ctaText: "Book Consultation"
ctaHref: "/book?service=service-slug"
---
```

### Adding FAQ to Any Page

Use the FAQ block component:

```tsx
import { FAQ } from "@/components/blocks/faq"

<FAQ
  title="Custom FAQ Title"
  items={[
    { question: "Question?", answer: "Answer." }
  ]}
/>
```

## 🔧 Environment Configuration

### Staging vs Production

The site automatically detects the environment:

- **Development**: `npm run dev` - Full features, no analytics
- **Staging**: Vercel preview - Noindex, no analytics, staging badge
- **Production**: Vercel production - Indexed, analytics enabled

### Environment Variables

```bash
# Optional: Override site URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (automatically configured)
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📊 SEO & Analytics

### SEO Features
- **Auto-generated sitemap** from routes + content
- **Environment-aware robots.txt** (noindex on staging)
- **Structured data** (JSON-LD) for all content types
- **Open Graph** and Twitter meta tags
- **Breadcrumbs** on detail pages

### Analytics
- **Events**: page_view, book_click, planner_start
- **Environment-aware**: Disabled on staging/preview
- **Production-only**: Enabled only on production deployments

### Schema Types
- **Organization**: Home page
- **Article**: Blog posts
- **Service**: Service pages
- **FAQ**: FAQ sections
- **BreadcrumbList**: Navigation

## 🛠 Development

### Adding New Blocks

1. Create component in `/src/components/blocks/`
2. Follow the pattern:

```tsx
interface BlockProps {
  title?: string
  description?: string
  className?: string
}

export function NewBlock({ title, description, className }: BlockProps) {
  return (
    <section className={className}>
      <Container>
        {/* Your block content */}
      </Container>
    </section>
  )
}
```

### Adding New Routes

1. Create page in `/src/app/route-name/page.tsx`
2. Add to sitemap in `/src/app/sitemap.ts`
3. Update navigation in `/src/lib/constants.ts`

### Styling Guidelines

- Use design system tokens from `globals.css`
- Prefer composition over customization
- Use `cn()` utility for conditional classes
- Follow mobile-first responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main
3. Preview deployments for pull requests

### Environment Setup

- **Staging**: Automatic preview deployments
- **Production**: Deploy from main branch
- **Analytics**: Automatically enabled on production

## 📋 QA Checklist

Visit `/qa` on staging to verify:

- ✅ All routes render correctly
- ✅ Content loads from markdown files
- ✅ SEO meta tags are present
- ✅ Analytics disabled on staging
- ✅ Noindex enabled on staging
- ✅ Schema markup present
- ✅ Mobile responsive design

## 🔍 Troubleshooting

### Content Not Loading
- Check file path in `/content/` directory
- Verify frontmatter format (YAML)
- Ensure `draft: false` for published content

### SEO Issues
- Check `/sitemap.xml` for missing routes
- Verify meta tags in page source
- Test structured data with Google's Rich Results Test

### Styling Issues
- Check design system tokens in `globals.css`
- Verify component composition
- Test responsive breakpoints

## 📞 Support

For questions or issues:
- Check the `/qa` page on staging
- Review component documentation
- Test with sample content first

## 🎯 Next Steps

1. **Add RNOR Calculator**: Integrate calculator component into CalculatorMount
2. **Analytics Integration**: Connect to Google Analytics or PostHog
3. **Content Expansion**: Add more blog posts and services
4. **Performance**: Optimize images and add caching
5. **Testing**: Add unit and integration tests

---

Built with ❤️ for US-India cross-border professionals.