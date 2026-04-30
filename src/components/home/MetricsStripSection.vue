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
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 900px) {
  .metrics-strip__grid {
    grid-template-columns: 1fr;
  }
}
</style>
