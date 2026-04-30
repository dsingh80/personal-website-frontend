<script setup lang="ts">
import type { HomeStory } from "@/types/content";
import SectionContainer from "@/components/common/SectionContainer.vue";
import { RouterLink } from "vue-router";

defineProps<{
  articles: HomeStory[];
}>();
</script>

<template>
  <SectionContainer id="stories" label="Stories" aria-label="Career stories">
    <h2 class="section-title">How I work, in three threads</h2>
    <p class="section-lede">
      Resume bullets are compressed truth. These are the hooks — deeper narrative lives on each project page.
    </p>
    <div class="stories-grid stories-mosaic">
      <article
        v-for="(a, index) in articles"
        :key="a.id"
        class="story-article story-card reveal"
        :class="[`d${index + 1}`, { 'story-card--linked': Boolean(a.link) }]"
      >
        <div class="story-card__head">
          <h3 class="story-card__title">
            <RouterLink v-if="a.link" :to="a.link.to" class="story-card__title-link">{{ a.headline }}</RouterLink>
            <template v-else>{{ a.headline }}</template>
          </h3>
          <span v-if="a.link" class="story-arrow" aria-hidden="true">→</span>
        </div>
        <p class="article-dek">{{ a.dek }}</p>
      </article>
    </div>
  </SectionContainer>
</template>

<style scoped>
.story-card--linked {
  cursor: pointer;
}

.story-card__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.story-card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  flex: 1;
  min-width: 0;
}
.story-card__title-link {
  color: inherit;
  text-decoration: none;
  transition: color 180ms ease;
}
.story-card__title-link:hover {
  color: var(--accent);
}
.stories-mosaic {
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.stories-mosaic .story-article {
  position: relative;
  min-height: 10.5rem;
  padding: 1.35rem 1.2rem 1.15rem;
  overflow: hidden;
}

.stories-mosaic .story-article::after {
  content: "";
  position: absolute;
  right: 0.85rem;
  top: 0.85rem;
  width: 0.45rem;
  height: 0.45rem;
  border: 1px solid var(--line-2);
  opacity: 0.6;
}

.stories-mosaic .story-article:nth-child(1) {
  grid-column: span 7;
  grid-row: span 2;
  min-height: 15rem;
}

.stories-mosaic .story-article:nth-child(2),
.stories-mosaic .story-article:nth-child(3) {
  grid-column: span 5;
}

.stories-mosaic .story-article:nth-child(n + 4) {
  grid-column: span 6;
}

@media (max-width: 1024px) {
  .stories-mosaic .story-article:nth-child(1) {
    grid-column: span 12;
    grid-row: span 1;
  }
  .stories-mosaic .story-article:nth-child(2),
  .stories-mosaic .story-article:nth-child(3),
  .stories-mosaic .story-article:nth-child(n + 4) {
    grid-column: span 6;
  }
}

@media (max-width: 900px) {
  .stories-mosaic {
    grid-template-columns: 1fr;
  }
  .stories-mosaic .story-article,
  .stories-mosaic .story-article:nth-child(1),
  .stories-mosaic .story-article:nth-child(2),
  .stories-mosaic .story-article:nth-child(3),
  .stories-mosaic .story-article:nth-child(n + 4) {
    grid-column: auto;
    min-height: 0;
  }
}
</style>
