<script setup lang="ts">
import type { HomeAboutContent } from "@/types/content";
import SectionContainer from "@/components/common/SectionContainer.vue";

defineProps<{
  content: HomeAboutContent;
}>();
</script>

<template>
  <SectionContainer id="about" aria-label="About Dom">
    <h2 class="section-title">The short version of a longer story.</h2>
    <p class="about-copy reveal d1">{{ content.intro }}</p>
    <p v-if="content.paragraphTwo" class="about-copy reveal d2">{{ content.paragraphTwo }}</p>
    <p v-if="content.paragraphThree" class="about-copy reveal d3">{{ content.paragraphThree }}</p>
  </SectionContainer>
</template>

<style scoped>
.about-copy {
  margin: 0 0 1.15rem;
  font-size: 0.975rem;
  line-height: 1.65;
  color: var(--ink-2);
  max-width: 48rem;
}
.about-copy:last-child {
  margin-bottom: 0;
}
</style>
