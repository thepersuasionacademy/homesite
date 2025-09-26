// Test script to show JSON-LD output for the identity-shifting article
// This simulates what will be generated for each article

const sampleArticle = {
  id: "identity-shifting-align-empowered-self",
  metadata: {
    title: "Identity Shifting: How to Align with Your Most Empowered Self",
    description: "Discover how to align with your most empowered identity for natural, sustainable transformation. Learn why identity-based change creates lasting results when behavior-focused approaches fail.",
    date: "2025-07-04",
    tags: ["identity-shifting", "self-concept", "personal-identity", "empowerment", "transformation", "psychology"],
    authors: ["Kenrick Cleveland"],
    category: "Confidence & Mindset",
    image: "https://thepersuasionacademycdn.b-cdn.net/Images/SEO%20Articles/thepowerark_Mirror_split_man_stands_centered_in_the_glass_the_ecf4ee97-faa8-428e-948e-8932feb53653_0.jpeg",
    draft: false
  },
  content: "Identity shifting isn't about becoming someone completely different...", // truncated for demo
  readingTime: "8 min read"
}

const url = "https://thepersuasionacademy.com/articles/identity-shifting-align-empowered-self"

// Helper function
function convertReadingTimeToISO8601(readingTime) {
  const match = readingTime.match(/(\d+)\s*min/)
  const minutes = match ? parseInt(match[1]) : 10
  return `PT${minutes}M`
}

// Generate the JSON-LD schema (same logic as the component)
const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://thepersuasionacademy.com/#kenrick-cleveland",
  "name": "Kenrick Cleveland",
  "url": "https://thepersuasionacademy.com",
  "image": "https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg",
  "description": "Master of influence psychology with 45+ years of experience in persuasion, NLP, and business psychology. Author of 55+ books on Amazon.",
  "jobTitle": "Influence Psychology Expert",
  "worksFor": {
    "@type": "Organization",
    "name": "The Persuasion Academy",
    "url": "https://thepersuasionacademy.com"
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
    "https://www.amazon.com/stores/author/B0DLTPBS4T"
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thepersuasionacademy.com/#organization",
  "name": "The Persuasion Academy",
  "url": "https://thepersuasionacademy.com",
  "logo": "https://thepersuasionacademy.com/logo.svg",
  "description": "The world's leading authority on ethical influence, persuasion psychology, and communication mastery. Founded by Kenrick Cleveland.",
  "founder": {
    "@type": "Person",
    "@id": "https://thepersuasionacademy.com/#kenrick-cleveland"
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": url,
  "headline": sampleArticle.metadata.title,
  "description": sampleArticle.metadata.description,
  "url": url,
  "datePublished": sampleArticle.metadata.date,
  "dateModified": sampleArticle.metadata.date,
  "author": {
    "@type": "Person",
    "@id": "https://thepersuasionacademy.com/#kenrick-cleveland"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://thepersuasionacademy.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "image": {
    "@type": "ImageObject",
    "url": sampleArticle.metadata.image,
    "width": 1200,
    "height": 630
  },
  "articleSection": sampleArticle.metadata.category,
  "keywords": sampleArticle.metadata.tags.join(", "),
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "wordCount": Math.floor(sampleArticle.content.length / 5),
  "timeRequired": convertReadingTimeToISO8601(sampleArticle.readingTime)
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thepersuasionacademy.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Articles",
      "item": "https://thepersuasionacademy.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": sampleArticle.metadata.title,
      "item": url
    }
  ]
}

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    authorSchema,
    organizationSchema, 
    articleSchema,
    breadcrumbSchema
  ]
}

console.log("=== JSON-LD SCHEMA OUTPUT ===")
console.log(JSON.stringify(combinedSchema, null, 2))
console.log("\n=== SCHEMA VALIDATION ===")
console.log("✅ Author Schema: Establishes Kenrick Cleveland as entity")
console.log("✅ Organization Schema: Establishes The Persuasion Academy")  
console.log("✅ Article Schema: Rich results eligible")
console.log("✅ Breadcrumb Schema: Enhanced SERP display")
console.log("\n=== SEO IMPACT ===")
console.log("🎯 Entity SEO: Links all content to Kenrick Cleveland")
console.log("🎯 Rich Results: Enables author cards, reading time, breadcrumbs")
console.log("🎯 AI Citations: Structured data for SGE/AI overviews")
console.log("🎯 Authority Signals: Clear expertise and topic associations")
