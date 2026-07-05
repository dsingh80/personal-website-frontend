<script setup lang="ts">
/**
 * Sticky top navigation, shared by every page. Visual language (pill CTA,
 * mono uppercase links, theme toggle) matches the homepage redesign so the
 * brand identity stays consistent as more pages are added.
 */
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import ThemeToggle from "@/components/common/ThemeToggle.vue";
import GetInTouchButton from "@/components/common/GetInTouchButton.vue";

const route = useRoute();
const mobileNavOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    mobileNavOpen.value = false;
  },
);
</script>

<template>
  <header class="nav-bar" :class="{ 'nav-bar--open': mobileNavOpen }">
    <button
      type="button"
      class="nav-bar__toggle"
      :aria-expanded="mobileNavOpen"
      aria-controls="primary-nav"
      @click="mobileNavOpen = !mobileNavOpen"
    >
      Menu
    </button>
    <nav id="primary-nav" class="nav-bar__links" aria-label="Primary">
      <RouterLink to="/" class="nav-bar__link">Home</RouterLink>
      <RouterLink to="/about" class="nav-bar__link">About</RouterLink>
      <RouterLink to="/resume" class="nav-bar__link">Resume</RouterLink>
      <GetInTouchButton size="small" />
      <ThemeToggle />
    </nav>
  </header>
</template>

<style scoped>
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
}

.nav-bar__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 4vw, 44px);
  flex-wrap: wrap;
}

.nav-bar__link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-2);
  transition: color var(--duration-normal) var(--easing-standard);
}
.nav-bar__link:hover,
.nav-bar__link:focus-visible,
.nav-bar__link.router-link-active {
  color: var(--ink);
}

.nav-bar__cta {
  padding: 9px 18px;
}

.nav-bar__toggle {
  display: none;
}

@media (max-width: 640px) {
  .nav-bar {
    justify-content: space-between;
  }
  .nav-bar__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-2);
    background: var(--bg-2);
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    cursor: pointer;
  }
  .nav-bar__links {
    display: none;
    width: 100%;
    flex-basis: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-top: 16px;
  }
  .nav-bar--open .nav-bar__links {
    display: flex;
  }
  .nav-bar--open {
    flex-wrap: wrap;
  }
  .nav-bar__cta {
    justify-content: center;
  }
}
</style>
