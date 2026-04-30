<script setup lang="ts">
import { RouterLink } from "vue-router";
import SectionContainer from "@/components/common/SectionContainer.vue";

defineProps<{
  headline: string;
  body: string;
  linkLabel: string;
  linkTo: string;
}>();
</script>

<template>
  <SectionContainer id="contact" aria-label="Contact call to action">
    <div class="cta-panel">
      <h2 class="headline">{{ headline }}</h2>
      <p class="body">{{ body }}</p>
      <div class="contact-meta">
        <a v-if="linkTo.startsWith('mailto:')" :href="linkTo" class="contact-primary">{{ linkLabel }}</a>
        <RouterLink v-else :to="linkTo" class="contact-primary">{{ linkLabel }}</RouterLink>
        <span aria-hidden="true" class="sep">•</span>
        <a href="https://github.com/dsingh80" target="_blank" rel="noreferrer">GitHub · @dsingh80</a>
        <span aria-hidden="true" class="sep">•</span>
        <a href="https://www.linkedin.com/in/domsingh/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.body {
  font-size: 0.975rem;
  line-height: 1.6;
  color: var(--ink-2);
  margin: 0 0 1.5rem;
}

.contact-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem 0.7rem;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.contact-meta a {
  color: var(--ink-2);
  text-decoration: none;
}

.contact-meta a:hover {
  color: var(--accent);
}

.contact-primary {
  color: var(--accent) !important;
}

.sep {
  opacity: 0.55;
}
</style>
