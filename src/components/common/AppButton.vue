<script setup lang="ts">
/**
 * Shared pill CTA — every button/link styled like a call-to-action across
 * the site (hero, contact, sticky bar, nav) should use this component so
 * the two brand button styles stay visually identical everywhere.
 */
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = withDefaults(
  defineProps<{
    /** Internal route target (renders a RouterLink). */
    to?: string;
    /** External/anchor/mailto target (renders an <a>). Ignored if `to` is set. */
    href?: string;
    variant?: "primary" | "ghost" | "link";
    external?: boolean;
    download?: boolean;
    size?: "default" | "small";
  }>(),
  {
    to: undefined,
    href: undefined,
    variant: "ghost",
    external: false,
    download: false,
    size: "default"
  },
);

const tag = computed(() => (props.to ? RouterLink : "a"));

const linkProps = computed(() => {
  if (props.to) return { to: props.to };
  const attrs: Record<string, unknown> = { href: props.href };
  if (props.external) {
    attrs.target = "_blank";
    attrs.rel = "noopener noreferrer";
  }
  if (props.download) attrs.download = true;
  return attrs;
});
</script>

<template>
  <component :is="tag" v-bind="linkProps" :class="['app-btn', `app-btn--${variant}`, {'app-btn--small': props.size==='small'}]">
    <span class="app-btn__label"><slot /></span>
  </component>
</template>

<style scoped>
.app-btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  padding: 13px 24px;
  border-radius: var(--radius-pill);
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.app-btn.app-btn--small {
  padding: 11px 22px;
  font-size: 13px;
}
.app-btn:active {
  transform: scale(0.96);
}

.app-btn__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.app-btn--primary {
  background: transparent;
  color: var(--accent-ink);
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 45%, transparent);
}
.app-btn--primary::before,
.app-btn--primary::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  transition: clip-path 0.34s cubic-bezier(0.16, 1, 0.3, 1);
}
.app-btn--primary::before {
  /* solid fill, anchored to the bottom edge */
  background: var(--accent-grad);
  clip-path: inset(0 0 0 0 round var(--radius-pill));
}
.app-btn--primary::after {
  /* border reveal, anchored to the bottom edge */
  border: 1.5px solid var(--accent);
  clip-path: inset(100% 0 0 0 round var(--radius-pill));
}
.app-btn--primary:hover,
.app-btn--primary:focus-visible {
  transform: translateY(-3px);
  color: var(--accent);
  box-shadow: 0 14px 28px -10px color-mix(in srgb, var(--accent) 40%, transparent);
}
.app-btn--primary:hover::before,
.app-btn--primary:focus-visible::before {
  /* drains out top-down, last drop clinging to the bottom */
  clip-path: inset(100% 0 0 0 round var(--radius-pill));
}
.app-btn--primary:hover::after,
.app-btn--primary:focus-visible::after {
  /* fills up bottom-first, like the fill it's replacing */
  clip-path: inset(0 0 0 0 round var(--radius-pill));
}
.app-btn--primary:hover .app-btn__label,
.app-btn--primary:focus-visible .app-btn__label {
  transform: translateY(-2px);
}
.app-btn--primary:active {
  box-shadow: 0 6px 16px -8px color-mix(in srgb, var(--accent) 55%, transparent);
}

.app-btn--ghost {
  border-color: var(--line);
  color: var(--ink);
  background: transparent;
  font-weight: 500;
}
.app-btn--ghost::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  border: 1.5px solid var(--accent);
  clip-path: inset(100% 0 0 0 round var(--radius-pill));
  transition: clip-path 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.app-btn--ghost:hover,
.app-btn--ghost:focus-visible {
  color: var(--accent);
  transform: translateY(-2px);
}
.app-btn--ghost:hover::after,
.app-btn--ghost:focus-visible::after {
  /* border fills up bottom-first, no background fill needed */
  clip-path: inset(0 0 0 0 round var(--radius-pill));
}
.app-btn--ghost:hover .app-btn__label,
.app-btn--ghost:focus-visible .app-btn__label {
  transform: translateY(-2px);
}

.app-btn--link {
  padding: 0;
  border-color: transparent;
  color: var(--ink-2);
  background: transparent;
  font-weight: 500;
  text-decoration: none;
}
.app-btn--link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.4s cubic-bezier(0.22, 0.68, 0.28, 1);
}
.app-btn--link:hover,
.app-btn--link:focus-visible {
  color: var(--accent);
  transform: translateY(-1px);
}
.app-btn--link:hover::after,
.app-btn--link:focus-visible::after {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .app-btn,
  .app-btn__label,
  .app-btn::before,
  .app-btn::after {
    transition: none !important;
  }
}
</style>
