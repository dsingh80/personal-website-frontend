<script setup lang="ts">
defineProps<{
  labels: string[];
}>();
</script>

<template>
  <section id="marquee" class="stack-marquee section" aria-label="Technology stack">
    <div class="marquee-clip">
      <div class="marquee-track">
        <div class="marquee-group mono">
          <span v-for="label in labels" :key="`a-${label}`" class="marquee-item">{{ label }}</span>
        </div>
        <div class="marquee-group mono" aria-hidden="true">
          <span v-for="label in labels" :key="`b-${label}`" class="marquee-item">{{ label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-marquee {
  padding-block: 0;
  border-block: 1px solid var(--line);
  overflow: hidden;
}
.marquee-clip {
  overflow: hidden;
}
.marquee-track {
  display: flex;
  width: max-content;
  gap: 0;
  animation: marquee-scroll 50s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
.marquee-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: clamp(2rem, 5vw, 3.5rem);
  padding: 1rem 1.5rem;
}
.marquee-item {
  flex-shrink: 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
  white-space: nowrap;
}
.marquee-item::after {
  content: "·";
  margin-left: clamp(2rem, 5vw, 3.5rem);
  color: var(--line-2);
}
.mono {
  font-family: var(--mono);
}
</style>
