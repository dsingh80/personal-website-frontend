<script setup lang="ts">
import { siteIdentity } from "@/content/site";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__frame section-frame">
      <span class="site-footer__copy">© {{ year }} {{ siteIdentity.shortName }} — built with care</span>
      <nav class="site-footer__links" aria-label="Social">
        <a :href="siteIdentity.github" target="_blank" rel="noopener noreferrer" class="site-footer__link">GitHub ↗</a>
        <a :href="siteIdentity.linkedin" target="_blank" rel="noopener noreferrer" class="site-footer__link"
          >LinkedIn ↗</a
        >
        <a :href="siteIdentity.resumeUrl" target="_blank" rel="noopener noreferrer" class="site-footer__link"
          >Resume ↗</a
        >
        <a :href="`mailto:${siteIdentity.email}`" class="site-footer__link">Email →</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-block: 40px;
  border-top: 1px solid var(--line);
}

.site-footer__frame {
  padding-inline: clamp(24px, 6vw, 88px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.site-footer__copy {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-2);
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);
}

.site-footer__link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-2);
  transition: color var(--duration-normal) var(--easing-standard);
}
.site-footer__link:hover,
.site-footer__link:focus-visible {
  color: var(--accent);
}

@media (max-width: 600px) {
  .site-footer__frame {
    justify-content: center;
    text-align: center;
  }
}
</style>
