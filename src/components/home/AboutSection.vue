<script setup lang="ts">
import type { HomeAboutContent } from "@/types/content";

defineProps<{
  content: HomeAboutContent;
}>();
</script>

<template>
  <section id="about" class="about-section" aria-label="About Dom">
    <div class="about-section__inner">
      <div class="about-section__grid">
        <div class="about-section__left">
          <p class="kicker">About</p>
          <h2 class="about-section__h2">The short version of a longer story.</h2>
        </div>
        <div class="about-section__right">
          <p class="about-copy reveal d1">{{ content.intro }}</p>
          <p v-if="content.paragraphTwo" class="about-copy reveal d2">{{ content.paragraphTwo }}</p>
          <p v-if="content.paragraphThree" class="about-copy reveal d3">{{ content.paragraphThree }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 96px 0;
  border-top: 1px solid var(--line);
}

.about-section__inner {
  padding-inline: var(--pad-x);
}

.about-section__grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
}

.about-section__h2 {
  font-size: clamp(1.8rem, 3vw, 2.75rem);
  margin-top: 12px;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.about-copy {
  margin: 0 0 1.15rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--ink-2);
}

.about-copy:last-child {
  margin-bottom: 0;
}

@media (max-width: 860px) {
  .about-section__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
