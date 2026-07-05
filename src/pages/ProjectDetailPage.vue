<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getProjectBySlug } from "@/content/projects";
import SectionReveal from "@/components/common/SectionReveal.vue";
import AppButton from "@/components/common/AppButton.vue";
import PortraitFrame from "@/components/common/PortraitFrame.vue";

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const project = computed(() => getProjectBySlug(slug.value));

// Starts hidden so SectionReveal's transition has something to animate from,
// then reveals on the next frame for a quick, deliberate entrance.
const ready = ref(false);
onMounted(() => requestAnimationFrame(() => (ready.value = true)));

/** Splits the long-form case study into heading/body blocks for readable prose. */
function getStoryBlocks(fullStory: string) {
  return fullStory.split("\n\n").map((block) => {
    const [firstLine, ...rest] = block.split("\n");
    return {
      heading: firstLine?.trim() ?? "",
      body: rest.join("\n").trim(),
    };
  });
}
</script>

<template>
  <div v-if="project" class="project-detail">
    <div class="project-detail__intro">
      <SectionReveal as="div" :visible="ready" :index="0">
        <RouterLink to="/#work" class="project-detail__back">← All work</RouterLink>
      </SectionReveal>

      <SectionReveal as="div" :visible="ready" :index="1" class="project-detail__header">
        <span class="project-detail__meta">{{ project.year }} — {{ project.stack[0] }}</span>
        <h1 class="project-detail__title">{{ project.title }}</h1>
        <p class="project-detail__summary">{{ project.summary }}</p>
        <div v-if="project.links?.length" class="project-detail__actions">
          <AppButton
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            external
            :variant="link.label.toLowerCase().includes('demo') ? 'primary' : 'ghost'"
          >
            {{ link.label }} ↗
          </AppButton>
        </div>
      </SectionReveal>
    </div>

    <SectionReveal as="div" :visible="ready" :index="2" class="project-detail__cover">
      <PortraitFrame :src="project.coverUrl" :placeholder="`${project.name} cover`" :alt="`${project.name} cover image`" ratio="16 / 9" />
    </SectionReveal>

    <SectionReveal as="div" :visible="ready" :index="3" class="project-detail__grid">
      <div class="project-detail__overview">
        <h2 class="project-detail__h2">Overview</h2>
        <p>{{ project.summary }}</p>
        <p v-if="project.impact">{{ project.impact }}</p>

        <h2 class="project-detail__h2">Highlights</h2>
        <ul class="project-detail__highlights">
          <li v-for="h in project.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>

      <aside class="project-detail__facts">
        <div class="project-detail__fact">
          <span class="project-detail__fact-label">Role</span>
          <span class="project-detail__fact-value">{{ project.role }}</span>
        </div>
        <div class="project-detail__fact">
          <span class="project-detail__fact-label">Category</span>
          <span class="project-detail__fact-value">{{ project.category }}</span>
        </div>
        <div class="project-detail__fact">
          <span class="project-detail__fact-label">Stack</span>
          <span class="project-detail__fact-value">{{ project.stack.join(", ") }}</span>
        </div>
        <div class="project-detail__fact">
          <span class="project-detail__fact-label">Year</span>
          <span class="project-detail__fact-value">{{ project.year }}</span>
        </div>
      </aside>
    </SectionReveal>

    <section v-if="project.fullStory" class="project-detail__story">
      <h2 class="project-detail__h2">Case study</h2>
      <div
        v-for="(block, idx) in getStoryBlocks(project.fullStory)"
        :key="`${project.slug}-story-${idx}`"
        class="project-detail__story-block"
      >
        <p v-if="idx !== 0" class="project-detail__story-heading">{{ block.heading }}</p>
        <p class="project-detail__story-body">{{ block.body }}</p>
      </div>
    </section>
  </div>

  <div v-else class="project-detail project-detail--missing">
    <h1 class="project-detail__title">Project not found</h1>
    <p class="project-detail__summary">This slug isn't in the content catalog yet.</p>
    <RouterLink to="/" class="project-detail__back">← Back to home</RouterLink>
  </div>
</template>

<style scoped>
.project-detail {
  flex: 1;
  padding: clamp(28px, 5vw, 72px) clamp(24px, 6vw, 88px);
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
}

.project-detail--missing {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: flex-start;
}

.project-detail__back {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color var(--duration-normal) var(--easing-standard);
}
.project-detail__back:hover {
  color: var(--ink);
}

.project-detail__header {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: clamp(28px, 5vw, 52px) 0;
}

.project-detail__meta {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-2);
}

.project-detail__title {
  font-size: clamp(2.4rem, 5vw, 4.25rem);
  letter-spacing: -0.04em;
  line-height: 0.96;
}

.project-detail__summary {
  font-size: clamp(1.1rem, 1.8vw, 1.4rem);
  line-height: 1.55;
  color: var(--ink-2);
  max-width: 56ch;
  margin: 0;
}

.project-detail__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.project-detail__cover {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  margin-bottom: clamp(32px, 5vw, 56px);
}

.project-detail__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(24px, 4vw, 48px);
}

.project-detail__overview {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.project-detail__overview p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--ink-2);
  margin: 0;
}

.project-detail__h2 {
  font-size: 1.3rem;
  margin: 0;
}

.project-detail__highlights {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--ink-2);
  line-height: 1.6;
  font-size: 0.95rem;
}

.project-detail__facts {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.project-detail__fact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-detail__fact-label {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-2);
}

.project-detail__fact-value {
  font-size: 15px;
}

.project-detail__story {
  margin-top: clamp(48px, 6vw, 80px);
  padding-top: clamp(32px, 5vw, 48px);
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.project-detail__story-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-detail__story-heading {
  margin: 0;
  font-weight: 700;
  color: var(--ink);
}

.project-detail__story-body {
  margin: 0;
  color: var(--ink-2);
  line-height: 1.75;
  white-space: pre-line;
}
</style>
