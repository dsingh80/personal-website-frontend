import type { AboutContent } from "@/types/content";

export const aboutContent: AboutContent = {
  intro:
    "I’m Dom — a senior software engineer with eleven years of professional experience and a bias toward ownership. I like problems where the spec is fuzzy but the stakes are real: platforms, migrations, and the human coordination around both.",
  values: [
    "Meaningful communication over performative process",
    "Clarity in APIs and expectations",
    "Shipping in slices with measurable risk reduction",
    "AI as leverage when paired with strong review and tests",
  ],
  pillars: [
    {
      title: "Clear communication",
      description:
        "Specs are never complete — I get energy from translating ambiguity into something buildable and testable.",
    },
    {
      title: "Continuous learning",
      description:
        "Stack churn is optional; curiosity isn’t. I use AI as a multiplier, not a substitute for judgment.",
    },
    {
      title: "Systems thinking",
      description: "Whether it’s async farms or org workflows, I look for the constraint that actually matters.",
    },
  ],
  now: "Building narrative-forward personal tooling and sharpening infra skills (Terraform).",
  next: "More public writing on orchestration, frontend migrations, and pragmatic AI workflows.",
};
