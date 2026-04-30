<script setup lang="ts">
import type { TimelineEntry } from "@/types/content";
import SectionContainer from "@/components/common/SectionContainer.vue";

defineProps<{
  entries: TimelineEntry[];
}>();
</script>

<template>
  <SectionContainer id="career" aria-label="Work history">
    <div class="timeline-head">
      <div>
        <span class="kicker">THE CAREER ARC</span>
        <h2 class="section-title">Fourteen years of compounding.</h2>
        <p class="section-lede">
          Most of my peers count their experience from their first internship. I started a decade earlier — and the
          difference shows.
        </p>
      </div>
      <span class="eyebrow">Hover any row</span>
    </div>
    <div class="timeline-list" role="list">
      <div v-for="(e, index) in entries" :key="e.id" class="tl-row reveal" :class="`d${(index % 5) + 1}`" role="listitem">
        <span class="tl-age mono">{{ e.period }}</span>
        <span class="tl-age-meta mono">age {{ e.age }}</span>
        <div class="tl-body">
          <p class="tl-headline">
            {{ e.headline }}
            <span v-if="e.company" class="tl-company"> · {{ e.company }}</span>
          </p>
          <p class="tl-detail">{{ e.lede }}</p>
        </div>
        <span class="tl-num mono">{{ String(index + 1).padStart(2, "0") }}</span>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.timeline-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  padding-bottom: 1.35rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--line);
}

.timeline-list {
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
  font-size: 1.16rem;
  line-height: 1.25;
  font-weight: 500;
  margin: 0;
}

.tl-company {
  color: var(--ink-3);
  font-weight: 400;
}

.tl-num {
  color: var(--ink-3);
  font-size: 11px;
  letter-spacing: 0.12em;
}

@media (max-width: 900px) {
  .timeline-head {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.8rem;
  }
  .tl-row {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    padding: 1.1rem 0.85rem;
    align-items: start;
  }
  .tl-headline {
    line-height: 1.3;
  }
  .tl-detail {
    opacity: 1;
    max-height: none;
    margin-top: 0.25rem;
  }
  .tl-num {
    display: none;
  }
}
</style>
