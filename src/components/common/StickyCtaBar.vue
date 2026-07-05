<script setup lang="ts">
/**
 * Floating bottom CTA bar that appears once the hero's own call-to-action
 * row has scrolled out of view, so the primary conversion actions stay
 * reachable while browsing further down the page.
 */
import GetInTouchButton from "@/components/common/GetInTouchButton.vue";
import SeeProjectsButton from "@/components/common/SeeProjectsButton.vue";

defineProps<{
  visible: boolean;
}>();
</script>

<template>
  <div class="sticky-cta" :class="{ 'sticky-cta--show': visible }">
    <GetInTouchButton />
    <SeeProjectsButton />
  </div>
</template>

<style scoped>
.sticky-cta {
  position: fixed;
  left: 50%;
  bottom: 22px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--bg-2) 88%, transparent);
  border: 1px solid var(--line);
  backdrop-filter: saturate(150%) blur(14px);
  -webkit-backdrop-filter: saturate(150%) blur(14px);
  box-shadow: 0 14px 40px -12px rgb(0 0 0 / 35%);
  transform: translate(-50%, 160%);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.5s cubic-bezier(0.2, 0.8, 0.22, 1),
    opacity 0.35s ease;
}

.sticky-cta :deep(.app-btn) {
  padding: 11px 22px;
  font-size: 13px;
}

.sticky-cta--show {
  transform: translate(-50%, 0);
  opacity: 1;
  pointer-events: auto;
}
</style>
