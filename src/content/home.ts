import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  hero: {
    headline: "Eleven years of shipping. Started in middle school.",
    lineAccents: ["shipping", "middle school"],
    subhead:
      "I'm Dom — a senior engineer who's spent more than a decade taking software from first sketch to production deploys at global scale. I lead, mentor, and own things end-to-end. Below are the stories.",
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
    {
      title: "Process & delivery",
      items: ["OpenAPI-first design", "CI/CD pipelines", "Multi-agent AI workflows", "Code review culture", "Async-first teams"],
    },
  ],
  about: {
    intro:
      "I'm a problem-solver who's spent the last eleven years writing enterprise code. I value meaningful communication, interpersonal skills, and personal growth — and I believe the best engineering happens when talented people are empowered to do their best work.",
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
