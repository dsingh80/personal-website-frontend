import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

/**
 * Applies a subtle vertical parallax offset to an element as the page
 * scrolls. Scroll handling is passive and rAF-throttled; disabled entirely
 * for users who prefer reduced motion.
 */
export function useParallax(speed: number) {
  const target: Ref<HTMLElement | null> = ref(null);
  let ticking = false;
  let reduced = false;

  function apply() {
    ticking = false;
    if (!target.value || reduced) return;
    const y = window.scrollY || window.pageYOffset || 0;
    target.value.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(apply);
  }

  onMounted(() => {
    reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduced) return;
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

  return { target };
}
