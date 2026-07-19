// Single source of truth for Corieosity site content.
// All copy here is real and honest — no fabricated clients, logos, or testimonials.

export const site = {
  name: "Corieosity",
  legalName: "Corieosity",
  domain: "corieosity.com",
  url: "https://corieosity.com",
  tagline: "Be the answer.",
  email: "hello@corieosity.com",
  phone: "+1 (415) 555-0100",
  phoneHref: "tel:+14155550100",
  hours: "Available in U.S. business hours · ET / PT",
  billing: "Billed in USD",
  description:
    "Corieosity is an AI-search growth agency. We build intelligent, immersive websites that get cited by AI engines, rank on Google, and convert the visitors they earn — for U.S. startups, SaaS, and enterprise.",
  serving: "Serving U.S. startups, SaaS & enterprise.",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "~60%", label: "of searches now end without a click. We build for the answer, not the leftover clicks." },
  { value: "3-layer", label: "Answer Readiness System: Findable → Extractable → Citable." },
  { value: "<1s", label: "target load — rich WebGL that still keeps Core Web Vitals green." },
  { value: "100%", label: "server-rendered content, so AI crawlers can actually read you." },
];

export const builtOn = ["Next.js 16", "React 19", "Three.js", "TypeScript"];
export const optimizedFor = ["ChatGPT", "Gemini", "Perplexity", "Google AI Overviews"];

export type Service = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  outcome: string;
  keyword: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "ai-search-optimization",
    tag: "The moat",
    title: "AI-Search Optimization",
    summary:
      "SEO, AEO, and GEO as one method. We engineer you into the answer AI engines return — and the featured snippet Google shows.",
    outcome: "You appear in AI answers your competitors are invisible to.",
    keyword: "AI search optimization",
    deliverables: [
      "Answer Readiness audit & score",
      "Entity & schema architecture",
      "Citation-ready content system",
      "AI-referral & rank tracking",
    ],
  },
  {
    slug: "immersive-web-experiences",
    tag: "The proof",
    title: "Immersive Web Experiences",
    summary:
      "WebGL and motion engineered to hold attention and drive action — measured in dwell, scroll depth, and conversion, not applause.",
    outcome: "Traffic that converts, not just impresses.",
    keyword: "immersive website design",
    deliverables: [
      "React Three Fiber / WebGL scenes",
      "Scroll-driven storytelling",
      "Performance-guarded 3D",
      "ADA / WCAG accessible by default",
    ],
  },
  {
    slug: "ai-powered-websites",
    tag: "The engine",
    title: "AI-Powered Websites",
    summary:
      "Next.js builds with real AI where it earns its keep — accurate assistants, smart search, and content structured for machines.",
    outcome: "A site that works for you, not just sits there.",
    keyword: "AI-powered website development",
    deliverables: [
      "Next.js architecture",
      "RAG-backed site assistants",
      "Client-managed CMS",
      "Scalable AI integrations",
    ],
  },
  {
    slug: "nextjs-development",
    tag: "The build",
    title: "Next.js Development",
    summary:
      "Fast, modern, maintainable front-ends. The engineering proof beneath everything else we do.",
    outcome: "Sub-second loads that rank and convert.",
    keyword: "Next.js development agency",
    deliverables: [
      "Next.js 16 + React 19",
      "Core Web Vitals in the green",
      "Headless CMS integration",
      "WordPress-to-Next.js migration",
    ],
  },
];

export const answerLayers = [
  {
    step: "Layer 01 — SEO",
    title: "Findable",
    body: "Crawlable, server-rendered HTML, green Core Web Vitals, clean structure and topical authority.",
    out: "If Google can't read you cleanly, nothing downstream works.",
  },
  {
    step: "Layer 02 — AEO",
    title: "Extractable",
    body: "Question-led structure, concise answer blocks and schema, so engines can lift your answer into snippets and AI Overviews.",
    out: "You become the box at the top, not link #7.",
  },
  {
    step: "Layer 03 — GEO",
    title: "Citable",
    body: "Original stats, cited sources, consistent entity signals and presence where AI retrieval trusts — so LLMs name you.",
    out: "You get cited inside ChatGPT, Perplexity and Gemini answers.",
  },
];

