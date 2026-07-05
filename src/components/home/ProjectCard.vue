<script setup lang="ts">
/**
 * "Liquid reveal" project card: a cover face (name + tags) sits on top of a
 * thumbnail; on hover the cover slides away to reveal the thumbnail behind
 * it with a "View project" prompt. Pure-CSS hover choreography — the only
 * thing driven from script is the scroll-triggered entrance.
 */
import { RouterLink } from "vue-router";
import type { ProjectEntry } from "@/types/content";
import SectionReveal from "@/components/common/SectionReveal.vue";
import PortraitFrame from "@/components/common/PortraitFrame.vue";

const props = defineProps<{
  project: ProjectEntry;
  index: number;
}>();

const num = String(props.index + 1).padStart(2, "0");
</script>

<template>
  <SectionReveal as="div" variant="swipe" :index="index" class="project-card-slot" v-slot="{ isIn }">
    <RouterLink :to="`/projects/${project.slug}`" class="project-card">
      <div class="project-card__thumb">
        <PortraitFrame :src="project.thumbnailUrl" :placeholder="`${project.name} thumbnail`" :alt="`${project.name} thumbnail`" fit="cover" />
      </div>

      <div class="project-card__thumb-cta">
        <h3 class="project-card__thumb-title">{{ project.name }}</h3>
        <span class="project-card__thumb-link">View Project <span aria-hidden="true">→</span></span>
      </div>

      <div class="project-card__cover">
        <span class="project-card__num">{{ num }}</span>
        <div class="project-card__cover-content" :class="{ 'is-in': isIn }">
          <h3 class="project-card__title">{{ project.name }}</h3>
          <div class="project-card__tags">
            <span v-for="tag in project.tags" :key="tag" class="project-card__tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </RouterLink>
  </SectionReveal>
</template>

<style scoped>
.project-card-slot {
  display: flex;
}

.project-card {
  flex: 1;
  position: relative;
  display: block;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-3);
  transition: border-color 0.4s ease;
}
.project-card:hover {
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
}

.project-card__thumb {
  position: absolute;
  inset: 0;
  z-index: 1;
  transform: scale(1.14);
  transition: transform 0.78s cubic-bezier(0.2, 0.72, 0.24, 1);
  will-change: transform;
}
.project-card:hover .project-card__thumb {
  transform: scale(1);
}

.project-card__thumb-cta {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  padding: 24px;
  text-align: right;
  background: linear-gradient(315deg, rgb(0 0 0 / 82%), rgb(0 0 0 / 42%) 17%, transparent 36%);
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 0.45s ease 0.12s,
    transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) 0.12s;
}
.project-card:hover .project-card__thumb-cta {
  opacity: 1;
  transform: none;
}

.project-card__thumb-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.55rem, 2.3vw, 2rem);
  letter-spacing: -0.025em;
  line-height: 1.04;
  margin: 0;
  color: #fff;
}

.project-card__thumb-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.project-card__cover {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  background: var(--card-grad);
  transition: transform 0.62s cubic-bezier(0.66, 0, 0.34, 1);
  will-change: transform;
}
.project-card:hover .project-card__cover {
  transform: translateY(101%);
}

.project-card__num {
  position: absolute;
  top: 20px;
  left: 24px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-2);
}

.project-card__cover-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-card__cover-content {
  opacity: 0;
}

.project-card__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.55rem, 2.3vw, 2rem);
  letter-spacing: -0.025em;
  line-height: 1.04;
  margin: 0;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.62s cubic-bezier(0.22, 0.68, 0.28, 1), transform 0.62s cubic-bezier(0.22, 0.68, 0.28, 1);
  transition-delay: 0.16s;
}
.project-card__cover-content.is-in .project-card__title {
  opacity: 1;
  transform: none;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.62s cubic-bezier(0.22, 0.68, 0.28, 1), transform 0.62s cubic-bezier(0.22, 0.68, 0.28, 1);
  transition-delay: 0.42s;
}
.project-card__cover-content.is-in .project-card__tags {
  opacity: 1;
  transform: none;
}

.project-card__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.03em;
  color: var(--ink-2);
  white-space: nowrap;
  padding: 5px 11px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg-2) 55%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .project-card__thumb,
  .project-card__thumb-cta,
  .project-card__cover,
  .project-card__cover-content,
  .project-card__title,
  .project-card__tags {
    transition: none;
  }
}
</style>
