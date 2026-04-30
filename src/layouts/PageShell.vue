<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import CapabilityLaunchPopup from "@/components/common/CapabilityLaunchPopup.vue";

const route = useRoute();
const mobileNavOpen = ref(false);
const SHOW_CAPABILITY_POPUP = false;

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
    <CapabilityLaunchPopup v-if="SHOW_CAPABILITY_POPUP" />
    <header class="nav-bar" :class="{ 'nav-bar--open': mobileNavOpen }" role="banner">
      <div class="nav-bar__inner">
        <div class="brand-block">
          <RouterLink to="/" class="brand-avatar serif" aria-label="Damanveer (Dom) Singh – home">D</RouterLink>
          <div class="brand-text">
            <RouterLink to="/" class="brand">Damanveer (Dom) Singh</RouterLink>
            <p class="brand-meta mono">Senior Software Engineer · Indianapolis, IN</p>
          </div>
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
          <a href="/#stories" class="nav-link">Stories</a>
          <a href="/#career" class="nav-link">Career</a>
          <a href="/#stack" class="nav-link">Stack</a>
          <a href="/#about" class="nav-link">About</a>
          <a href="mailto:singhdam27@gmail.com" class="nav-cta">Get in touch</a>
        </nav>
      </div>
    </header>
    <main class="site-main">
      <RouterView />
    </main>
  </div>
</template>
