export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kicau Burung",
    "url": "https://kicauburung.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kicauburung.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Koleksi lengkap suara kicau burung mp3 download gratis untuk masteran, lomba, terapi relaksasi, dan pancingan. Dapatkan suara burung gacor terpopuler di Indonesia.",
    "publisher": {
      "@type": "Organization",
      "name": "Kicau Burung",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kicauburung.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Suara Kicau Burung Murai Batu",
          "url": "https://kicauburung.com/suara/murai-batu"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Suara Kicau Burung Kacer",
          "url": "https://kicauburung.com/suara/kacer"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Suara Kicau Burung Cucak Ijo",
          "url": "https://kicauburung.com/suara/cucak-ijo"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}