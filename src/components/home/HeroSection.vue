<script setup lang="ts">
import type { HeroContent } from "@/types/content";
import type { HomeMetric } from "@/types/content";
import { computed } from "vue";

const props = defineProps<{
  content: HeroContent;
  metrics: HomeMetric[];
}>();

const titleParts = computed(() => {
  const { headline, lineAccents } = props.content;
  if (!lineAccents?.length) return [{ text: headline, accent: false }];

  const parts: { text: string; accent: boolean }[] = [];
  let remaining = headline;
  for (const accent of lineAccents) {
    const idx = remaining.indexOf(accent);
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: remaining.slice(0, idx), accent: false });
    parts.push({ text: accent, accent: true });
    remaining = remaining.slice(idx + accent.length);
  }
  if (remaining) parts.push({ text: remaining, accent: false });
  return parts;
});
</script>

<template>
  <section class="home-hero" aria-label="Introduction">
    <div class="bg-grain home-hero__grain" aria-hidden="true" />
    <div class="home-hero__inner">
      <div class="reveal" style="display:flex;align-items:center;gap:12px;margin-bottom:36px">
        <span class="pulse-dot" aria-hidden="true" />
        <span class="home-hero__kicker mono">Open to Senior + Staff Engineering Roles</span>
      </div>
      <h1 class="home-hero__title reveal d1">
        <template v-for="part in titleParts" :key="part.text">
          <span v-if="part.accent" class="home-hero__accent">{{ part.text }}</span>
          <template v-else>{{ part.text }}</template>
        </template>
      </h1>
      <p class="home-hero__dek reveal d2">{{ content.subhead }}</p>
      <div class="home-hero__actions reveal d3">
        <a :href="content.primaryCta.href" class="btn btn-primary">{{ content.primaryCta.label }}</a>
        <a :href="content.secondaryCta.href" class="btn">{{ content.secondaryCta.label }}</a>
      </div>
      <div class="home-hero__stats reveal d4">
        <div v-for="m in metrics" :key="m.value" class="home-hero__stat">
          <div class="stat-num accent">{{ m.value }}</div>
          <div class="stat-label">{{ m.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  padding-top: 120px;
  padding-bottom: 96px;
  overflow: hidden;
}

.home-hero__grain {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.home-hero__inner {
  position: relative;
  z-index: 1;
  padding-inline: var(--pad-x);
}

.home-hero__kicker {
  font-size: 11.5px;
  color: var(--ink-2);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-hero__title {
  font-family: var(--serif);
  font-size: 96px;
  line-height: 0.98;
  letter-spacing: -0.03em;
  font-weight: 500;
  margin: 0 0 32px;
  max-width: 1100px;
  text-wrap: balance;
}

.home-hero__accent {
  color: var(--accent);
  font-style: italic;
}

.home-hero__dek {
  font-size: 20px;
  color: var(--ink-2);
  line-height: 1.55;
  max-width: 760px;
  margin: 0 0 44px;
}

.home-hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.home-hero__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 36px;
  padding-top: 44px;
  border-top: 1px solid var(--line);
  max-width: 1080px;
}

.home-hero__stat .stat-num {
  font-family: var(--serif);
  font-size: clamp(2.8rem, 5vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0;
}

.home-hero__stat .stat-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-3);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .home-hero {
    padding-top: 72px;
    padding-bottom: 64px;
  }

  .home-hero__title {
    font-size: clamp(3rem, 10vw, 6rem);
  }

  .home-hero__dek {
    font-size: 17px;
  }

  .home-hero__stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 520px) {
  .home-hero__stats {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
