<script setup lang="ts">
import type { HomeStory } from "@/types/content";
import { RouterLink } from "vue-router";

defineProps<{
  articles: HomeStory[];
}>();
</script>

<template>
  <section id="stories" class="stories-section" aria-label="Career stories">
    <div class="stories-section__inner">
      <div class="stories-section__head">
        <div>
          <p class="kicker">Selected stories</p>
          <h2 class="stories-section__h2">Projects I've contributed to and learned from.</h2>
        </div>
        <p class="stories-section__hint mono">Hover any card</p>
      </div>

      <!-- Featured lead card -->
      <div v-if="articles[0]" class="stories-lead story-card reveal d1" :class="{ 'story-card--linked': Boolean(articles[0].link) }">
        <div class="stories-lead__left">
          <div class="stories-lead__tags">
            <span v-if="articles[0].tag" class="chip">{{ articles[0].tag }}</span>
            <span v-if="articles[0].year" class="chip">{{ articles[0].year }}</span>
            <span class="stories-lead__featured mono">★ Featured</span>
          </div>
          <h3 class="stories-lead__title">
            <RouterLink v-if="articles[0].link" :to="articles[0].link.to" class="stories-lead__link">
              {{ articles[0].headline }}
            </RouterLink>
            <template v-else>{{ articles[0].headline }}</template>
          </h3>
          <p class="stories-lead__dek">{{ articles[0].dek }}</p>
          <RouterLink v-if="articles[0].link" :to="articles[0].link.to" class="btn btn-ghost stories-lead__btn">
            View project →
          </RouterLink>
        </div>
        <div class="stories-lead__right" aria-hidden="true">
          <p class="stories-lead__placeholder mono">Flickify · drop screenshot here</p>
        </div>
      </div>

      <!-- Remaining cards 2-col grid -->
      <div class="stories-grid">
        <article
          v-for="(a, index) in articles.slice(1)"
          :key="a.id"
          class="story-article story-card reveal"
          :class="[`d${index + 2}`, { 'story-card--linked': Boolean(a.link) }]"
        >
          <div class="story-card__tags">
            <span v-if="a.tag" class="chip">{{ a.tag }}</span>
            <span v-if="a.year" class="chip">{{ a.year }}</span>
          </div>
          <h3 class="story-card__title">
            <RouterLink v-if="a.link" :to="a.link.to" class="story-card__title-link">{{ a.headline }}</RouterLink>
            <template v-else>{{ a.headline }}</template>
          </h3>
          <p class="article-dek">{{ a.dek }}</p>
          <RouterLink v-if="a.link" :to="a.link.to" class="story-card__cta mono">View project →</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-section {
  padding: 80px 0;
  border-top: 1px solid var(--line);
}

.stories-section__inner {
  padding-inline: var(--pad-x);
}

.stories-section__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 36px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
}

.stories-section__h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  margin-top: 12px;
  letter-spacing: -0.02em;
}

.stories-section__hint {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
  white-space: nowrap;
  align-self: flex-end;
  padding-bottom: 4px;
}

/* Lead card */
.stories-lead {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 0;
  border: 1px solid var(--line);
  background: var(--bg-2);
  margin-bottom: 20px;
}

.stories-lead__left {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.stories-lead__right {
  padding: 4px;
  background: var(--bg-3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
}

.stories-lead__placeholder {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-4);
  opacity: 0.5;
}

.stories-lead__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  align-items: center;
}

.stories-lead__featured {
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-left: 4px;
}

.stories-lead__title {
  font-size: clamp(1.5rem, 2.5vw, 2.375rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
  font-weight: 500;
}

.stories-lead__link {
  color: inherit;
  text-decoration: none;
  transition: color 180ms ease;
}

.stories-lead__link:hover {
  color: var(--accent);
}

.stories-lead__dek {
  font-size: 17px;
  color: var(--ink-2);
  line-height: 1.55;
  margin: 0 0 24px;
  flex: 1;
}

.stories-lead__btn {
  align-self: flex-start;
}

/* Grid cards */
.stories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.story-article {
  padding: 30px;
  border: 1px solid var(--line);
  background: var(--bg-2);
  display: flex;
  flex-direction: column;
}

.story-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.story-card__title {
  font-size: 1.5rem;
  line-height: 1.18;
  letter-spacing: -0.015em;
  margin: 0 0 14px;
  font-weight: 500;
}

.story-card__title-link {
  color: inherit;
  text-decoration: none;
  transition: color 180ms ease;
}

.story-card__title-link:hover {
  color: var(--accent);
}

.article-dek {
  font-size: 15px;
  color: var(--ink-2);
  line-height: 1.55;
  margin: 0 0 20px;
  flex: 1;
}

.story-card__cta {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
  align-self: flex-start;
  transition: color 180ms ease;
}

.story-card__cta:hover {
  color: var(--accent-2);
}

@media (max-width: 900px) {
  .stories-lead {
    grid-template-columns: 1fr;
  }

  .stories-lead__right {
    min-height: 160px;
  }

  .stories-grid {
    grid-template-columns: 1fr;
  }

  .stories-section__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
