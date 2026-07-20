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
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "~60%", label: "of searches now end without a click. We build for the answer, not the leftover clicks." },
  { value: "3-layer", label: "Answer Readiness System: Findable → Extractable → Citable." },
  { value: "<1s", label: "target load — rich WebGL that still keeps Core Web Vitals green." },
  { value: "100%", label: "server-rendered content, so AI crawlers can actually read you." },
];

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

// The honest studio model — capabilities, not fabricated headcount.
export const capabilities = [
  { role: "Strategy & AI-Search", body: "Positioning, entity architecture, and the Answer Readiness System. The senior core of every engagement." },
  { role: "Engineering", body: "A vetted bench of Next.js / React Three Fiber engineers, assembled per project — capability without carried overhead." },
  { role: "Design & Motion", body: "Editorial UI, cinematic motion, and performance-guarded WebGL, held to one consistent system." },
  { role: "Delivery & Reporting", body: "One accountable contact, and outcomes reported in business terms — rankings, citations, CWV, conversions." },
];

// Real content roadmap (drawn from our 30-topic plan). Shown as "publishing soon",
// never as fabricated published posts.
export const insights = [
  { title: "What Is Answer Engine Optimization (AEO)?", cat: "AI Search", kind: "Guide" },
  { title: "GEO vs SEO: Ranking in ChatGPT, Gemini & Perplexity", cat: "AI Search", kind: "Guide" },
  { title: "How to Get Your Brand Cited by ChatGPT", cat: "AI Search", kind: "Playbook" },
  { title: "Why Your Organic Traffic Is Dropping (AI Overviews, Explained)", cat: "AI Search", kind: "Analysis" },
  { title: "Does WebGL Hurt SEO? Building Fast, Crawlable 3D", cat: "Immersive", kind: "Guide" },
  { title: "When an Immersive Website Is Worth It (and When It Isn't)", cat: "Immersive", kind: "Analysis" },
  { title: "Core Web Vitals in 2026: What Actually Moves Rankings", cat: "Performance", kind: "Guide" },
  { title: "Migrating From WordPress to Next.js: Is It Worth It?", cat: "Engineering", kind: "Analysis" },
  { title: "SEO vs AEO vs GEO: Where to Put Your 2026 Budget", cat: "AI Search", kind: "Playbook" },
  { title: "How to Audit Your Site's AI-Search Readiness", cat: "AI Search", kind: "Checklist" },
];

export const careerRoles = [
  { role: "Next.js / React Engineers", body: "Senior front-end and full-stack engineers comfortable with App Router, RSC, and performance budgets." },
  { role: "WebGL / Creative Developers", body: "React Three Fiber and GLSL specialists who care about 60fps as much as the visual." },
  { role: "Motion & UI Designers", body: "Editorial, systems-minded designers who can hold a premium bar across pages." },
  { role: "AI-Search Strategists", body: "SEO/AEO/GEO practitioners who lead with evidence, not adjectives." },
];

// ---------- Industries (US ICP — honest verticals, no fabricated clients) ----------
export type Industry = {
  slug: string;
  name: string;
  who: string;
  challenge: string;
  approach: string;
  service: string;
};

export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Funded Startups",
    who: "Seed to Series B",
    challenge:
      "You have to be found before the category leader locks in the narrative — and AI engines are already deciding who to name.",
    approach:
      "We make you the answer to the questions your market is asking AI, and ship a site fast enough to keep up with your roadmap.",
    service: "AI-Search Optimization",
  },
  {
    slug: "saas",
    name: "SaaS Companies",
    who: "Product-led & sales-led",
    challenge:
      "Buyers ask ChatGPT and Perplexity for feature, comparison, and integration answers — and your competitors are getting cited, not you.",
    approach:
      "Entity and schema architecture plus citation-ready content that puts your product inside those AI answers, tracked by referral.",
    service: "AI-Powered Websites",
  },
  {
    slug: "design-brands",
    name: "Design-Conscious Brands",
    who: "DTC, studios & premium services",
    challenge:
      "You need a site as considered as the product — without shipping JavaScript that crawlers and AI bots can't read.",
    approach:
      "Immersive, performance-guarded WebGL that stays server-rendered and machine-readable, with Core Web Vitals in the green.",
    service: "Immersive Web Experiences",
  },
  {
    slug: "enterprise",
    name: "Enterprise Teams",
    who: "Marketing & digital leaders",
    challenge:
      "AI-search visibility matters, but so do accessibility, security review, and procurement — most boutique shops can't meet that bar.",
    approach:
      "The Answer Readiness System delivered with an enterprise track: WCAG 2.2 AA, security documentation, and a single accountable contact.",
    service: "Next.js Development",
  },
];

