"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings only from the main article content
    const article = document.querySelector('article');
    if (!article) return;

    const headings = Array.from(article.querySelectorAll('h2, h3, h4'))
      .map((heading) => {
        const text = heading.textContent || '';
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return {
          id,
          title: text,
          level: parseInt(heading.tagName.charAt(1))
        };
      })
      .filter(item => item.id && item.title);

    setToc(headings);

    // Add IDs to headings if they don't have them
    headings.forEach(({ id, title }) => {
      const heading = Array.from(article.querySelectorAll('h2, h3, h4'))
        .find(h => h.textContent === title);
      if (heading && !heading.id) {
        heading.id = id;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className={`bg-muted/30 rounded-2xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm transition-colors duration-200 hover:text-primary ${
              item.level === 2 
                ? 'font-medium text-foreground' 
                : 'text-muted-foreground ml-4'
            } ${
              activeId === item.id 
                ? 'text-primary font-medium' 
                : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
