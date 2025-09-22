import siteData from "../data/siteData.json";
import { slugify } from "./slugify";

export default function jsonLDGenerator({ type, post, url }) {
  // If the page has CMS data, use it.
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": ["WebSite", "Organization"],
        "name": "${siteData.title}",
        "alternateName": "IoTRealm",
        "url": "${import.meta.env.SITE}",
        "description": "${siteData.description}",
        "keywords": "${siteData.keywords}",
        "sameAs": [
          "https://twitter.com/IoTRealm",
          "https://linkedin.com/company/iotrealm",
          "https://facebook.com/IoTRealm"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "${import.meta.env.SITE}/iotrealm.png",
          "width": "400",
          "height": "400"
        },
        "image": "${siteData.image.src}",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "JP"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Japanese", "English", "Spanish", "Chinese"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IoT Solutions and Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IoT Consulting",
                "description": "Professional IoT consulting and strategy development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Technology Solutions",
                "description": "Advanced AI integration and automation solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Transformation",
                "description": "Complete digital transformation services for businesses"
              }
            }
          ]
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "${import.meta.env.SITE}/articles/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    </script>`;
}
