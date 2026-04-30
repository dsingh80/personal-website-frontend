import type { ProjectEntry } from "@/types/content";

export const projects: ProjectEntry[] = [
  {
    slug: "ai-video-platform",
    title: "AI video generation platform",
    role: "Senior Software Engineer — Ezoic",
    impact: "Enabled daily production-ready feature delivery with measurable rendering gains.",
    summary:
      "End-to-end platform for autonomous content creation: orchestration, rendering, and delivery at scale.",
    stack: ["Vue", "TypeScript", "Go", "AWS", "OpenAPI", "SQS", "Lambda", "ECS"],
    highlights: [
      "Designed multi-agent async workflows for generation, code review, QA, and deployment.",
      "Improved cross-service alignment with OpenAPI-first API contracts.",
      "Built operation farms and patterns that dramatically reduced rendering time.",
    ],
  },
  {
    slug: "frontend-modernization",
    title: "Vue + TypeScript + Vite migration",
    role: "Senior Software Engineer — Ezoic",
    impact: "Improved maintainability, team confidence, and shipping speed.",
    summary: "Migrated a large frontend to modern tooling while keeping product momentum.",
    stack: ["Vue", "TypeScript", "Vite"],
    highlights: [
      "Established TS-first patterns and component boundaries.",
      "Improved developer experience and build performance with Vite.",
    ],
  },
  {
    slug: "thobias-cto",
    title: "Technical and operational ownership",
    role: "CTO — Thobias.com",
    impact: "Cut production cycle from one week to three hours.",
    summary: "Full ownership from environments and reviews to automation and storefront delivery.",
    stack: ["Node.js", "CI/CD", "Integrations"],
    highlights: [
      "Cut release cycle from about one week to about three hours.",
      "Automated content and warehouse workflows; reduced cost and human error.",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
