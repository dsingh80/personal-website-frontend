<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { PortfolioHeroContent } from "@/types/content";
import SectionReveal from "@/components/common/SectionReveal.vue";
import BackgroundBlobs from "@/components/common/BackgroundBlobs.vue";
import BackgroundBlob from "@/components/common/BackgroundBlob.vue";
import PortraitFrame from "@/components/common/PortraitFrame.vue";
import GetInTouchButton from "@/components/common/GetInTouchButton.vue";
import SeeProjectsButton from "@/components/common/SeeProjectsButton.vue";
import ViewResumeLink from "@/components/common/ViewResumeLink.vue";
import { usePastViewport } from "@/composables/usePastViewport";

defineProps<{
  content: PortfolioHeroContent;
}>();

const emit = defineEmits<{
  /** Fires when the hero's own CTA row scrolls out of view. */
  "cta-out-of-view": [isOutOfView: boolean];
}>();

// Let the section settle first, then draw the eye by animating the hero
// text in — mirrors a natural "page has loaded" beat rather than an
// instant, jarring reveal.
const heroReady = ref(false);
onMounted(() => {
  window.setTimeout(() => {
    heroReady.value = true;
  }, 200);
});

const { sentinel, isPast } = usePastViewport();
watch(isPast, (value) => emit("cta-out-of-view", value));
</script>

<template>
  <section class="hero" aria-label="Introduction">
    <BackgroundBlobs>
      <BackgroundBlob top="-6%" left="0%" size="min(46vw, 560px)" color="accent" :intensity="46" :speed="0.32" />
      <BackgroundBlob top="18%" right="-4%" size="min(44vw, 500px)" color="accent-2" :intensity="44" :speed="0.55" />
      <BackgroundBlob top="116%" left="26%" size="min(40vw, 480px)" color="accent" :intensity="38" :speed="0.2" />
    </BackgroundBlobs>

    <div class="hero__frame section-frame">
      <div class="hero__copy">
        <SectionReveal as="span" :visible="heroReady" :index="0" class="hero__kicker">
          {{ content.kicker }}
        </SectionReveal>
        <SectionReveal as="h1" :visible="heroReady" :index="1" class="hero__title">
          {{ content.headline }}
        </SectionReveal>
        <SectionReveal as="p" :visible="heroReady" :index="2" class="hero__subhead">
          {{ content.subhead }}
        </SectionReveal>

        <SectionReveal as="div" :visible="heroReady" :index="3" class="hero__resume-link">
          <ViewResumeLink/>
        </SectionReveal>

        <div ref="sentinel" class="hero__cta-sentinel">
          <SectionReveal as="div" :visible="heroReady" :index="4" class="hero__actions">
            <GetInTouchButton />
            <SeeProjectsButton />
          </SectionReveal>
        </div>
      </div>

      <div class="hero__portrait-slot">
        <SectionReveal as="div" :visible="heroReady" :index="1" class="hero__portrait">
          <PortraitFrame class="hero__portrait-frame" src="/images/dom-portrait_600x.webp" alt="Portrait of Damanveer (Dom) Singh" fit="contain" />
        </SectionReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(80vh, 720px);
}

.hero__frame {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  min-height: inherit;
  /* hero__copy/hero__portrait-slot already carry their own edge padding */
  padding-inline: 0;
}

.hero__copy {
  flex: 1 1 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: clamp(32px, 6vw, 88px);
}

.hero__kicker {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero__title {
  font-size: clamp(3rem, 7vw, 5.75rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.hero__subhead {
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  line-height: 1.55;
  color: var(--ink-2);
  max-width: 40ch;
  margin: 0;
}

.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.hero__resume-link {
  margin: -8px 0 -10px 0;
}

.hero__portrait-slot {
  flex: 1 1 380px;
  min-height: 320px;
  padding: clamp(24px, 4vw, 56px);
  display: flex;
}

.hero__portrait {
  position: relative;
  flex: 1;
  display: flex;
}

.hero__portrait-frame {
  background: none;
}

.hero__portrait-frame :deep(img) {
  max-height: 500px;
}
</style>