// ---------- Pricing (indicative USD ranges — explicitly NOT a quote) ----------
export const pricing = {
  note:
    "Indicative USD ranges to help you plan — not a quote. Every engagement is scoped to your goals and reported against business outcomes. Book a call for an exact figure.",
  projectTypes: [
    { id: "sprint", label: "Answer Readiness Sprint", desc: "Audit, score, and a prioritized roadmap.", low: 3000, high: 6000 },
    { id: "aeo", label: "AI-Search Optimization", desc: "SEO + AEO + GEO over a focused 3-month engagement.", low: 9000, high: 24000 },
    { id: "immersive", label: "Immersive Website Build", desc: "Next.js with performance-guarded WebGL.", low: 15000, high: 45000 },
    { id: "ai-site", label: "AI-Powered Website", desc: "Next.js build with a RAG assistant and smart search.", low: 18000, high: 60000 },
  ],
  scope: [
    { id: "s", label: "Focused", hint: "Landing or a few key pages", mult: 1 },
    { id: "m", label: "Standard", hint: "Full marketing site", mult: 1.6 },
    { id: "l", label: "Ambitious", hint: "Large site or web platform", mult: 2.4 },
  ],
  addons: [
    { id: "webgl", label: "Signature WebGL moment", low: 4000, high: 10000 },
    { id: "assistant", label: "RAG site assistant", low: 6000, high: 15000 },
    { id: "cms", label: "Client-managed CMS", low: 3000, high: 8000 },
    { id: "content", label: "Citation-ready content system", low: 3000, high: 9000 },
  ],
} as const;

// ---------- Meeting types (booking) ----------
export const meetingTypes = [
  {
    id: "intro",
    name: "Intro Call",
    length: "20 min",
    who: "First conversation",
    desc: "A quick, no-pressure fit check. Tell us your goal; we'll tell you honestly whether we're the right team and what a first step looks like.",
  },
  {
    id: "review",
    name: "Answer Readiness Review",
    length: "45 min",
    who: "You have your score",
    desc: "We walk through your three-layer Answer Readiness breakdown together — where AI can and can't see you, and the highest-leverage fixes.",
  },
  {
    id: "scoping",
    name: "Project Scoping",
    length: "60 min",
    who: "Active opportunity",
    desc: "We define scope, timeline, and success metrics so your proposal reflects the real work — not a templated guess.",
  },
] as const;

// ---------- Resource Library (honest availability — no fake downloads) ----------
export type Resource = {
  title: string;
  kind: string;
  desc: string;
  available: boolean;
};

export const resources: Resource[] = [
  {
    title: "Answer Readiness Score",
    kind: "Free assessment",
    desc: "A three-layer read on how findable, extractable, and citable your site is to AI engines — with the highest-leverage fixes.",
    available: true,
  },
  {
    title: "The AEO / GEO Checklist",
    kind: "Checklist",
    desc: "The concrete steps that make your content the answer engines lift and cite — from schema to answer blocks to entity signals.",
    available: false,
  },
  {
    title: "Core Web Vitals for WebGL Sites",
    kind: "Technical guide",
    desc: "How to ship immersive 3D that still keeps LCP, INP, and CLS in the green — the exact budget we build to.",
    available: false,
  },
  {
    title: "WordPress → Next.js Migration Guide",
    kind: "Playbook",
    desc: "When a migration is worth it, what it costs, and how to move without losing rankings or content history.",
    available: false,
  },
];
