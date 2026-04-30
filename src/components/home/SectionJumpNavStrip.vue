<script setup lang="ts">
import type { HomeJumpNavItem } from "@/types/content";

defineProps<{
  items: HomeJumpNavItem[];
}>();
</script>

<template>
  <section class="home-jump-strip section" aria-label="Section navigation">
    <div class="container">
      <div class="jump-grid home-jump-strip__grid">
        <a v-for="item in items" :key="item.index" :href="item.href" class="jump-card home-jump-strip__card">
          <div class="home-jump-strip__head">
            <p class="home-jump-strip__index">{{ item.index }}</p>
            <span class="jump-arrow" aria-hidden="true">↓</span>
          </div>
          <p class="home-jump-strip__label">{{ item.label }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-jump-strip {
  padding-block: 0;
  border-bottom: 1px solid var(--line);
}

.home-jump-strip__grid {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.home-jump-strip__card {
  display: block;
  border: 1px solid var(--line);
  background: var(--bg-2);
  border-radius: 2px;
  padding: 0.85rem 1rem;
  text-decoration: none;
}

.home-jump-strip__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
}

.home-jump-strip__index {
  margin: 0;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.home-jump-strip__label {
  margin: 0;
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.jump-arrow {
  color: var(--ink-3);
  transition: transform 200ms ease, color 200ms ease;
}
</style>
