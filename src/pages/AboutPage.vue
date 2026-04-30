<script setup lang="ts">
import { aboutContent } from "@/content/about";
</script>

<template>
  <div class="page section">
    <div class="section-inner narrow">
      <h1 class="title">About</h1>
      <p class="intro">{{ aboutContent.intro }}</p>
      <h2 class="h2">Values</h2>
      <ul class="list">
        <li v-for="v in aboutContent.values" :key="v">{{ v }}</li>
      </ul>
      <template v-if="aboutContent.pillars?.length">
        <h2 class="h2">How I show up</h2>
        <ul class="pillar-list">
          <li v-for="p in aboutContent.pillars" :key="p.title">
            <strong class="pillar-title">{{ p.title }}</strong>
            <span class="pillar-desc">{{ p.description }}</span>
          </li>
        </ul>
      </template>
      <h2 class="h2">Now</h2>
      <p class="text">{{ aboutContent.now }}</p>
      <h2 class="h2">Next</h2>
      <p class="text">{{ aboutContent.next }}</p>
    </div>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 42rem;
}

.title {
  margin: 0 0 var(--space-lg);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.intro {
  margin: 0 0 var(--space-xl);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.h2 {
  margin: var(--space-xl) 0 var(--space-sm);
  font-size: 1.125rem;
  color: var(--color-accent);
}

.list {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
}

.pillar-list {
  margin: 0 0 var(--space-xl);
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.pillar-title {
  display: block;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.pillar-desc {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}

.text {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
