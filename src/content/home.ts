import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  hero: {
    headline: "Eleven years of building. Still learning every day.",
    lineAccents: ["building", "Still learning"],
    subhead:
      "I'm Dom — a senior engineer with over a decade of experience turning ideas into reliable software. I care about steady progress, clear communication, and learning with every project.",
    primaryCta: { label: "Read the stories →", href: "#stories" },
    secondaryCta: { label: "singhdam27@gmail.com", href: "mailto:singhdam27@gmail.com" },
  },
  metrics: [
    { value: "11+", label: "Years professional" },
    { value: "10x", label: "Render speedup at Ezoic" },
    { value: "1w→3h", label: "Deploy time as CTO" },
    { value: "4", label: "Companies shipped to" },
  ],
  stackMarquee: [
    "Vue.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Go",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Lambda",
    "ECS",
    "SQS",
    "CloudFront",
    "Terraform",
    "OpenAPI",
    "Datadog",
    "WebGL",
    "Canvas",
    "Ruby",
    "CI/CD",
    "Vite",
  ],
  jumpNav: [
    { index: "01", label: "Selected stories", sublabel: "Flickify, Thobias, more", href: "#stories" },
    { index: "02", label: "Career arc", sublabel: "Middle school → today", href: "#career" },
    { index: "03", label: "Toolkit", sublabel: "Languages, infra, style", href: "#stack" },
    { index: "04", label: "About", sublabel: "How I work", href: "#about" },
    { index: "05", label: "Get in touch", sublabel: "Email + socials", href: "#contact" },
  ],
  story: [
    {
      id: "rendering-pipeline-rebuild",
      headline: "Rebuilding from the ground up: a 10x rendering pipeline",
      dek: "At Ezoic, I redesigned a debt-heavy video rendering system into a scalable Canvas/WebGL + FFmpeg pipeline that cut render time from 20+ minutes to under one minute.",
      tag: "Platform engineering",
      year: "2025",
      link: { label: "View project", to: "/projects/rendering-pipeline-rebuild" },
    },
    {
      id: "nutragroup-product-visibility",
      headline: "Knowing where every product stood: extension + scraper + dashboard",
      dek: "At Nutragroup, I automated product detection and scheduled scraping across ecommerce platforms, then centralized inventory and forecasting in one internal dashboard.",
      tag: "Automation",
      year: "2018",
      link: { label: "View project", to: "/projects/frontend-modernization" },
    },
    {
      id: "cto-thobias",
      headline: "Building a content pipeline — and the team to run it",
      dek: "At Thobias, I automated the path from photoshoot assets to live Shopify listings while mentoring two junior developers into confident problem-solvers.",
      tag: "Leadership",
      year: "2021",
      link: { label: "View project", to: "/projects/thobias-cto" },
    },
  ],
  timeline: [
    {
      id: "ezoic",
      period: "Present",
      step: "01",
      headline: "Senior Software Engineer — Ezoic",
      lede: "Contributing to AI video workflows, API design, and production services while continuing to grow in system design.",
    },
    {
      id: "thobias",
      period: "Prior",
      step: "02",
      headline: "CTO — Thobias.com",
      lede: "Built and supported environments, CI/CD, and internal tools in close partnership with product and operations teams.",
    },
    {
      id: "earlier",
      period: "Earlier",
      step: "03",
      headline: "Software engineer — enterprise & integrations",
      lede: "Learned through enterprise integrations, legacy systems, and frontend modernization work that strengthened my fundamentals.",
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
    {
      title: "Process & delivery",
      items: ["OpenAPI-first design", "CI/CD pipelines", "Multi-agent AI workflows", "Code review culture", "Async-first teams"],
    },
  ],
  about: {
    intro:
      "I'm a growth-oriented engineer who's spent the last eleven years building enterprise software. I value communication, empathy, and continuous learning as much as technical execution.",
    paragraphTwo:
      "I work well independently, but I do my best work in collaboration. I enjoy mentoring, clarifying ambiguity, and helping teams move forward with practical, maintainable solutions.",
    paragraphThree:
      "What matters most to me is steady improvement — in the software, in the team, and in myself.",
  },
  closingCta: {
    headline: "Tell me what you're building.",
    body: "I'm looking for a team where I can contribute, keep growing, and help others grow too. If that sounds like a fit, I'd love to connect.",
    linkLabel: "singhdam27@gmail.com",
    linkTo: "mailto:singhdam27@gmail.com",
    secondaryLabel: "LinkedIn",
    secondaryHref: "https://www.linkedin.com/in/domsingh/",
  },
};
