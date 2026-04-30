<script setup lang="ts">
defineProps<{
  id?: string;
  label?: string;
  ariaLabel?: string;
}>();
</script>

<template>
  <section :id="id" class="section" :aria-label="ariaLabel">
    <div class="container">
      <p v-if="label" class="section-kicker">{{ label }}</p>
      <slot />
    </div>
  </section>
</template>
