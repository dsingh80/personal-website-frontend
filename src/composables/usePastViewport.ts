import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

/**
 * Tracks whether a sentinel element has scrolled above a trigger line near
 * the top of the viewport. Used to show the sticky CTA bar once the hero's
 * own call-to-action row is no longer visible. IntersectionObserver-based
 * (vs. a scroll listener) so it stays cheap while the user scrolls.
 */
export function usePastViewport(triggerOffsetPx = 48) {
  const sentinel: Ref<HTMLElement | null> = ref(null);
  const isPast = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof IntersectionObserver === "undefined" || !sentinel.value) return;
    observer = new IntersectionObserver(
      ([entry]) => {
        isPast.value = !entry.isIntersecting;
      },
      { threshold: 0, rootMargin: `-${triggerOffsetPx}px 0px 0px 0px` },
    );
    observer.observe(sentinel.value);
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { sentinel, isPast };
}
