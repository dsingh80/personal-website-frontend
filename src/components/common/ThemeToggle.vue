<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button type="button" class="theme-toggle" aria-label="Toggle color theme" @click="toggleTheme">
    {{ isDark ? "☀" : "☾" }}
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: var(--radius-pill);
  border: 1px solid var(--line);
  background: var(--bg-2);
  color: var(--ink);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1;
  transition:
    border-color var(--duration-normal) var(--easing-standard),
    background var(--duration-normal) var(--easing-standard),
    transform var(--duration-fast) var(--easing-standard);
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  border-color: var(--accent);
  transform: translateY(-1px);
}
</style>
