<script setup lang="ts">
import type { PortfolioContactContent } from "@/types/content";
import { siteIdentity } from "@/content/site";
import SectionReveal from "@/components/common/SectionReveal.vue";
import AppButton from "@/components/common/AppButton.vue";
import { useRevealOnScroll } from "@/composables/useRevealOnScroll";

defineProps<{
  content: PortfolioContactContent;
}>();

const { target, isVisible } = useRevealOnScroll();
</script>

<template>
  <section id="contact" ref="target" class="contact-section" aria-labelledby="contact-heading">
    <SectionReveal as="span" variant="build" :index="0" :visible="isVisible" class="contact-section__kicker">
      {{ content.kicker }}
    </SectionReveal>
    <SectionReveal
      as="h2"
      id="contact-heading"
      variant="build"
      :index="1"
      :visible="isVisible"
      class="contact-section__title"
    >
      {{ content.headline }}
    </SectionReveal>
    <SectionReveal as="p" variant="build" :index="2" :visible="isVisible" class="contact-section__body">
      {{ content.body }}
    </SectionReveal>

    <div class="contact-section__actions">
      <SectionReveal as="div" variant="build" :index="3" :visible="isVisible" breathe>
        <AppButton :href="`mailto:${siteIdentity.email}`" variant="primary">{{ siteIdentity.email }}</AppButton>
      </SectionReveal>
      <SectionReveal as="div" variant="build" :index="3" :visible="isVisible" wink>
        <AppButton :href="siteIdentity.github" external variant="ghost">GitHub</AppButton>
      </SectionReveal>
      <SectionReveal as="div" variant="build" :index="4" :visible="isVisible" wink>
        <AppButton :href="siteIdentity.linkedin" external variant="ghost">LinkedIn</AppButton>
      </SectionReveal>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: clamp(48px, 8vw, 120px) clamp(24px, 6vw, 88px);
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 22px;
}

.contact-section__kicker {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
}

.contact-section__title {
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  letter-spacing: -0.04em;
  line-height: 0.98;
}

.contact-section__body {
  font-size: 1.1rem;
  line-height: 1.55;
  color: var(--ink-2);
  max-width: 40ch;
  margin: 0;
}

.contact-section__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6px;
}
</style>
