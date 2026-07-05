<script setup lang="ts">
/**
 * Scroll-triggered entrance animation, reused across the hero, project grid,
 * and contact sections so every "fade/slide/stagger in" moment in the app
 * shares one implementation instead of being re-authored per section.
 *
 * Two independent mechanisms are combined deliberately:
 *  - `transition` drives the one-time entrance (opacity + transform), so it
 *    never fights with...
 *  - `animation`, used only for the optional looping "breathe" / "wink"
 *    idle motion on CTAs and social links after they've entered.
 * Keeping them on separate CSS properties avoids the two effects silently
 * overriding one another.
 */
import { computed } from "vue";
import { useRevealOnScroll } from "@/composables/useRevealOnScroll";

const props = withDefaults(
  defineProps<{
    /** Element/component to render as. */
    as?: string;
    /** Entrance style. `build` is a slower-staggered variant of `fade`. */
    variant?: "fade" | "swipe" | "build";
    /** Position within a staggered group (0-based). */
    index?: number;
    /** Controlled visibility — bypasses the internal scroll observer when set. */
    visible?: boolean;
    /** Fraction of the element visible before it triggers (uncontrolled mode). */
    threshold?: number;
    /** Adds a gentle infinite hover-pausable "breathe" loop once revealed. */
    breathe?: boolean;
    /** Adds a gentle infinite hover-pausable "wink" loop once revealed. */
    wink?: boolean;
  }>(),
  {
    as: "div",
    variant: "fade",
    index: 0,
    visible: undefined,
    threshold: 0.5,
    breathe: false,
    wink: false,
  },
);

const STAGGER_MS: Record<NonNullable<typeof props.variant>, number> = {
  fade: 90,
  swipe: 110,
  build: 160,
};

const { target, isVisible } = useRevealOnScroll({ threshold: props.threshold });

const isIn = computed(() => props.visible ?? isVisible.value);

const style = computed(() => ({
  transitionDelay: `${props.index * STAGGER_MS[props.variant]}ms`,
  animationDelay: props.wink ? `${props.index * 400}ms` : undefined,
}));
</script>

<template>
  <component
    :is="as"
    ref="target"
    class="section-reveal"
    :class="[`section-reveal--${variant}`, { 'is-in': isIn, 'section-reveal--breathe': breathe, 'section-reveal--wink': wink }]"
    :style="style"
    :data-in="isIn"
  >
    <slot :is-in="isIn" />
  </component>
</template>

<style scoped>
.section-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.22, 0.68, 0.28, 1),
    transform 0.7s cubic-bezier(0.22, 0.68, 0.28, 1);
  will-change: transform, opacity;
}

.section-reveal--swipe {
  transform: translateX(-72px) scale(0.955);
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

.section-reveal.is-in {
  opacity: 1;
  transform: none;
}

.section-reveal--breathe {
  /* Matches the pill it wraps so the glow's box-shadow silhouette follows
     the same rounded shape instead of leaving dark notches at the corners. */
  border-radius: var(--radius-pill);
  animation: pf-breathe 2.8s ease-in-out 1.4s infinite;
  animation-play-state: paused;
}
.section-reveal--breathe.is-in {
  animation-play-state: running;
}
.section-reveal--breathe:hover {
  animation-play-state: paused;
  transform: translateY(-2px);
}

.section-reveal--wink {
  animation: pf-wink 3s ease-in-out infinite;
  animation-play-state: paused;
}
.section-reveal--wink.is-in {
  animation-play-state: running;
}
.section-reveal--wink:hover {
  animation-play-state: paused;
}

@keyframes pf-breathe {
  0%,
  100% {
    transform: translateY(0);
    box-shadow: 0 6px 18px -6px color-mix(in srgb, var(--accent) 50%, transparent);
  }
  50% {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px -6px color-mix(in srgb, var(--accent) 62%, transparent);
  }
}

@keyframes pf-wink {
  0%,
  88%,
  100% {
    transform: translateY(0);
    border-color: var(--line);
  }
  94% {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-reveal {
    opacity: 1;
    transform: none;
    transition: none;
    animation: none !important;
  }
}
</style>
