<script setup lang="ts">
/**
 * Decorative, purely presentational accent blobs with a subtle parallax
 * drift. Used behind the hero; kept isolated from layout so it can be
 * reused behind any full-bleed section later without extra wiring.
 */
import { useParallax } from "@/composables/useParallax";

const { target: blobATarget } = useParallax(0.32);
const { target: blobBTarget } = useParallax(0.55);
const { target: blobCTarget } = useParallax(0.2);
</script>

<template>
  <div class="background-blobs" aria-hidden="true">
    <div ref="blobATarget" class="background-blobs__blob background-blobs__blob--a" />
    <div ref="blobBTarget" class="background-blobs__blob background-blobs__blob--b" />
    <div ref="blobCTarget" class="background-blobs__blob background-blobs__blob--c" />
  </div>
</template>

<style scoped>
.background-blobs {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.background-blobs__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
}

.background-blobs__blob--a {
  top: -6%;
  left: 0%;
  width: min(46vw, 560px);
  height: min(46vw, 560px);
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 46%, transparent), transparent 70%);
}

.background-blobs__blob--b {
  top: 18%;
  right: -4%;
  width: min(44vw, 500px);
  height: min(44vw, 500px);
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-2) 44%, transparent), transparent 70%);
}

.background-blobs__blob--c {
  top: 116%;
  left: 26%;
  width: min(40vw, 480px);
  height: min(40vw, 480px);
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 38%, transparent), transparent 70%);
}
</style>
