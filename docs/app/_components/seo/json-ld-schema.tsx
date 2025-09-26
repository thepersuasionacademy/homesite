'use client'

import { Article } from '../../_lib/articles-types'

interface JsonLdSchemaProps {
  article: Article
  url: string
}

// Helper function to convert "5 min read" to "PT5M" (ISO 8601 duration format)
function convertReadingTimeToISO8601(readingTime: string): string {
  const match = readingTime.match(/(\d+)\s*min/)
  const minutes = match && match[1] ? parseInt(match[1], 10) : 10 // Default to 10 minutes
  return `PT${minutes}M`
}

export function JsonLdSchema({ article, url }: JsonLdSchemaProps) {
  // Author Schema - Kenrick Cleveland entity
  // @id creates a unique identifier for this entity that can be referenced elsewhere
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://thepowerark.com/#kenrick-cleveland", // Unique ID for Kenrick Cleveland entity
    "name": "Kenrick Cleveland",
    "url": "https://thepowerark.com",
    "image": "https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg",
    "description": "Master of influence psychology with 45+ years of experience in persuasion, NLP, and business psychology. Author of 55+ books on Amazon.",
    "jobTitle": "Influence Psychology Expert",
    "worksFor": {
      "@type": "Organization",
      "name": "The Power Ark",
      "url": "https://thepowerark.com"
    },
    "alumniOf": "Advanced NLP Training",
    "knowsAbout": [
      "Influence Psychology",
      "Persuasion Techniques", 
      "NLP (Neuro-Linguistic Programming)",
      "Business Psychology",
      "Sales Psychology",
      "Communication Mastery",
      "Confidence Building",
      "Leadership Development"
    ],
    "sameAs": [
      "https://www.amazon.com/stores/author/B0DLTPBS4T",
      "https://www.youtube.com/@kenrickcleveland",
      "https://www.linkedin.com/in/kenrick-cleveland"
    ]
  }

  // Organization Schema - The Power Ark
  // @id creates a unique identifier for this organization entity
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thepowerark.com/#organization", // Unique ID for The Power Ark organization
    "name": "The Power Ark",
    "url": "https://thepowerark.com",
    "logo": "https://thepowerark.com/logo.svg",
    "description": "The world's leading authority on ethical influence, persuasion psychology, and communication mastery. Founded by Kenrick Cleveland.",
    "founder": {
      "@type": "Person",
      "@id": "https://thepowerark.com/#kenrick-cleveland"
    },
    "specialty": [
      "Influence Psychology",
      "Persuasion Training", 
      "Communication Mastery",
      "Sales Psychology",
      "Leadership Development",
      "Confidence Building"
    ]
  }

  // Article Schema - Main content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    "headline": article.metadata.title,
    "description": article.metadata.description,
    "url": url,
    "datePublished": article.metadata.date,
    "dateModified": article.metadata.date,
    "author": {
      "@type": "Person",
      "@id": "https://thepowerark.com/#kenrick-cleveland" // References the author entity defined above
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://thepowerark.com/#organization" // References the organization entity defined above
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(article.metadata.image && {
      "image": {
        "@type": "ImageObject",
        "url": article.metadata.image,
        "width": 1200,
        "height": 630
      }
    }),
    ...(article.metadata.category && {
      "articleSection": article.metadata.category
    }),
    ...(article.metadata.tags && {
      "keywords": article.metadata.tags.join(", ")
    }),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "wordCount": Math.floor(article.content.length / 5), // Rough estimate: 5 chars per word
    "timeRequired": convertReadingTimeToISO8601(article.readingTime || "10 min read") // Convert "5 min read" to "PT5M"
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thepowerark.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Articles",
        "item": "https://thepowerark.com/articles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.metadata.title,
        "item": url
      }
    ]
  }

  // Combine all schemas into a single JSON-LD script
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      authorSchema,
      organizationSchema, 
      articleSchema,
      breadcrumbSchema
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema, null, 2)
      }}
    />
  )
}
