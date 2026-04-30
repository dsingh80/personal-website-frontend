<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const SESSION_DISMISS_KEY = "dom-capability-popup-dismissed-this-session";
const DIALOG_TITLE_ID = "capability-launch-title";
const isVisible = ref(false);

const capabilityPillars = [
  {
    title: "Served via CloudFront CDN",
    detail: "Edge delivery and caching reduce latency while serving frontend assets globally.",
  },
  {
    title: "Hosted on ECS in Docker containers",
    detail: "Backend workloads run as containerized services on Amazon ECS for controlled deployments.",
  },
  {
    title: "Built for API-driven storytelling",
    detail: "The site is prepared to source story content from backend endpoints instead of static-only embeds.",
  },
];

function getSessionDismissalState() {
  if (typeof window === "undefined") return false;

  try {
    return window.sessionStorage.getItem(SESSION_DISMISS_KEY) === "true";
  } catch {
    return false;
  }
}

function setSessionDismissalState() {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(SESSION_DISMISS_KEY, "true");
  } catch {
    // Ignore storage errors and still close popup for current render.
  }
}

function dismissPopup() {
  isVisible.value = false;
  setSessionDismissalState();
}

function onEscapeKey(event: KeyboardEvent) {
  if (event.key === "Escape" && isVisible.value) dismissPopup();
}

onMounted(() => {
  isVisible.value = !getSessionDismissalState();
  window.addEventListener("keydown", onEscapeKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEscapeKey);
});
</script>

<template>
  <div v-if="isVisible" class="capability-popup-backdrop" @click.self="dismissPopup">
    <section
      class="capability-popup"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="DIALOG_TITLE_ID"
    >
      <div class="capability-popup__grain bg-grain" aria-hidden="true" />
      <p class="capability-popup__eyebrow kicker">Capability Snapshot</p>
      <h2 :id="DIALOG_TITLE_ID" class="capability-popup__title">
        This website is served, hosted, and engineered for production.
      </h2>
      <p class="capability-popup__intro">
        Practical architecture choices to show real delivery capability, not just visual polish.
      </p>

      <ul class="capability-popup__list">
        <li v-for="pillar in capabilityPillars" :key="pillar.title" class="capability-popup__item">
          <h3 class="capability-popup__item-title">{{ pillar.title }}</h3>
          <p class="capability-popup__item-detail">{{ pillar.detail }}</p>
        </li>
      </ul>

      <div class="capability-popup__actions">
        <button type="button" class="btn btn-primary capability-popup__button" @click="dismissPopup">
          Explore the site
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.capability-popup-backdrop {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: color-mix(in srgb, var(--bg) 74%, #000);
}

.capability-popup {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  width: min(44rem, 100%);
  border: 1px solid var(--line);
  background: var(--bg-2);
  color: var(--ink);
  padding: clamp(1.25rem, 2vw, 2rem);
  border-radius: 2px;
  box-shadow: var(--shadow-card);
}

.capability-popup__grain {
  z-index: 0;
  opacity: 0.48;
}

.capability-popup__eyebrow {
  position: relative;
  z-index: 1;
  margin: 0;
}

.capability-popup__title {
  position: relative;
  z-index: 1;
  margin: 0.65rem 0 0;
  font-family: var(--serif);
  font-size: clamp(1.5rem, 2.5vw, 2.1rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.capability-popup__intro {
  position: relative;
  z-index: 1;
  margin: 0.75rem 0 0;
  color: var(--ink-2);
  line-height: 1.5;
}

.capability-popup__list {
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.capability-popup__item {
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg-3) 80%, transparent);
  padding: 0.85rem 0.9rem;
}

.capability-popup__item-title {
  margin: 0;
  font-family: var(--mono);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.capability-popup__item-detail {
  margin: 0.4rem 0 0;
  color: var(--ink-2);
  font-size: 0.94rem;
  line-height: 1.45;
}

.capability-popup__actions {
  position: relative;
  z-index: 1;
  margin-top: 1.1rem;
  display: flex;
  justify-content: flex-end;
}

.capability-popup__button {
  min-width: 11.5rem;
}

@media (max-width: 640px) {
  .capability-popup-backdrop {
    align-items: end;
  }

  .capability-popup {
    padding: 1rem;
  }

  .capability-popup__actions {
    justify-content: stretch;
  }

  .capability-popup__button {
    width: 100%;
  }
}
</style>
