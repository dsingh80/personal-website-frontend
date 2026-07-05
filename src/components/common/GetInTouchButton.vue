<script setup lang="ts">
/** Primary "Get in touch" CTA — same label/target everywhere it appears. */
import AppButton from "@/components/common/AppButton.vue";

withDefaults(
  defineProps<{
    size?: "default" | "small";
  }>(), 
  {
    size: "default"
  }
);
</script>

<template>
  <AppButton href="/#contact" variant="primary" :size="size">Get in touch</AppButton>
</template>
