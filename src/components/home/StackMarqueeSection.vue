<script setup lang="ts">
defineProps<{
  labels: string[];
}>();
</script>

<template>
  <section id="marquee" class="stack-marquee" aria-label="Technology stack">
    <div class="stack-marquee__label mono">
      <p class="stack-marquee__title">The stack</p>
      <p class="stack-marquee__subtitle">Tools I reach for daily</p>
    </div>
    <div class="stack-marquee__clip">
      <div class="stack-marquee__fade-l" aria-hidden="true" />
      <div class="stack-marquee__fade-r" aria-hidden="true" />
      <div class="stack-marquee__track mono" aria-hidden="true">
        <div class="stack-marquee__group">
          <span v-for="label in labels" :key="`a-${label}`" class="stack-marquee__chip">
            <span class="stack-marquee__dot" />{{ label }}
          </span>
        </div>
        <div class="stack-marquee__group" aria-hidden="true">
          <span v-for="label in labels" :key="`b-${label}`" class="stack-marquee__chip">
            <span class="stack-marquee__dot" />{{ label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-marquee {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--bg-2);
}

.stack-marquee__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 16px var(--pad-x);
  border-bottom: 1px solid var(--line);
}

.stack-marquee__title,
.stack-marquee__subtitle {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.stack-marquee__title { color: var(--accent); }
.stack-marquee__subtitle { color: var(--ink-3); }

.stack-marquee__clip {
  position: relative;
  overflow: hidden;
  background: var(--bg);
  padding: 16px 0;
}

.stack-marquee__fade-l,
.stack-marquee__fade-r {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}

.stack-marquee__fade-l {
  left: 0;
  background: linear-gradient(to right, var(--bg), transparent);
}

.stack-marquee__fade-r {
  right: 0;
  background: linear-gradient(to left, var(--bg), transparent);
}

.stack-marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 50s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .stack-marquee__track { animation: none; }
}

.stack-marquee__group {
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 0 18px;
  white-space: nowrap;
}

.stack-marquee__chip {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  color: var(--ink-2);
  letter-spacing: -0.01em;
  flex-shrink: 0;
}

.stack-marquee__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .stack-marquee__label {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .stack-marquee__chip {
    font-size: 16px;
  }
}
</style>