export const processSteps = [
  { n: "01", title: "Audit", desc: "We measure how humans and AI engines currently see you — the Answer Readiness score." },
  { n: "02", title: "Architect", desc: "Information, entity and schema architecture designed for machine-readability from the first wireframe." },
  { n: "03", title: "Build", desc: "Next.js + WebGL, fast and immersive, built with our engineering partners." },
  { n: "04", title: "Prove", desc: "We report rankings, AI citations, CWV and conversions — outcomes, not deliverables." },
];

// Honest cold-start: these are self-initiated capability demonstrations, clearly labelled —
// not client work. Real client case studies replace these as they land, via the CMS.
export type ProofBuild = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  accent: string;
};

export const proofBuilds: ProofBuild[] = [
  {
    slug: "corieosity-site",
    title: "Corieosity.com",
    kind: "Proof build · Our own site",
    year: "2026",
    summary:
      "This site is the case study. Engineered to be server-rendered, schema-rich, and citable — so you can ask an AI engine who does AI-search optimization and watch us surface.",
    stack: ["Next.js 16", "React Three Fiber", "GSAP", "AEO/GEO"],
    accent: "#5fe0b3",
  },
  {
    slug: "answer-readiness-score",
    title: "Answer Readiness Score",
    kind: "Proof build · Product concept",
    year: "2026",
    summary:
      "A tool that scores any URL across the three layers — Findable, Extractable, Citable — and shows exactly where a site is invisible to AI. Our lead magnet and our thesis in code.",
    stack: ["Node.js", "Lighthouse", "Schema analysis"],
    accent: "#ffcb3d",
  },
  {
    slug: "immersive-concept",
    title: "Immersive Product Story",
    kind: "Proof build · Interactive concept",
    year: "2026",
    summary:
      "A scroll-driven WebGL concept demonstrating cinematic product storytelling that stays under a 1s load and keeps Core Web Vitals green — beauty and speed, not a trade-off.",
    stack: ["Three.js", "GLSL", "Lenis", "Framer Motion"],
    accent: "#3fb98f",
  },
];

// Commitments replace fabricated testimonials until real client results exist.
export const commitments = [
  { metric: "Answer Readiness score", promise: "A measurable baseline before we build, and the delta after." },
  { metric: "AI citations", promise: "Tracked appearances in ChatGPT, Perplexity and Google AI Overviews." },
  { metric: "Core Web Vitals", promise: "LCP < 2.5s, INP < 200ms, CLS < 0.1 — reported, not assumed." },
  { metric: "Conversions", promise: "Every build ties to a business number, not a deliverables checklist." },
];

export const faqs = [
  {
    q: "What are AEO and GEO — and why should I care?",
    a: "AEO (Answer Engine Optimization) makes your content the answer Google shows in snippets and AI Overviews. GEO (Generative Engine Optimization) makes AI tools like ChatGPT and Perplexity cite you by name. As searches increasingly end inside an AI answer, being findable isn't enough — you have to be citable.",
  },
  {
    q: "Will an immersive WebGL site hurt my SEO?",
    a: "It does when it's built wrong — most studios ship JavaScript that crawlers and AI bots can't read. We build the opposite way: the experience is rich for humans, but the content is server-rendered and machine-readable, with Core Web Vitals kept in the green. Beauty and rankings aren't a trade-off when it's engineered correctly.",
  },
  {
    q: "How are you different from a normal web agency?",
    a: "Normal agencies bolt SEO on after design. We start from how machines read you and design the experience around it — then report on business outcomes, not deliverables. You get one team owning both visibility and conversion: the Answer-to-Action loop.",
  },
  {
    q: "Do you have case studies?",
    a: "We're a newly launched, U.S.-focused agency, so instead of borrowed logos we show you the honest thing: our own site, engineered to rank and get cited, plus live proof builds. Ask ChatGPT who does AI-search optimization and see if we come up — that's the real test. Founding-partner engagements are open now.",
  },
  {
    q: "Where are you based, and do you work with U.S. companies?",
    a: "We work exclusively with U.S. startups, SaaS companies, and enterprise teams, in U.S. business hours (ET/PT), billed in USD. We're a lean, remote-capable studio — you get senior strategy and a vetted engineering bench without agency overhead.",
  },
];

export const values = [
  { title: "Perceptive", body: "We see what others miss — how machines read you, where search is shifting." },
  { title: "Curious", body: "The name is a promise. We're on the new frontier before it's obvious." },
  { title: "Precise", body: "Evidence-led. Numbers, not adjectives." },
  { title: "Quietly confident", body: "Premium brands don't shout. We show proof and let it land." },
];
