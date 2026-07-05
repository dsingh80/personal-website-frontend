<script setup lang="ts">
import { ref } from "vue";
import { contactContent, heroContent } from "@/content/home";
import { projects } from "@/content/projects";
import HeroSection from "@/components/home/HeroSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import VideoSection from "@/components/home/VideoSection.vue";
import ContactSection from "@/components/home/ContactSection.vue";
import StickyCtaBar from "@/components/common/StickyCtaBar.vue";

const showStickyBar = ref(false);
</script>

<template>
  <div class="home-page">
    <HeroSection :content="heroContent" @cta-out-of-view="showStickyBar = $event" />
    <ProjectsSection :projects="projects" />
    <VideoSection />
    <ContactSection :content="contactContent" />
    <StickyCtaBar :visible="showStickyBar" />
  </div>
</template>
