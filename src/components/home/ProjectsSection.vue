<script setup lang="ts">
import type { ProjectEntry } from "@/types/content";
import SectionReveal from "@/components/common/SectionReveal.vue";
import ProjectCard from "@/components/home/ProjectCard.vue";
import { useRevealOnScroll } from "@/composables/useRevealOnScroll";

defineProps<{
  projects: ProjectEntry[];
}>();

const { target, isVisible } = useRevealOnScroll();
</script>

<template>
  <section id="work" class="projects-section" aria-labelledby="projects-heading">
    <div class="projects-section__frame section-frame">
      <div ref="target" class="projects-section__header">
        <SectionReveal as="h2" id="projects-heading" :visible="isVisible" class="projects-section__title">
          Featured Projects
        </SectionReveal>
      </div>

      <div class="projects-section__grid">
        <ProjectCard v-for="(project, i) in projects" :key="project.slug" :project="project" :index="i" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding-block: clamp(40px, 7vw, 96px);
  border-top: 1px solid var(--line);
}

.projects-section__frame {
  padding-inline: clamp(24px, 6vw, 88px);
}

.projects-section__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: clamp(28px, 4vw, 52px);
}

.projects-section__title {
  font-size: clamp(1.9rem, 3vw, 2.75rem);
  letter-spacing: -0.035em;
}

.projects-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}
</style>
