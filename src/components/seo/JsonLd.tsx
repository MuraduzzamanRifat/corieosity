import { site, faqs } from "@/content/site";

// Organization + WebSite structured data. Server-rendered into <head>-adjacent body.
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        areaServed: { "@type": "Country", name: "United States" },
        knowsAbout: [
          "AI Search Optimization",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "Next.js development",
          "WebGL",
          "Core Web Vitals",
        ],
        slogan: site.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#org` },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
