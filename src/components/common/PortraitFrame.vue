<script setup lang="ts">
/**
 * Image frame with a graceful placeholder fallback, shared by the hero
 * portrait, project cards, and the project detail cover so every image
 * slot in the app behaves consistently when an asset isn't available yet.
 */
withDefaults(
  defineProps<{
    src?: string;
    alt: string;
    /** CSS aspect-ratio value, e.g. "4 / 5". Omit to fill the parent. */
    ratio?: string;
    fit?: "cover" | "contain";
    /** Shown instead of the image when `src` is empty. */
    placeholder?: string;
  }>(),
  {
    src: undefined,
    ratio: undefined,
    fit: "cover",
    placeholder: "",
  },
);
</script>

<template>
  <div class="portrait-frame" :style="{ aspectRatio: ratio }">
    <img v-if="src" :src="src" :alt="alt" class="portrait-frame__img" :style="{ objectFit: fit }" loading="lazy" />
    <div v-else class="portrait-frame__placeholder" role="img" :aria-label="alt">
      <span>{{ placeholder }}</span>
    </div>
  </div>
</template>

<style scoped>
.portrait-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--card-grad);
}

.portrait-frame__img {
  display: block;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
}

.portrait-frame__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-3);
}
</style>
