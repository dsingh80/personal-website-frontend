<script setup lang="ts">
import { computed } from "vue";
import { useParallax } from "@/composables/useParallax";

const props = withDefaults(
  defineProps<{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    size?: string;
    color?: "accent" | "accent-2";
    intensity?: number;
    speed?: number;
  }>(),
  {
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined,
    size: "min(46vw, 560px)",
    color: "accent",
    intensity: 46,
    speed: 0.32,
  },
);

const { target } = useParallax(props.speed);

const style = computed(() => ({
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.size,
  height: props.size,
  background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--${props.color}) ${props.intensity}%, transparent), transparent 70%)`,
}));
</script>

<template>
  <div ref="target" class="background-blob" :style="style" />
</template>

<style scoped>
.background-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
}
</style>
