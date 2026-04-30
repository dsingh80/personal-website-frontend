<script setup lang="ts">
import type { SkillsCluster } from "@/types/content";
import SectionContainer from "@/components/common/SectionContainer.vue";

defineProps<{
  clusters: SkillsCluster[];
}>();
</script>

<template>
  <SectionContainer id="stack" label="Stack" aria-label="Technical stack">
    <h2 class="section-title">Technical range</h2>
    <p class="section-lede">Stack depth where it matters; willingness to learn where it doesn’t exist yet.</p>
    <div class="stack-grid">
      <div v-for="(c, index) in clusters" :key="c.title" class="stack-col reveal" :class="`d${(index % 4) + 1}`">
        <h3>{{ c.title }}</h3>
        <ul class="stack-items">
          <li v-for="item in c.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.stack-col {
  border-top: 1px solid var(--accent);
  padding-top: 0.8rem;
}
.stack-col h3 {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin: 0 0 0.8rem;
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
</style>
