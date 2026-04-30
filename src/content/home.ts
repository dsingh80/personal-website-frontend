import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  hero: {
    headline: "I build systems that ship — and teams that trust the process.",
    lineAccent: "teams that trust the process",
    subhead:
      "Eleven years turning messy requirements into production software: AI platforms at scale, Vue + TypeScript frontends, Go services on AWS, and the glue (OpenAPI, CI/CD, async workflows) that keeps it all honest.",
    primaryCta: { label: "View projects", to: "/projects" },
    secondaryCta: { label: "Download resume", to: "/resume" },
  },
  metrics: [
    { value: "11+", label: "Years shipping software" },
    { value: "10x", label: "Delivery acceleration", detail: "Process and platform improvements at scale." },
    { value: "0-1", label: "From sketch to production" },
  ],
  stackMarquee: [
    "Vue 3",
    "TypeScript",
    "Vite",
    "Go",
    "OpenAPI",
    "AWS (ECS, Lambda, SQS)",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "CI/CD",
    "WebGL",
  ],
  jumpNav: [
    { index: "01", label: "Stories", href: "#stories" },
    { index: "02", label: "Career", href: "#career" },
    { index: "03", label: "Stack", href: "#stack" },
    { index: "04", label: "About", href: "#about" },
    { index: "05", label: "Get in touch", href: "#contact" },
  ],
  story: [
    {
      id: "ezoic-ai",
      headline: "Shipping an AI video platform without losing the plot",
      dek: "When the product is autonomous content at scale, the hard part is orchestration — not a single model call.",
      link: { label: "View project", to: "/projects/ai-video-platform" },
    },
    {
      id: "migration",
      headline: "Migrating a large frontend without freezing the roadmap",
      dek: "Big-bang rewrites fail; incremental truth wins — Vue, TypeScript, and Vite with clear boundaries.",
      link: { label: "View project", to: "/projects/frontend-modernization" },
    },
    {
      id: "cto-thobias",
      headline: "Owning the whole stack when the business depends on software",
      dek: "From warehouse systems to marketing ops — environments, reviews, and automation that matched product pace.",
      link: { label: "View project", to: "/projects/thobias-cto" },
    },
  ],
  timeline: [
    {
      id: "ezoic",
      period: "Present",
      step: "01",
      headline: "Senior Software Engineer — Ezoic",
      lede: "End-to-end AI video platform, multi-agent async workflows, and OpenAPI-first services on AWS.",
    },
    {
      id: "thobias",
      period: "Prior",
      step: "02",
      headline: "CTO — Thobias.com",
      lede: "Owned environments, reviews, storefront CI/CD, and internal automation from warehouse to marketing.",
    },
    {
      id: "earlier",
      period: "Earlier",
      step: "03",
      headline: "Software engineer — enterprise & integrations",
      lede: "Large frontends, legacy stack integration, and the migration muscle that later scaled to Ezoic-scale platforms.",
    },
  ],
  skillClusters: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "Ruby (learning)"],
    },
    {
      title: "Frontend",
      items: ["Vue.js", "React", "WebGL & Canvas", "Component systems"],
    },
    {
      title: "Backend & data",
      items: ["Node.js", "REST", "OpenAPI-first design", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Infra & tools",
      items: ["Docker", "AWS (ECS, SQS, Lambda, CloudFront, S3, CodeBuild)", "Terraform (learning)"],
    },
  ],
  about: {
    intro:
      "I’m Dom — a senior software engineer with eleven years of experience and a bias toward ownership. I’m strongest where product ambiguity meets technical depth.",
    paragraphTwo:
      "I work independently but I love collaborating across departments. I lead and mentor when given the chance. I interpret messy specifications, resolve confusion, identify inefficient workflows, and prioritize what drives the most impact.",
    paragraphThree:
      "The thing I'm proudest of isn't a feature I shipped — it's the engineers I've helped grow along the way.",
  },
  closingCta: {
    headline: "Tell me what you're building.",
    body: "Looking for a team that values mentorship, communication, and ownership. If that sounds like yours, the inbox is open.",
    linkLabel: "singhdam27@gmail.com",
    linkTo: "mailto:singhdam27@gmail.com",
    secondaryLabel: "LinkedIn",
    secondaryHref: "https://www.linkedin.com/in/domsingh/",
  },
};
