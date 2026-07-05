import type { ProjectEntry } from "@/types/content";

export const projects: ProjectEntry[] = [
  {
    slug: "rendering-pipeline-rebuild",
    name: "Render Engine",
    title: "Rebuilding from the ground up: a 10x rendering pipeline",
    thumbnailUrl: "/images/RenderEngineThumbnail.webp",
    coverUrl: "/images/RenderEngineCover.webp",
    category: "Platform engineering",
    year: "2025",
    tags: ["Canvas + WebGL", "Puppeteer", "FFmpeg"],
    role: "Senior Software Engineer — Ezoic",
    impact: "Cut render times from 20+ minutes to under two minutes — a 10x improvement — while unlocking effects the legacy stack could not support.",
    summary:
      "Owned a ground-up redesign of Ezoic's video rendering architecture: new extensible data model, hybrid Canvas/WebGL + FFmpeg pipeline in headless Chrome, and an SQS-backed worker farm with database-tracked job stages.",
    stack: ["Vue", "TypeScript", "WebGL", "Canvas", "FFmpeg", "Node.js", "AWS", "SQS", "Headless Chrome"],
    highlights: [
      "Audited inherited constraints, designed a new core video data model for extensibility, and shipped a conversion layer to migrate legacy editor projects.",
      "Built internal editor APIs and reusable CRUD flows; kept the renderer local-first to isolate bugs without standing up hosting infrastructure.",
      "Repurposed preview Canvas/WebGL logic into a headless-browser backend renderer, piping frame output through FFmpeg for full effects support.",
      "Wrapped rendering in a horizontally scalable worker farm: SQS job queue, manager/worker orchestration, and per-stage status visibility in the database.",
      "Delivered a 10x speedup with measurably lower user dropout; documented tradeoffs around pipeline complexity and queue bottlenecks.",
    ],
    fullStory: `Rebuilding From the Ground Up: A 10x Rendering Pipeline
At Ezoic in 2025, I led the full redesign of our video rendering pipeline — a system that had quietly accumulated years of technical debt. The existing architecture leaned heavily on third-party software, resulting in render times exceeding 20 minutes and a hard ceiling on effects support. This is how I cut that time to under two minutes.

Auditing the Constraints
I began by mapping what we actually had: which constraints were fundamental, and which were inherited assumptions. After working through this with the team, the picture was clear — the existing data structures could not support the editing capabilities we needed, and incremental patching would not close the gap. A full rewrite of the core video data model was necessary.
I salvaged a handful of reusable asset structures, but the new model was designed from scratch for flexibility and extensibility. It was not backwards compatible, so we committed to deprecating the old editor, building a conversion layer for legacy data, and shipping a new editor UI alongside it. The conversion turned out to be straightforward once the schema was right.

Building the Editor
With the new data model in place, I designed the API surface, added reusable CRUD operations, and built an internal editor housing the Canvas and WebGL rendering logic. To iterate quickly and isolate rendering bugs without standing up hosting infrastructure, we kept the editor internal-only while the renderer ran locally. That decision let me move fast and kept feedback loops tight.
This phase is also where AI-assisted development made a real difference — Cursor with Claude Sonnet saved weeks during the most implementation-dense stretch of the project.

The Rendering Pipeline
The old pipeline outsourced most of its work to third-party software, which is why renders took 20+ minutes. I started the rewrite with FFmpeg as the primary rendering engine — fast, battle-tested, and already partially integrated. Early results were promising: major speed gains at comparable quality.
But FFmpeg hit a hard ceiling on effects. Basic frame operations were fine; complex effects like whiplash, glitch, and dot-matrix blur were not. We needed a different approach.
The answer was already in the editor: the Canvas and WebGL logic we had built for preview rendering. I repurposed it as the true backend rendering engine by running it inside a headless browser, using it to draw frames, then piping select operations through FFmpeg to produce the final output. The result: renders under two minutes, with full effects support — a 10x improvement over the legacy path.

Scaling It Out
A fast renderer that handles one job at a time is not enough at production scale. I wrapped the rendering engine in a worker farm: a manager polls an SQS queue for jobs (tracked in a database for status transparency and per-stage debugging), then spawns workers to handle them. Workers stay alive briefly between jobs to minimize respawn overhead. The farm scales horizontally across servers to support a global audience.

The Result
The system was scalable, fast, and reused existing preview logic wherever possible. I achieved a 10x render speedup, which directly reduced user dropout and improved UX. The tradeoff was added complexity during rendering and a new bottleneck in the SQS queue under peak load — both documented and monitored. Overall, a substantial technical success that we extended with additional features as the product matured.`,
  },
  {
    slug: "agent-memory-bank",
    name: "Memory Bank",
    title: "Semantic memory for AI agents: a self-hosted vector store",
    thumbnailUrl: "/images/MemoryBankThumbnail.webp",
    coverUrl: "/images/MemoryBankCover.webp",
    category: "AI infrastructure",
    year: "2026",
    tags: ["MCP", "Vector embedding", "Docker"],
    role: "Creator — Personal tooling",
    impact: "Built a local semantic memory stack powering resume generation, project context bootstrapping, and agent-assisted development across 30+ codebases — zero cloud embedding API dependency.",
    summary:
      "Designed and shipped a FastMCP server with PostgreSQL + pgvector, Ollama embeddings, and chunked ingest pipeline — exposing store, search, and batch ingest tools over Streamable HTTP for Cursor integration.",
    stack: ["Python", "FastMCP", "PostgreSQL", "pgvector", "Ollama", "asyncpg", "Docker Compose"],
    highlights: [
      "Implemented chunked embedding ingest (512-word chunks, 64-word overlap) with HNSW index (m=16, ef_construction=64) for cosine similarity search.",
      "Separated concerns into embedder, pipeline, repository, server, and metrics modules — MCP handlers call repository functions only.",
      "Exposed MCP-native tools (store_memory, search_memory, get_project_context, store_memories_batch) on Streamable HTTP for IDE agent integration.",
      "Ran fully local via Docker Compose: PostgreSQL with pgvector, Ollama sidecar (nomic-embed-text, 768-dim), and Prometheus metrics on a separate port.",
      "Powers craft-my-resume sync, portfolio content generation, and session bootstrapping across personal and client projects.",
    ],
    fullStory: `Semantic Memory for AI Agents: A Self-Hosted Vector Store
AI coding agents are only as good as the context they carry. I built Memory Bank to give my agents persistent, searchable knowledge about every project I touch — without sending embeddings to a cloud API or operating a separate vector database service.

Architecture
The stack is deliberately boring infrastructure done well. PostgreSQL with pgvector stores projects, memories, chunks, and ingestion logs in one database — vectors alongside relational metadata, no split persistence layer. Ollama runs nomic-embed-text locally (768-dimensional embeddings). FastMCP hosts the tool surface on Streamable HTTP, which Cursor registers as a native MCP server.
Docker Compose bundles db, ollama, mcp-server, and an init-ollama one-shot container. Prometheus metrics run on a separate port so observability does not share the MCP transport.

The Ingest Pipeline
Long-form memory text does not embed well as a single vector. The pipeline inserts a memory row, chunks content with overlapping word windows, embeds each chunk via Ollama, and writes vectors to memory_chunks. Ingestion is logged for auditability.
Search uses cosine similarity (<=> operator) against an HNSW approximate nearest-neighbor index — fast enough for interactive agent lookups during a coding session.

The MCP API
Tools expose a clean contract: store and search memories, bootstrap project context grouped by category, batch-ingest resume-ready statements, list and upsert projects. Repository pattern keeps all SQL in db/repository.py; server modules handle transport only.
This is the memory layer behind my resume sync skill, portfolio content, and the project context calls that agents make at the start of every session.

Design Tradeoffs
Local embeddings mean predictable cost and no data leaving the machine. The tradeoff is operational — you run Docker, you manage Ollama model pulls. For a personal knowledge base that agents query dozens of times a day, that tradeoff is worth it!`,
  },
  {
    slug: "fitcheck-scanner",
    name: "FitCheck",
    title: "Will it fit? A Playwright + LLM vehicle compatibility scanner",
    thumbnailUrl: "/images/FitCheckThumbnail.webp",
    coverUrl: "/images/FitCheckCover.webp",
    category: "Full-stack engineering",
    year: "2026",
    links: [
      {
        label: "demo",
        href: "https://fitcheck.therealdom.com"
      }
    ],
    tags: ["FastAPI", "Prompt defense", "LangChain"],
    role: "Full-Stack Engineer — Personal project",
    impact: "Built an end-to-end product-page analyzer that returns structured vehicle compatibility verdicts with per-stage timings and token usage — cutting LLM cost ~50% via early-exit on no-fitment pages.",
    summary:
      "Designed a six-stage analysis pipeline: SSRF-safe URL validation, Playwright fetch, multi-source content extraction, rule-based prefilter, and a two-stage LangChain LLM chain with Anthropic-first/OpenAI fallback.",
    stack: ["Python", "FastAPI", "Playwright", "LangChain", "Anthropic", "OpenAI", "BeautifulSoup4", "Pydantic", "Docker"],
    highlights: [
      "Orchestrated validate → fetch → extract → prefilter → LLM extract → LLM analyze with per-stage timings and token usage in every response.",
      "Extracted fitment signals from JSON-LD, __NEXT_DATA__, OG tags, and DOM selectors — retailer-agnostic without per-site scraper modules.",
      "Implemented two-stage LLM with early exit: skips the analyze call when extract finds no fitment, roughly halving token cost on irrelevant pages.",
      "Hardened against SSRF (DNS rebinding, private IPs, metadata endpoints) and bot-protection failures with typed error codes and actionable diagnostics.",
      "Protected the expensive pipeline with per-IP rate limiting (10 req/min) and a singleton Playwright browser with graceful lifespan shutdown.",
    ],
    fullStory: `Will It Fit? A Playwright + LLM Vehicle Compatibility Scanner
This was a fun little project from when I wanted to experiment with prompt defense and RAG (although I didn't get to the RAG). E-commerce fitment data is scattered across JSON-LD blocks, Next.js hydration payloads, meta tags, and custom DOM tables — different on every retailer. FitCheck takes a product URL and a vehicle description, then returns a structured compatibility verdict.

Pipeline Design
analyzer.analyze_product sequences six stages behind a single POST /api/analyze endpoint. Each stage is independently timed; the response includes usage metrics per LLM call. Route handlers stay thin; the orchestrator owns coordination and observability.
Stage 1 validates URLs with SSRF defenses beyond scheme checks — hostname resolution, private IP rejection, DNS rebinding protection against metadata endpoints like 169.254.169.254.
Stage 2 fetches the page via a process-wide Playwright singleton (Chromium in Docker with 1gb shm_size to prevent crashes under load). Bot protection detection identifies Cloudflare, eBay, Amazon, and generic CAPTCHA interstitials, returning structured FETCH_BLOCKED errors with vendor-specific suggestions instead of opaque failures.

Content Extraction and Prefilter
extract_content merges heterogeneous signals — JSON-LD, __NEXT_DATA__, Open Graph, meta descriptions, fitment table selectors — into combined_text. This works across Shopify, Next.js, and custom fitment UIs without per-retailer modules.
prefilter_content scores lines by fitment keywords and penalizes noise before the LLM sees anything. Rule-based truncation within a max_chars budget reduces input tokens and hallucination risk without an extra summarization call.
This is the stage where I ran into the classic bot protections and scraping problems. I didn't want to take the headache (been there, done that) and my laziness somehow led the AI to propose a really unique solution! I wasn't aware but you can have bookmarks that run code (known as a "bookmarklet"). So basically, a user can load the page, bypass all of the bot protection and simply open a bookmarklet and the page content gets copied into FitCheck!
I also implemented prompt defense at this stage. There are guardrails preventing the LLM from exposing information about the system, rejecting invalid requests that are not about fitment compatibility and recommending general behavior guidelines.

Two-Stage LLM with Early Exit
The extract stage pulls product metadata and fitment tables into structured JSON. The analyze stage runs only when fitment data exists — pages without vehicle data return immediately, cutting latency and token cost roughly in half.
LLM_PROVIDER=auto prefers Anthropic, falling back to OpenAI on quota or rate-limit errors when a second API key is configured. Typed AppError taxonomy maps ErrorCode enums to HTTP status and structured JSON bodies the frontend consumes for user-facing messages.

Production Packaging
A single Docker image bundles the Python backend, Playwright Chromium, static frontend, and healthcheck. slowapi rate limiting protects against abuse without Redis on a single-node deployment. pytest covers URL validation, extraction, prefilter, LLM stages, and API integration — with a smoke_test script for live server checks.`,
  },
//   {
//     slug: "shopify-os2-theme",
//     name: "Primal Storefront",
//     title: "Metafield-driven commerce: a custom Online Store 2.0 theme",
//     category: "E-commerce architecture",
//     year: "2025",
//     tags: ["Online Store 2.0", "Metafields", "50+ sections"],
//     role: "Lead Theme Engineer — Back to Primal",
//     impact: "Shipped a production Shopify theme with 50+ modular sections, metafield-driven PDPs, and merchant-editable quiz flows — no redeploy required for copy changes.",
//     summary:
//       "Architected a custom Online Store 2.0 theme separating merchandising data (Admin metafields and metaobjects) from presentation (version-controlled Liquid sections), with agent-assisted validation and catalog population via MCP.",
//     stack: ["Liquid", "JavaScript", "Shopify Online Store 2.0", "Shopify Metafields", "Shopify Metaobjects", "Shopify CLI", "MCP"],
//     highlights: [
//       "Composed page layouts from JSON templates with 50+ sections and snippets — merchants reorder blocks in the theme editor without Liquid edits.",
//       "Built a full PDP stack (hero, benefits, reviews, FAQs, ingredients) powered by custom.pdp_* metafields populated from Shopify Admin.",
//       "Centralized ingredient transparency via metaobjects shared across PDP spotlight, library grid, and SEO fallbacks in theme.liquid.",
//       "Implemented AJAX cart drawer using Cart API + Section Rendering API so Liquid remains the single source of truth for cart markup.",
//       "Encoded validate-then-dev and metafield population workflows as Cursor agent skills co-located with the theme repo.",
//     ],
//     fullStory: `Metafield-Driven Commerce: A Custom Online Store 2.0 Theme
// Back to Primal needed a storefront that could tell a ritual-guided brand story while staying maintainable as the catalog grew. I architected a custom Online Store 2.0 theme around a simple principle: merchandising data lives in Shopify Admin; presentation lives in version-controlled Liquid.

// Modular Page Composition
// JSON templates declare ordered section stacks per page type — home, product, ritual landing, ingredient library. Each section ships with a schema so merchants can reorder, disable, or configure blocks in the theme editor without touching code. Snippets encapsulate repeated fragments (product cards, review cards, ingredient cards) via {% render %}, keeping markup DRY across shop grids, PDPs, and editorial pages.
// theme.liquid provides the global shell — announcement bar, header, cart drawer, footer, sticky ritual bar — with ingredient-specific SEO overrides in one layout file.

// The Metafield-Driven PDP
// Hard-coding product copy in Liquid does not scale across a growing supplement catalog. I built a full PDP stack where each section reads product.metafields.custom.* with sensible fallbacks: tagline, highlights, FAQs, reviews, bottle tiers, ingredient spotlight rows. Merchandising teams update copy in Admin; the theme picks it up without a redeploy.
// Ingredient transparency goes further. Shopify Metaobjects power a shared Ingredients Library — one record reused on PDP spotlight rows, library grid pages, and detail templates, with a fallback chain for SEO metadata.

// Client Interactivity Without a Framework
// theme.js handles cart AJAX, quiz flows, collection filters, and PDP interactions in vanilla JavaScript. No build step in the theme repo; assets deploy directly through Shopify CLI. The cart drawer refreshes via /cart/*.js endpoints and /?sections=cart-drawer, so Section Rendering API re-renders Liquid markup after every add-to-cart — no parallel cart HTML duplicated in JavaScript.

// Agent-Assisted Operations
// Theme development does not end at deploy. Cursor skills in the repo encode operational playbooks: validate with Shopify's theme check MCP, populate PDP metafields from the Admin MCP, and run CLI push workflows. API scripts stay out of the theme; agents handle catalog maintenance from the IDE.

// The Result
// A production storefront where merchants own copy and layout, engineers own structure and presentation, and agents handle the tedious middle ground between them. The architecture scales with catalog growth without proportional theme churn.`,
//   },
//   {
//     slug: "creative-agent-pipeline",
//     name: "Creative Agent",
//     title: "Ad creative without an app: a schema-gated agentic pipeline",
//     category: "AI infrastructure",
//     year: "2025",
//     tags: ["JSON Schema", "MCP orchestration", "Zero deploy"],
//     role: "Workflow Architect — Back to Primal",
//     impact: "Designed an eight-stage generative ad pipeline with ten JSON Schema contracts and manual review gates — producing video, voice-over, and assembled creatives with no deployed application code.",
//     summary:
//       "Architected a files-as-interface creative pipeline where Cursor agents execute Stages 0–8 via MCP tools (fal.ai video, ElevenLabs TTS, Shopify catalog), with AJV validation gating every expensive API call.",
//     stack: ["Cursor", "MCP", "JSON Schema", "AJV", "fal.ai", "ElevenLabs", "Shopify"],
//     highlights: [
//       "Defined ten JSON Schema contracts that double as agent prompt output specifications — shape consistency without compiled types.",
//       "Built manual review gates via JSON field edits (variant status, export flags) instead of a custom UI; full audit trail in git.",
//       "Used MCP as the integration layer: fal queue polling, ElevenLabs TTS, Shopify product sourcing, and CDN export — no per-service SDK code in repo.",
//       "Implemented surgical variant regeneration: edit one JSON entry, re-run a scoped stage — cost control on generative APIs without full pipeline restart.",
//       "Inspected fal model schemas before image-to-video prompts to prevent unsupported reference_url parameters per model.",
//     ],
//     fullStory: `Ad Creative Without an App: A Schema-Gated Agentic Pipeline
// Marketing teams need video ads faster than a traditional production cycle allows. I designed a creative pipeline for Back to Primal that produces briefs, copy variants, generated video, voice-over, and assembled exports — without building a web application to orchestrate it.

// Files as Interface
// Each stage reads and writes named JSON artifacts under runs/{run-id}/ with fixed filenames and schemas. Cursor agent sessions execute stages on demand: consume a prompt template, read the prior artifact, invoke MCP tools, write the next artifact. Git diffs are the audit log; there is no database.
// Persistent brand context lives in brand/; cross-run history accumulates in run-log.json. The pipeline flows from product scrape through brief, copy, visual prompts, generation, assembly, and optional Shopify CDN export.

// Schema Gates Before Spend
// Generative API calls are expensive and non-deterministic. Ten JSON Schema files define strict contracts for every artifact. validate.js compiles schemas with AJV and checks run outputs before downstream stages execute — catching LLM structural errors before they trigger a fal or ElevenLabs charge.
// Schemas are embedded in prompt templates as output specifications, so agents know the target shape and validators enforce it post-hoc.

// MCP as Integration Layer
// External calls happen as MCP tool invocations, not custom SDK code. fal.ai handles video generation with internal queue polling abstracted by the MCP server. ElevenLabs provides TTS for approved copy variants. Shopify MCP sources product data at Stage 0 and optionally uploads finished assets at export.
// Switching video models means checking get_model_schema first — image-to-video capability is recorded per variant so unsupported reference_url parameters never reach the API.

// Manual Gates and Surgical Regen
// Approval between stages is a JSON edit: flip a variant status, set an export flag, save the file. No review UI to build or maintain. When one creative unit needs rework, edit a single JSON entry and re-run the scoped stage — not the full pipeline.
// The result is end-to-end ad creative production with zero deployed application code, controlled generative spend, and full version-controlled history of every run.`,
//   },
//   {
//     slug: "shopify-admin-mcp",
//     name: "Admin MCP",
//     title: "Shopify Admin in the IDE: a local MCP bridge",
//     category: "Platform engineering",
//     year: "2025",
//     tags: ["MCP server", "GraphQL", "Client Credentials"],
//     role: "Creator — Back to Primal tooling",
//     impact: "Shipped a stdio MCP server giving Cursor agents curated list/get/execute_graphql access to Shopify Admin — zero hosting, set-and-forget OAuth via Client Credentials flow.",
//     summary:
//       "Built a three-layer TypeScript MCP server (transport, auth-aware GraphQL client, domain tools) exposing products, orders, customers, and shop operations with Zod-validated inputs and mutation userErrors surfacing.",
//     stack: ["TypeScript", "@modelcontextprotocol/sdk", "Shopify Admin GraphQL API", "Client Credentials OAuth", "Zod", "Node.js"],
//     highlights: [
//       "Implemented Client Credentials OAuth with in-memory token cache and proactive refresh 60 seconds before expiry — no interactive OAuth in Cursor.",
//       "Registered domain tools (products, orders, customers, shop) as isolated modules plus execute_graphql escape hatch for advanced Admin operations.",
//       "Surfaced GraphQL mutation userErrors so agents self-correct failed mutations instead of treating partial success as complete.",
//       "Applied readOnlyHint on list/get tools and destructiveHint on execute_graphql — agents understand operation risk at registration time.",
//       "Powers PDP metafield population, catalog maintenance, and agent-assisted theme workflows alongside the Back to Primal storefront.",
//     ],
//     fullStory: `Shopify Admin in the IDE: A Local MCP Bridge
// Theme repos should not accumulate Admin API scripts. Merchandising operations still need programmatic access. I built a local MCP server that gives Cursor agents direct Shopify Admin GraphQL access — curated tools for common operations, an escape hatch for everything else.

// Three-Layer Architecture
// index.ts and tools/* handle MCP transport and registration. client.ts owns OAuth token exchange, caching, and GraphQL POST logic. Shopify Admin API 2026-04 is the backend. Clear boundaries mean adding a new resource tool is a new file plus one import, not a monolithic handler rewrite.
// Stdio transport matches Cursor's local MCP spawn model — no reverse proxy, no cloud hosting, no open ports.

// Set-and-Forget Auth
// Client Credentials OAuth exchanges client_id and client_secret for ~24-hour access tokens at startup. An in-memory cache refreshes proactively before expiry. Credentials live in .env, never in source control. For a local MCP server that agents invoke dozens of times per session, eliminating interactive OAuth was non-negotiable.

// Agent-Safe Tool Design
// List tools support Shopify search syntax and cursor pagination. Zod schemas define MCP inputSchema objects — agents receive structured parameter descriptions and validation errors at the boundary.
// Mutation responses include userErrors alongside data. Naive GraphQL wrappers often swallow these; agents that do treat partial success as complete make bad catalog changes. Surfacing userErrors lets agents self-correct.

// Integration With Theme Work
// The Admin MCP pairs with the Back to Primal theme's agent skills: populate PDP metafields from live product data, validate catalog changes, bulk-update merchandising copy — all from the IDE, with API scripts kept out of the theme repo entirely.`,
//   },
//   {
//     slug: "thobias-warehouse",
//     name: "Warehouse Hub",
//     title: "One service, four vendors: a commerce operations backend",
//     category: "Commerce integrations",
//     year: "2021",
//     tags: ["Shopify webhooks", "Multi-vendor", "MongoDB"],
//     role: "Backend Engineer — Thobias.com",
//     impact: "Unified Shopify, Recharge, Twilio, and Calendly into a single Express service syncing warehouse cube inventory with live commerce state — one deployable unit instead of per-vendor microservices.",
//     summary:
//       "Architected a multi-integration webhook backend routing Shopify order/product events, Recharge subscription lifecycle, Twilio SMS, and Calendly appointments through shared MongoDB persistence with HMAC-validated webhooks and composable middleware chains.",
//     stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Shopify Admin API", "Recharge API", "Twilio", "Docker Compose", "Helmet"],
//     highlights: [
//       "Validated Shopify webhooks via HMAC-SHA256 on raw request bodies before any inventory or cube-location mutations.",
//       "Chained Recharge webhook middleware: validate → bootstrap → Shopify customer fetch → tag check → tag mutation for membership limits.",
//       "Implemented dual authentication — browser sessions for warehouse UI and API keys for machine clients — against a single permission model.",
//       "Ran cron workers (scheduled SMS dispatch, six-hour Shopify SKU sync) in-process alongside the web server via node-cron.",
//       "Serialized concurrent database operations through an in-process FIFO queue to mitigate race conditions without external job infrastructure.",
//     ],
//     fullStory: `One Service, Four Vendors: A Commerce Operations Backend
// Thobias ran warehouse operations, subscription memberships, customer messaging, and appointment scheduling against the same product catalog. Four vendors, one operational reality. I built a single Express service to coordinate them.

// Unified Webhook Surface
// Shopify order, refund, and product webhooks hit HMAC-validated endpoints — raw body preserved in the parser verify hook, signature checked against a shared secret before any state mutation. Spoofed payloads cannot corrupt cube locations or inventory counts.
// Recharge subscription events flow through a composable middleware chain: validate, bootstrap, fetch the Shopify customer, check membership tags, apply tag mutations. Subscription lifecycle stays synchronized with Shopify customer state for membership limits — without a separate subscription datastore.

// Warehouse and API Access
// MongoDB persists products, Shopify cache, clients, API keys, sessions, scheduled messages, and appointments. A singleton Database opens per-collection mongoose connections at startup; a FIFO queue on the Collection abstraction serializes concurrent writes to mitigate race conditions on shared documents.
// Browser users authenticate via express-session stored in MongoDB (survives restarts). Machine clients use Authorization header API keys. Both paths resolve against the same client.permissions model.

// Background Work Without a Worker Fleet
// node-cron schedules per-minute SMS dispatch and six-hour Shopify SKU presence sync after Database.connectAll — workers share the Database singleton and config with the web server in one Docker Compose deployment. For a single-node warehouse operation, in-process scheduling beats operating Redis and a separate worker tier.
// Twilio handles scheduled SMS, emergency webhook failure alerts, and inbound UGC with Google Drive archival. Calendly appointments land in the same MongoDB cluster.

// The Result
// One deployable service coordinates e-commerce, subscriptions, and messaging instead of four microservices that drift out of sync. The architecture trades distributed scale for operational simplicity — the right call for the deployment size.`,
//   },
//   {
//     slug: "thobias-cto",
//     name: "Shoot-to-Shelf",
//     title: "Building a content pipeline — and the team to run it",
//     category: "Leadership",
//     year: "2021",
//     tags: ["CTO", "Computer vision", "Mentorship"],
//     role: "CTO — Thobias.com",
//     impact: "Automated photoshoot-to-Shopify listing workflows and mentored two junior engineers into independent problem-solvers — including a MediaPipe motion-tracking pipeline with interpolation-smoothed output.",
//     summary:
//       "Designed a computer-vision-assisted content pipeline (MediaPipe pose segmentation, OpenCV batch processing, webhook-driven Shopify publishing) and used the project to grow junior developers into stronger systems thinkers.",
//     stack: ["Python", "MediaPipe", "OpenCV", "Shopify", "Node.js", "Express", "Webhooks"],
//     highlights: [
//       "Built end-to-end photoshoot automation: pose-guided image cropping, mask-based brightness normalization, and portrait video zoom/pan for mobile-ready output.",
//       "Implemented two-pass video pose analysis — landmark aggregation before rendering — with linear interpolation smoothing crop positions between frames.",
//       "Automated Shopify listing via custom app webhooks: describe, tag, and publish after initial listing creation without manual intervention.",
//       "Mentored two self-taught ML-background developers through architecture tradeoffs, implementation pitfalls, and production debugging.",
//       "Introduced a questioning framework ('What if we had X?') to help juniors break out of single-paradigm thinking.",
//     ],
//     fullStory: `Building a Content Pipeline — and the Team to Run It
// At Thobias in 2021, getting photoshoot content from camera to live product listing was slow and heavily manual. As CTO, I oversaw the automation of that workflow — and used it as a vehicle to grow the two junior developers who built it.

// The Pipeline
// The process started at the photoshoot. Raw images needed cropping, formatting, and cleanup before they were usable. I mentored the team through building a pre-processing layer in Python with MediaPipe pose landmarks and OpenCV — segmenting human subjects, cropping to configurable body regions, and normalizing brightness and color via mask-guided enhancement. A single orchestration function keeps batch and single-image paths identical.
// For video, a two-pass pipeline separates landmark aggregation from frame rendering. The first pass collects pose statistics across the clip; the second pass renders with stable crop bounds. Hip-tracked panning with timed zoom-out converts landscape runway footage to portrait output. Linear interpolation smooths crop positions between frames rather than snapping — eliminating the jitter that abrupt per-frame corrections produce.

// Shopify Publishing
// Cleaned assets fed into an automated listing workflow. A custom Shopify app used webhooks to trigger after initial listing creation: describe the product, apply tags, publish — without human intervention at each step. The backend ran on Node.js and Express.

// The Team
// Jay-R and Mark were both self-taught, both with machine learning backgrounds, and both genuinely curious. We were fully remote; collaboration happened through virtual meetings and steady async messages. Their ML depth was real, but it was also a blind spot — self-taught engineers often apply one paradigm to every new problem.

// The Mentorship
// My instinct as a mentor is guardrails, not a GPS. That leaves room for developers to find their own paths.
// During the photoshoot workflow, they identified an ongoing problem on their own: models standing off-center, footage coming out misframed. Without being asked, they proposed motion tracking to keep the subject centered. They got roughly 80% there before hitting jitter in the output. I introduced linear interpolation in a 1:1 — smoothing crop position gradually between frames. Before our next meeting, both had independently researched it and attempted implementation. They came back stuck on the application gap — understanding a concept versus wiring it into a specific context. A short conversation closed it.
// The harder challenge was structural: helping developers break out of mental models they already had. The questions I used — "What if we had X?", "What if we didn't need to do X?" — shift thinking from within constraints to around them.

// The Result
// By the end, Jay-R was actively identifying problems, proposing solutions, and arriving at conversations halfway through the thinking. The pipeline turned photoshoot output into live listings with minimal manual effort. The best outcome a mentor can hope for: not that someone needed you less, but that they needed themselves more.`,
//   },
//   {
//     slug: "frontend-modernization",
//     name: "Catalog Watch",
//     title: "Knowing where every product stood: a Chrome extension, a scraper, and a dashboard",
//     category: "Automation",
//     year: "2018",
//     tags: ["Chrome extension", "Inventory sync", "Marketplace intel"],
//     role: "Software Engineer — Nutragroup",
//     impact: "Replaced manual cross-platform catalog monitoring with automated ingestion and a single dashboard — later extended into unattended Amazon analytics across ten regional marketplaces.",
//     summary:
//       "Built a dual-source data collection system (passive Chrome extension + scheduled Node.js crawler) centralizing product, inventory, and forecasting data into an internal Express/MySQL dashboard with predictive reorder insights.",
//     stack: ["Chrome Extension", "Node.js", "Express", "MySQL", "Cron", "Web Scraping", "Web Workers"],
//     highlights: [
//       "Implemented a background Chrome extension detecting and scraping product data during normal internal browsing — zero extra steps for operators.",
//       "Added a scheduled Node.js crawler guaranteeing full catalog coverage when pages had not been visited recently.",
//       "Centralized data into a dashboard with inventory tracking, sales velocity, revenue, COGS, and predictive reorder date calculations.",
//       "Decoupled product catalogs from extension bundles via a REST API — a pattern reused in later Amazon analytics tooling at scale.",
//       "Designed for real browser sessions with DOM access to avoid headless automation detection on marketplace pages.",
//     ],
//     fullStory: `Knowing Where Every Product Stood: A Chrome Extension, a Scraper, and a Dashboard
// At Nutragroup in 2018, keeping tabs on our supplement product library across multiple e-commerce platforms was manual and error-prone. I built a system to automate it — from detection to dashboard.

// Passive Detection at the Source
// The foundation was a Chrome extension running silently in the background on internal machines. As employees browsed the platforms we sold on, the extension detected our products and scraped relevant data immediately — the work happened while the team worked.
// The catch: if no one had visited a product page recently, that product went untracked. I added a Node.js cron job sweeping the entire product library on a schedule, guaranteeing full coverage regardless of browsing patterns. Together, the extension and crawler meant no product could fall through the cracks.

// Centralizing the Data
// Data from both sources aggregated into an internal dashboard on Node.js and Express with a MySQL backend. The team had one place to see catalog state across platforms.
// I layered inventory tracking, then analytics: sales velocity, revenue, and cost of goods. The final piece was predictive reorder date calculations — giving operations a heads-up before stock became an issue.

// Architecture That Scaled Forward
// A key decision was decoupling product catalogs from the extension bundle via a REST API. The extension fetches paginated product lists and category URLs from a backend rather than hard-coding ASINs. That pattern carried forward into later marketplace analytics work — unattended Chrome jobs chaining review extraction, best-seller BSR scraping, and product ranking snapshots across ten regional Amazon domains, with Web Workers parallelizing extraction inside real browser sessions.

// The Result
// What had been scattered and manual became automatic and centralized. The team always knew where inventory stood, how products were performing, and what needed attention — without anyone going looking for it.`,
//   },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
