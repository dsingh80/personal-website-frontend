<script setup lang="ts">
import { projects } from "@/content/projects";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="page section">
    <div class="section-inner">
      <h1 class="title">Projects</h1>
      <p class="lede">Case-shaped snapshots — more detail on each page as this site grows.</p>
      <ul class="list">
        <li v-for="p in projects" :key="p.slug" class="item">
          <RouterLink :to="`/projects/${p.slug}`" class="item-link">
            <span class="item-title">{{ p.title }}</span>
            <span class="item-meta">{{ p.role }}</span>
          </RouterLink>
          <p class="item-summary">{{ p.summary }}</p>
          <p v-if="p.impact" class="item-impact">{{ p.impact }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 0 0 var(--space-sm);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.lede {
  margin: 0 0 var(--space-xl);
  color: var(--color-text-muted);
  max-width: 36rem;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.item {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.item-link {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  text-decoration: none;
  color: inherit;
}

.item-link:hover .item-title {
  color: var(--color-accent);
}

.item-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
}

.item-meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.item-summary {
  margin: var(--space-sm) 0 0;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}

.item-impact {
  margin: var(--space-sm) 0 0;
  font-size: 0.875rem;
  color: var(--color-accent-strong);
  font-weight: 500;
}
</style>
