import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

interface RevealOptions {
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
  /** Reveal immediately without waiting to scroll into view. */
  immediate?: boolean;
}

/**
 * Reveals an element once it scrolls into view, then stops observing —
 * mirrors a "fade/slide in on first scroll" pattern without re-triggering
 * on every scroll direction change. Falls back to immediately-visible when
 * IntersectionObserver isn't available or the caller opts out of motion.
 */
export function useRevealOnScroll(options: RevealOptions = {}) {
  const { threshold = 0.5, immediate = false } = options;
  const target: Ref<HTMLElement | null> = ref(null);
  const isVisible = ref(immediate);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (immediate) return;
    if (typeof IntersectionObserver === "undefined" || !target.value) {
      isVisible.value = true;
      return;
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer?.disconnect();
          }
        }
      },
      { threshold },
    );
    observer.observe(target.value);
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { target, isVisible };
}
