<script setup lang="ts">
import type { HomeJumpNavItem } from "@/types/content";

defineProps<{
  items: HomeJumpNavItem[];
}>();
</script>

<template>
  <section class="home-jump-strip" aria-label="Section navigation">
    <div class="home-jump-strip__grid">
      <a
        v-for="item in items"
        :key="item.index"
        :href="item.href"
        class="home-jump-strip__card jump-card"
      >
        <div class="home-jump-strip__head">
          <p class="home-jump-strip__index mono">{{ item.index }}</p>
          <span class="jump-arrow" aria-hidden="true">↓</span>
        </div>
        <p class="home-jump-strip__label serif">{{ item.label }}</p>
        <p v-if="item.sublabel" class="home-jump-strip__sublabel mono">{{ item.sublabel }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home-jump-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.home-jump-strip__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  background: var(--bg-2);
}

.home-jump-strip__card {
  display: flex;
  flex-direction: column;
  padding: 22px 24px 24px;
  border-right: 1px solid var(--line);
  text-decoration: none;
  cursor: pointer;
  transition: background 200ms ease;
  min-width: 0;
}

.home-jump-strip__card:last-child {
  border-right: none;
}

.home-jump-strip__card:hover {
  background: var(--bg-3);
}

.home-jump-strip__card:hover .jump-arrow {
  transform: translateY(3px);
  color: var(--accent);
}

.home-jump-strip__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.home-jump-strip__index {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.home-jump-strip__label {
  margin: 0;
  font-size: clamp(1.1rem, 1.6vw, 1.75rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-weight: 500;
  color: var(--ink);
  overflow-wrap: anywhere;
}

.home-jump-strip__sublabel {
  margin: 8px 0 0;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.jump-arrow {
  color: var(--ink-3);
  transition: transform 200ms ease, color 200ms ease;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .home-jump-strip__card {
    padding: 16px 16px 18px;
  }
  .home-jump-strip__label {
    font-size: clamp(0.95rem, 3vw, 1.4rem);
  }
}

@media (max-width: 600px) {
  .home-jump-strip__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .home-jump-strip__card:nth-child(3) {
    border-right: none;
  }
}
</style>
