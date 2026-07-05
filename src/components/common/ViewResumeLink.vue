<script setup lang="ts">
/** Understated resume link — same label/target everywhere it appears. */
import AppButton from "@/components/common/AppButton.vue";
import { siteIdentity } from "@/content/site";
</script>

<template>
  <AppButton :href="siteIdentity.resumeUrl" external variant="link">View resume ↗</AppButton>
</template>
