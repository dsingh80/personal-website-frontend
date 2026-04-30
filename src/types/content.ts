/** Shared link shape for CTAs in content modules */
export interface CtaLink {
  label: string;
  to: string;
}

export interface HeroContent {
  headline: string;
  /** One or more substrings to italicise + colour with var(--accent). Each must match exactly. */
  lineAccents?: string[];
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

/** Baseline-shaped homepage story card (title, dek, optional link, tags). */
export interface HomeStory {
  id: string;
  headline: string;
  dek: string;
  detail?: string;
  link?: CtaLink;
}

export interface HomeMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface HomeJumpNavItem {
  index: string;
  label: string;
  sublabel?: string;
  href: string;
}

/** @deprecated Use `HomeStory` */
export type StoryEntry = HomeStory;

export interface TimelineEntry {
  id: string;
  /** First column: tenure / era label */
  period: string;
  /** Optional age metadata row from baseline */
  age?: string;
  /** Fourth column: optional step index or stat */
  step?: string;
  /** Main heading line */
  headline: string;
  /** Visible summary under the headline */
  lede: string;
}

export interface SkillsCluster {
  title: string;
  items: string[];
  linkTo?: string;
}

export interface PersonalityPillar {
  title: string;
  description: string;
}

/** Homepage About excerpt — aligns with full [`AboutContent`] */
export interface HomeAboutContent {
  intro: string;
  paragraphTwo?: string;
  paragraphThree?: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
}

export interface CtaSection {
  headline: string;
  body: string;
  linkLabel: string;
  linkTo: string;
  secondaryLabel: string;
  secondaryHref: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
  quaternaryLabel?: string;
  quaternaryHref?: string;
}

/** Homepage content contract — composed sections, typed for reuse across the site. */
export interface HomePageContent {
  hero: HeroContent;
  metrics: HomeMetric[];
  /** Technology labels for the horizontal marquee */
  stackMarquee: string[];
  jumpNav: HomeJumpNavItem[];
  story: HomeStory[];
  timeline: TimelineEntry[];
  skillClusters: SkillsCluster[];
  about: HomeAboutContent;
  closingCta: CtaSection;
}

export type HomeContent = HomePageContent;

/** @deprecated use HomeStory */
export type StoryArticle = HomeStory;
/** @deprecated use SkillsCluster */
export type SkillCluster = SkillsCluster;
/** @deprecated use PersonalityPillar */
export type HobbyCard = PersonalityPillar;

export interface ProjectNarrative {
  challenge: string;
  contribution: string;
  outcome: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  /** Short outcome line for cards / listings */
  impact?: string;
  narrative?: ProjectNarrative;
  links?: { label: string; href: string }[];
}

export interface AboutContent {
  intro: string;
  values: string[];
  /** Narrative pillars — same themes as homepage About cards */
  pillars?: PersonalityPillar[];
  now: string;
  next: string;
}
