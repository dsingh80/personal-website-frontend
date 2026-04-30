<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getProjectBySlug } from "@/content/projects";

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const project = computed(() => getProjectBySlug(slug.value));
</script>

<template>
  <div class="page section">
    <div class="section-inner narrow">
      <RouterLink to="/projects" class="back">← All projects</RouterLink>
      <template v-if="project">
        <h1 class="title">{{ project.title }}</h1>
        <p class="role">{{ project.role }}</p>
        <p class="summary">{{ project.summary }}</p>
        <h2 class="h2">Highlights</h2>
        <ul class="bullets">
          <li v-for="h in project.highlights" :key="h">{{ h }}</li>
        </ul>
        <h2 class="h2">Stack</h2>
        <ul class="tags">
          <li v-for="s in project.stack" :key="s">{{ s }}</li>
        </ul>
        <p v-if="project.links?.length" class="links">
          <a v-for="l in project.links" :key="l.href" :href="l.href" target="_blank" rel="noopener noreferrer">{{
            l.label
          }}</a>
        </p>
      </template>
      <template v-else>
        <h1 class="title">Project not found</h1>
        <p class="summary">This slug is not in the content catalog yet.</p>
        <RouterLink to="/projects">Browse projects</RouterLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 42rem;
}

.back {
  display: inline-block;
  margin-bottom: var(--space-lg);
  font-size: 0.9375rem;
}

.title {
  margin: 0 0 var(--space-sm);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.role {
  margin: 0 0 var(--space-md);
  color: var(--color-accent);
  font-weight: 600;
}

.summary {
  margin: 0 0 var(--space-xl);
  color: var(--color-text-muted);
}

.h2 {
  margin: var(--space-xl) 0 var(--space-sm);
  font-size: 1.125rem;
}

.bullets {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags li {
  font-size: 0.8125rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.links {
  margin-top: var(--space-xl);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}
</style>
