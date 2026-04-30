<script setup lang="ts">
import type { SkillsCluster } from "@/types/content";

defineProps<{
  clusters: SkillsCluster[];
}>();
</script>

<template>
  <section id="stack" class="skills-section" aria-label="Technical stack">
    <div class="skills-section__inner">
      <div class="skills-section__head">
        <div>
          <p class="kicker">The toolkit</p>
          <h2 class="skills-section__h2">What I reach for.</h2>
        </div>
      </div>
      <div class="skills-grid">
        <div
          v-for="(c, index) in clusters"
          :key="c.title"
          class="stack-col reveal"
          :class="`d${(index % 5) + 1}`"
        >
          <h3>{{ c.title }}</h3>
          <ul class="stack-items">
            <li v-for="item in c.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 96px 0;
  border-top: 1px solid var(--line);
}

.skills-section__inner {
  padding-inline: var(--pad-x);
}

.skills-section__head {
  margin-bottom: 36px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
}

.skills-section__h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  margin-top: 12px;
  letter-spacing: -0.02em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 32px;
}

.stack-col {
  border-top: 2px solid var(--accent);
  padding-top: 18px;
}

.stack-col h3 {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin: 0 0 14px;
}

.stack-items {
  margin: 0;
  padding-left: 0;
  list-style: none;
  color: var(--ink-2);
  font-size: 0.95rem;
  line-height: 1.55;
}

.stack-items li {
  margin-bottom: 0.42rem;
}

@media (max-width: 1100px) {
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
