<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
  detail?: string;
}>();
</script>

<template>
  <article class="stat-block">
    <p class="stat-num accent">{{ value }}</p>
    <p class="stat-label">{{ label }}</p>
    <p v-if="detail" class="stat-detail">{{ detail }}</p>
  </article>
</template>
