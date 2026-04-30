<script setup lang="ts">
import type { HomeMetric } from "@/types/content";
import StatCard from "@/components/common/StatCard.vue";

defineProps<{
  metrics: HomeMetric[];
}>();
</script>

<template>
  <section id="metrics" class="metrics-strip section" aria-label="Key metrics">
    <div class="container metrics-strip__grid">
      <StatCard v-for="metric in metrics" :key="`${metric.value}-${metric.label}`" :value="metric.value" :label="metric.label" :detail="metric.detail" />
    </div>
  </section>
</template>

<style scoped>
.metrics-strip {
  padding-block: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.metrics-strip__grid {
  padding-top: 1.1rem;
  padding-bottom: 1.05rem;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.metrics-strip__grid :deep(.stat-block) {
  border: 0;
  background: transparent;
  border-radius: 0;
  padding: 0 1.35rem;
}

.metrics-strip__grid :deep(.stat-block + .stat-block) {
  border-left: 1px solid var(--line);
}

.metrics-strip__grid :deep(.stat-num) {
  font-size: clamp(3rem, 4.6vw, 4.15rem);
  line-height: 0.92;
  margin: 0;
}

.metrics-strip__grid :deep(.stat-label) {
  margin-top: 0.55rem;
  font-size: 10.5px;
  letter-spacing: 0.14em;
}

.metrics-strip__grid :deep(.stat-detail) {
  display: none;
}

@media (max-width: 900px) {
  .metrics-strip > .container {
    max-width: none;
    padding-left: 0;
    padding-right: 0;
  }

  .metrics-strip__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem 0;
    padding-left: var(--pad-x);
    padding-right: var(--pad-x);
  }

  .metrics-strip__grid :deep(.stat-block:nth-child(odd)) {
    border-left: 0;
  }

  .metrics-strip__grid :deep(.stat-block:nth-child(even)) {
    border-left: 1px solid var(--line);
  }
}

@media (max-width: 640px) {
  .metrics-strip__grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .metrics-strip__grid :deep(.stat-block) {
    border-left: 0 !important;
    padding-inline: 0.25rem;
  }
}
</style>
