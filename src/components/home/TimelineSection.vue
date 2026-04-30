<script setup lang="ts">
import type { TimelineEntry } from "@/types/content";
import SectionContainer from "@/components/common/SectionContainer.vue";

defineProps<{
  entries: TimelineEntry[];
}>();
</script>

<template>
  <SectionContainer id="career" aria-label="Work history">
    <h2 class="section-title">Fourteen years of compounding.</h2>
    <p class="section-lede">
      Most of my peers count their experience from their first internship. I started a decade earlier - and the
      difference shows.
    </p>
    <div class="timeline-list" role="list">
      <div v-for="(e, index) in entries" :key="e.id" class="tl-row reveal" :class="`d${(index % 5) + 1}`" role="listitem">
        <span class="tl-age mono">{{ e.period }}</span>
        <span class="tl-age-meta mono">{{ e.age }}</span>
        <div class="tl-body">
          <p class="tl-headline">{{ e.headline }}</p>
        </div>
        <span v-if="e.step" class="tl-num mono">{{ e.step }}</span>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.timeline-list {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.tl-row {
  grid-template-columns: 160px 70px 1fr auto;
  gap: 24px;
  padding: 18px 18px;
  cursor: default;
}

.tl-age {
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tl-age-meta {
  color: var(--ink-3);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tl-headline {
  font-family: var(--serif);
  font-size: 1.02rem;
  line-height: 1.2;
  font-weight: 500;
  margin: 0;
}

.tl-num {
  color: var(--ink-3);
  font-size: 11px;
  letter-spacing: 0.12em;
}

@media (max-width: 900px) {
  .tl-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
    padding: 0.9rem 0;
  }
  .tl-num {
    display: none;
  }
}
</style>
