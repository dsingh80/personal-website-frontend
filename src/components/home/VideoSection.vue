<script setup lang="ts">
import SectionReveal from "@/components/common/SectionReveal.vue";
import BackgroundBlobs from "@/components/common/BackgroundBlobs.vue";
import BackgroundBlob from "@/components/common/BackgroundBlob.vue";
import { useRevealOnScroll } from "@/composables/useRevealOnScroll";

const { target, isVisible } = useRevealOnScroll();
</script>

<template>
  <section id="watch-me-work" class="video-section" aria-labelledby="video-heading">
    <BackgroundBlobs>
      <BackgroundBlob top="-10%" left="6%" size="min(32vw, 360px)" color="accent" :intensity="40" :speed="0.1" />
      <BackgroundBlob top="42%" right="-6%" size="min(30vw, 340px)" color="accent-2" :intensity="38" :speed="0.16" />
      <BackgroundBlob bottom="-14%" left="44%" size="min(26vw, 300px)" color="accent" :intensity="34" :speed="0.06" />
    </BackgroundBlobs>
    <div class="video-section__frame section-frame">
      <div ref="target" class="video-section__header">
        <SectionReveal as="h2" id="video-heading" :visible="isVisible" class="video-section__title">
          Watch me work with AI
        </SectionReveal>
      </div>

      <SectionReveal as="div" :index="1" :visible="isVisible" class="video-section__player">
        <iframe
          src="https://www.youtube.com/embed/7S3JeKmWwOI?si=HxxMeLysWh8fJlnh"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </SectionReveal>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  position: relative;
  padding-block: clamp(40px, 7vw, 96px);
  border-top: 1px solid var(--line);
}

.video-section__frame {
  padding-inline: clamp(24px, 6vw, 88px);
}

.video-section__header {
  text-align: center;
  margin-bottom: clamp(28px, 4vw, 52px);
}

.video-section__title {
  font-size: clamp(1.9rem, 3vw, 2.75rem);
  letter-spacing: -0.035em;
}

.video-section__player {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg, 12px);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface, #000);
}

.video-section__player iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
