/** Homepage hero copy. */
export interface PortfolioHeroContent {
  kicker: string;
  headline: string;
  subhead: string;
}

/** Homepage closing contact section copy (links/socials live in `content/site.ts`). */
export interface PortfolioContactContent {
  kicker: string;
  headline: string;
  body: string;
}

export interface ProjectNarrative {
  challenge: string;
  contribution: string;
  outcome: string;
}

export interface ProjectEntry {
  slug: string;
  /** Short punchy name for the project card (e.g. "Render Engine"). */
  name: string;
  title: string;
  thumbnailUrl: string;
  coverUrl: string;
  /** Short category label shown on the project card (e.g. "Platform engineering"). */
  category: string;
  /** Year shown on the project detail page. */
  year: string;
  summary: string;
  role: string;
  stack: string[];
  /** Short chips shown on the card's cover face (max ~3 for layout). */
  tags: string[];
  highlights: string[];
  /** Short outcome line for cards / listings */
  impact?: string;
  /** Long-form case study body shown on dedicated project pages */
  fullStory?: string;
  narrative?: ProjectNarrative;
  links?: { label: string; href: string }[];
}

export interface PersonalityPillar {
  title: string;
  description: string;
}

export interface AboutContent {
  intro: string;
  values: string[];
  /** Narrative pillars — same themes as homepage About cards */
  pillars?: PersonalityPillar[];
  now: string;
  next: string;
}
