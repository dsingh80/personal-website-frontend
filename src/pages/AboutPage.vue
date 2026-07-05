<script setup lang="ts">
import { aboutContent } from "@/content/about";
import { siteIdentity } from "@/content/site";
</script>

<template>
  <div class="page section">
    <div class="section-inner narrow">
      <div class="profile-header">
        <img class="profile-header__avatar" src="/images/dom-portrait_600x.webp" alt="Photo of Damanveer Singh" />
        <div class="profile-header__socials">
          <a
            class="profile-header__social"
            :href="siteIdentity.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
              />
            </svg>
          </a>
          <a
            class="profile-header__social"
            :href="siteIdentity.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <h1 class="title">{{ siteIdentity.name }}</h1>
      <p class="intro">{{ aboutContent.intro }}</p>
      <h2 class="h2">Values</h2>
      <ul class="list">
        <li v-for="v in aboutContent.values" :key="v">{{ v }}</li>
      </ul>
      <template v-if="aboutContent.pillars?.length">
        <h2 class="h2">How I show up</h2>
        <ul class="pillar-list">
          <li v-for="p in aboutContent.pillars" :key="p.title">
            <strong class="pillar-title">{{ p.title }}</strong>
            <span class="pillar-desc">{{ p.description }}</span>
          </li>
        </ul>
      </template>
      <h2 class="h2">Now</h2>
      <p class="text">{{ aboutContent.now }}</p>
      <h2 class="h2">Next</h2>
      <p class="text">{{ aboutContent.next }}</p>
    </div>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 42rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.profile-header__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  border: 1px solid var(--line);
  background: var(--bg-2);
}

.profile-header__socials {
  display: flex;
  gap: 12px;
}

.profile-header__social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--line);
  color: var(--ink);
  transition:
    border-color var(--duration-normal) var(--easing-standard),
    color var(--duration-normal) var(--easing-standard);
}
.profile-header__social:hover,
.profile-header__social:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
}

.title {
  margin: 0 0 var(--space-lg);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.intro {
  margin: 0 0 var(--space-xl);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.h2 {
  margin: var(--space-xl) 0 var(--space-sm);
  font-size: 1.125rem;
  color: var(--color-accent);
}

.list {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
}

.pillar-list {
  margin: 0 0 var(--space-xl);
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.pillar-title {
  display: block;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.pillar-desc {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}

.text {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
