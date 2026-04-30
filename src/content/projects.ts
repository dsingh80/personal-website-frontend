import type { ProjectEntry } from "@/types/content";

export const projects: ProjectEntry[] = [
  {
    slug: "rendering-pipeline-rebuild",
    title: "Rebuilding from the ground up: a 10x rendering pipeline",
    role: "Senior Software Engineer — Ezoic",
    impact: "Cut render times from over 20 minutes to under one minute while expanding effects support.",
    summary:
      "Led a full redesign of Ezoic's rendering architecture by replacing debt-heavy third-party dependencies with a new data model and a hybrid Canvas/WebGL + FFmpeg pipeline, then scaled it through an SQS-backed worker farm.",
    stack: ["Vue", "TypeScript", "WebGL", "Canvas", "FFmpeg", "Node.js", "AWS", "SQS"],
    highlights: [
      "Audited inherited constraints, rewrote the core video data model for extensibility, and shipped a conversion layer to migrate legacy editor data.",
      "Built internal editor APIs and reusable CRUD flows, then accelerated implementation and bug isolation with local-first iteration and AI-assisted development.",
      "Repurposed preview rendering logic into a headless-browser backend renderer, combining Canvas/WebGL frame generation with FFmpeg output processing for full effects support.",
      "Wrapped rendering in a horizontally scalable worker farm: SQS job queue + manager/worker orchestration + database-backed stage/status visibility.",
      "Delivered a 10x speedup with better UX and lower user dropout, while documenting tradeoffs around pipeline complexity and queue bottlenecks.",
    ],
    fullStory: `Rebuilding From the Ground Up: A 10x Rendering Pipeline
At Ezoic in 2025, I led the full redesign of our video rendering pipeline — a system that had quietly accumulated years of technical debt. The existing architecture leaned heavily on third-party software and contractor-maintained code, resulting in render times exceeding 20 minutes and a ceiling on what kinds of effects we could ever support. This is the story of how I cut that time to under one minute.

Auditing the Constraints
I began by mapping what we actually had. Which constraints were hard limits, and which were just inherited assumptions? After working through this with the team, the picture became clear: the existing data structures couldn't support the editing capabilities we wanted, and a piecemeal fix wasn't going to cut it. A full rewrite of the core video data model was necessary.
I salvaged a handful of reusable asset structures, but the new data model was designed from scratch for flexibility and extensibility — tradeoffs included. Most notably, it wasn't backwards compatible, so we committed to deprecating the old editor, building a conversion layer for legacy data, and shipping a new editor UI alongside it. The conversion turned out to be surprisingly straightforward.

Building the Editor (and Leaning on AI)
With the new data model in place, I designed the API endpoints, added reusable CRUD operations, and built a new editor that housed the Canvas and WebGL rendering logic. To iterate quickly and isolate rendering bugs without standing up hosting infrastructure, we kept the editor internal-only while the renderer ran locally. This was the right call — it let me move fast.
This phase is also where AI-assisted development made a real difference. I used Cursor heavily, particularly with Claude Sonnet, and it saved me weeks of work during the most implementation-dense stretch of the project.

The Rendering Pipeline
The old pipeline outsourced most of its work to third-party software, which is why renders took 20+ minutes. I started the rewrite with FFmpeg as the primary rendering engine — it's fast, battle-tested, and we already had some existing usage to build from. Early results were promising: major speed gains, comparable quality.
But FFmpeg hit a hard ceiling on effects support. Basic frame operations were fine; complex effects like whiplash, glitch, and dot-matrix blur were not. We needed a different approach.
The answer was already sitting in the editor: the Canvas and WebGL logic we'd built for preview rendering. I repurposed it as the true backend rendering engine by running it inside a headless browser, using it to draw frames, then piping select operations through FFmpeg to produce the final output. The result: renders under one minute, with full effects support. A 10x improvement.

Scaling It Out
A fast renderer that can only handle one job at a time isn't enough. I wrapped the rendering engine in a worker farm: a manager polls an SQS queue for jobs (tracked in a database for status transparency and per-stage debugging), then spawns workers to handle them. Workers stay alive for a short period between jobs to minimize respawn time and cut unnecessary overhead. The farm can scale horizontally across servers to support a global audience.

The Result
The system was scaleable, fast, minimized wasted time, and reused existing logic as much as possible. We had a 10x render speed up thus decreasing user dropout and improving UX. The tradeoff was added complexity during rendering and a new bottleneck in the SQS queue. Overall, a big technical success that we inevitably extended with additional features.`,
  },
  {
    slug: "frontend-modernization",
    title: "Knowing where every product stood: a Chrome extension, a scraper, and a dashboard",
    role: "Software Engineer — Nutragroup",
    impact: "Automated cross-platform catalog monitoring and gave teams a single source of inventory truth.",
    summary:
      "Built a passive detection + scheduled scraping system that centralized product, inventory, and forecasting data into an internal dashboard.",
    stack: ["Chrome Extension", "Node.js", "Express", "MySQL", "Cron", "Web Scraping"],
    highlights: [
      "Implemented a background Chrome extension that detected and scraped product data during normal internal browsing.",
      "Added a scheduled Node.js crawler to guarantee full product coverage even when pages were not recently visited.",
      "Centralized data into an internal dashboard with inventory, sales velocity, revenue, COGS, and predictive reorder date insights.",
    ],
    fullStory: `Knowing Where Every Product Stood: A Chrome Extension, a Scraper, and a Dashboard
At Nutragroup in 2018, keeping tabs on our supplement product library across multiple e-commerce platforms was a manual, error-prone process. I built a system to automate it — from detection to dashboard.

Passive Detection at the Source
The foundation was a Chrome extension running silently in the background on internal computers. As employees browsed the platforms we sold on, the extension would detect our products on the page and immediately scrape the relevant data — no extra steps required. The work happened while the team worked.
The catch: if no one had visited a product page recently, that product went untracked. To close that gap, I added a Node.js cron job that swept our entire product library on a schedule, guaranteeing full coverage regardless of browsing patterns. The extension and the cron job together meant no product could fall through the cracks.

Centralizing the Data
With data flowing in from both sources, I aggregated everything into an internal dashboard built on Node.js and Express. The dashboard gave the team a single place to see the state of our full catalog across platforms.
I layered in a MySQL-backed inventory tracking system, then built out analytics on top of it: sales velocity, revenue, and cost of goods. The final addition was predictive re-order date calculations — giving the team a heads-up on when to contact manufacturers before stock became an issue.

The Result
What had been scattered and manual became automatic and centralized. The team always knew where inventory stood, how products were performing, and what needed attention next — without anyone having to go looking for it.`,
  },
  {
    slug: "thobias-cto",
    title: "Building a content pipeline — and the team to run it",
    role: "CTO — Thobias.com",
    impact: "Automated the path from photoshoot assets to live Shopify listings while leveling up two junior engineers.",
    summary:
      "Built a computer-vision-assisted content pipeline and webhook-driven Shopify publishing flow, then used the project to mentor junior developers into stronger systems thinkers.",
    stack: ["Python", "OpenCV", "Shopify", "Node.js", "Express", "Webhooks"],
    highlights: [
      "Designed and automated a photoshoot-to-listing pipeline that reduced manual processing across image prep and publishing.",
      "Mentored two self-taught junior developers through architecture tradeoffs, implementation pitfalls, and production problem solving.",
      "Introduced interpolation-based smoothing to stabilize motion tracking output and improve final media quality.",
    ],
    fullStory: `Building a Content Pipeline — and the Team to Run It
At Thobias in 2021, getting photoshoot content from camera to live product listing was slow and heavily manual. As CTO, I oversaw the automation of that workflow — and used it as a vehicle to grow the two junior developers who built it.

The Pipeline
The process started at the photoshoot. Raw images needed to be processed before they were usable — cropping, formatting, cleanup — and I mentored the team through building that pre-processing layer in Python with OpenCV.
From there, the cleaned assets fed into an automated product listing workflow on Shopify. Rather than manually filling out listings, we built a custom Shopify app that used webhooks to trigger automatically after an initial listing was created: it would describe the product, apply tags, and publish — all without human intervention. The backend ran on Node.js and Express, and the result was a pipeline that turned photoshoot output into live listings with minimal manual effort at each step.

The Team
Jay-R and Mark were both self-taught, both with machine learning backgrounds, and both genuinely curious in a way that made them a pleasure to work with. They asked a lot of questions — good ones — and that natural curiosity was something I connected with immediately. We were fully remote, which meant our collaboration happened through virtual meetings and a steady stream of typed messages whenever something needed clarifying mid-thought. It worked well.
Their ML background was strong, but it was also their blind spot. Self-taught engineers often develop deep expertise in the area they entered through, and then unconsciously apply that same lens to every new problem. Part of my job was helping them see past it.

The Mentorship
My instinct as a mentor isn't to point people toward the right answer — it's to keep them away from the really bad ones. Guardrails, not a GPS. That approach leaves room for developers to find their own paths, and when you give curious people that space, they occasionally surprise you.
Jay-R and Mark did exactly that. During the photoshoot workflow, they identified an ongoing problem on their own: the model would sometimes stand off-center during shoots, and footage would come out misframed. Without being asked, they proposed adding motion tracking to the video to keep the subject centered automatically. It was a sharp idea, and they ran with it — getting roughly 80% of the way there before hitting a wall. The tracking worked, but the resulting video was jittery; every frame correction was abrupt, making the output feel unstable.
I pulled them into a quick 1:1 to introduce the idea of linear interpolation — smoothing the crop position gradually between frames rather than snapping to each new position. I hadn't asked them to go research it; I'd simply floated it as a possibility. But before our next meeting, both of them had independently gone off, looked it up, and attempted an implementation on their own. They came back when they got stuck on the application — knowing what interpolation was in theory but not how to wire it into this specific context. That gap between understanding a concept and knowing how to deploy it is one of the most common places junior developers stall, and sometimes all it takes is a short conversation to close it.

The Harder Problem
The jitter fix was a teachable moment I could see coming. The harder challenge was more structural: helping developers break out of the mental models they already had.
The questions I used with Jay-R and Mark were the same ones I ask myself when I'm stuck in my own habits — "What if we had X?", "What if we didn't need to do X?" They sound simple, but they do real work. They shift thinking from within the current constraints to around them, which is where most interesting solutions live. The goal wasn't to give them answers. It was to give them a questioning framework they could apply without me.

Jay-R
By the end, the clearest sign the mentorship had landed was Jay-R. He stopped waiting for problems to come to him and started actively looking for them — identifying issues, proposing solutions, and arriving at conversations already halfway through the thinking. He'd had the ability all along. What changed was the confidence to trust it. Having someone consistently available to answer questions, without judgment, seemed to be enough to convince him that his instincts were worth following.
That's the best outcome a mentor can hope for: not that someone needed you less, but that they needed themselves more.`,
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
