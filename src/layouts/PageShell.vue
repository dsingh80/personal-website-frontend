<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import CapabilityLaunchPopup from "@/components/common/CapabilityLaunchPopup.vue";

const route = useRoute();
const mobileNavOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    mobileNavOpen.value = false;
  },
);

function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value;
}
</script>

<template>
  <div class="page-shell">
    <CapabilityLaunchPopup />
    <header class="nav-bar" :class="{ 'nav-bar--open': mobileNavOpen }" role="banner">
      <div class="nav-bar__inner">
        <div class="brand-block">
          <RouterLink to="/" class="brand">Dom Singh</RouterLink>
          <p class="brand-meta">Senior Software Engineer - Indianapolis, IN</p>
        </div>
        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="mobileNavOpen"
          aria-controls="site-nav"
          @click="toggleMobileNav"
        >
          Menu
        </button>
        <nav id="site-nav" class="nav-links" aria-label="Main">
          <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
          <RouterLink to="/contact" class="nav-cta">Hire me</RouterLink>
        </nav>
      </div>
    </header>
    <main class="site-main">
      <RouterView />
    </main>
    <!-- Shell footer: not in baseline Site() snippet; kept for location + GitHub. -->
    <footer class="site-footer">
      <div class="site-footer__row">
        <span>Indianapolis, IN</span>
        <a href="mailto:dom@domsingh.dev">dom@domsingh.dev</a>
      </div>
      <div class="site-footer__row">
        <a href="https://github.com/dsingh80" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/domsingh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  </div>
</template>
