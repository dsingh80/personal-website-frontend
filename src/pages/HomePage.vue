<script setup lang="ts">
import { homeContent } from "@/content/home";
import HeroSection from "@/components/home/HeroSection.vue";
import StackMarqueeSection from "@/components/home/StackMarqueeSection.vue";
import SectionJumpNavStrip from "@/components/home/SectionJumpNavStrip.vue";
import StoryArticlesSection from "@/components/home/StoryArticlesSection.vue";
import TimelineSection from "@/components/home/TimelineSection.vue";
import SkillsGridSection from "@/components/home/SkillsGridSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ClosingCtaSection from "@/components/home/ClosingCtaSection.vue";
</script>

<template>
  <div class="home">
    <HeroSection :content="homeContent.hero" :metrics="homeContent.metrics" />
    <StackMarqueeSection :labels="homeContent.stackMarquee" />
    <SectionJumpNavStrip :items="homeContent.jumpNav" />
    <StoryArticlesSection :articles="homeContent.story" />
    <TimelineSection :entries="homeContent.timeline" />
    <SkillsGridSection :clusters="homeContent.skillClusters" />
    <AboutSection :content="homeContent.about" />
    <ClosingCtaSection
      :headline="homeContent.closingCta.headline"
      :body="homeContent.closingCta.body"
      :link-label="homeContent.closingCta.linkLabel"
      :link-to="homeContent.closingCta.linkTo"
    />
  </div>
</template>
