<script setup lang="ts">
/**
 * Positioning shell for decorative BackgroundBlob children. Purely
 * presentational; kept isolated from layout so it can be reused behind
 * any full-bleed section. Place BackgroundBlob instances in the default
 * slot to control count and placement per section.
 */
</script>

<template>
  <div class="background-blobs" aria-hidden="true">
    <slot />
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
</style>
