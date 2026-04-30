<script setup lang="ts">
import type { HeroContent } from "@/types/content";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  content: HeroContent;
}>();

const titleParts = computed(() => {
  const { headline, lineAccent } = props.content;
  if (!lineAccent || !headline.includes(lineAccent)) {
    return { before: headline, accent: null as string | null, after: "" };
  }
  const i = headline.indexOf(lineAccent);
  return {
    before: headline.slice(0, i),
    accent: lineAccent,
    after: headline.slice(i + lineAccent.length),
  };
});
</script>

<template>
  <section class="home-hero" aria-label="Introduction">
    <div class="home-hero__grain bg-grain" aria-hidden="true" />
    <div class="container hero-grid">
      <div class="reveal d1">
        <p class="kicker">OPEN TO SENIOR + STAFF ENGINEERING ROLES</p>
        <h1 class="hero-title">
          <template v-if="titleParts.accent">
            <span>{{ titleParts.before }}</span
            ><span class="line-accent">{{ titleParts.accent }}</span
            ><span>{{ titleParts.after }}</span>
          </template>
          <template v-else>
            {{ content.headline }}
          </template>
        </h1>
        <p class="subhead">{{ content.subhead }}</p>
        <div class="hero-actions">
          <RouterLink :to="content.primaryCta.to" class="btn btn-primary">{{
            content.primaryCta.label
          }}</RouterLink>
          <RouterLink :to="content.secondaryCta.to" class="btn btn-ghost">{{ content.secondaryCta.label }}</RouterLink>
        </div>
      </div>
      <div class="hero-decor reveal d2" aria-hidden="true">
        <div class="bg-grain" />
        <div class="hero-decor__ring">
          <span class="hero-decor__ds serif">DS</span>
          <span class="hero-decor__name mono">Dom Singh</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  isolation: isolate;
}
.home-hero__grain {
  z-index: 0;
  opacity: 0.5;
  pointer-events: none;
}
.hero-grid {
  position: relative;
  z-index: 1;
}
.hero-decor {
  min-height: 200px;
  position: relative;
  border: 1px solid var(--line);
  background: var(--bg-2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0.72;
}
.hero-decor .bg-grain {
  z-index: 0;
  opacity: 0.6;
}
.hero-decor__ring {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
}
.hero-decor__ds {
  font-size: clamp(3.5rem, 8vw, 4.5rem);
  line-height: 0.9;
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: -0.03em;
}
.hero-decor__name {
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.mono {
  font-family: var(--mono);
}
.serif {
  font-family: var(--serif);
}

@media (max-width: 900px) {
  .hero-decor {
    display: none;
  }
}
</style>
