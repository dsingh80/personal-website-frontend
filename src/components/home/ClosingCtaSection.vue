<script setup lang="ts">
defineProps<{
  headline: string;
  body: string;
  linkLabel: string;
  linkTo: string;
}>();
</script>

<template>
  <section id="contact" class="cta-section" aria-label="Contact call to action">
    <div class="cta-section__inner">
      <p class="kicker">Get in touch</p>
      <h2 class="cta-section__h2">
        Tell me what<br /><span class="cta-section__accent serif">you're building.</span>
      </h2>
      <p class="cta-section__dek">{{ body }}</p>
      <div class="cta-section__btns">
        <a :href="linkTo" class="btn btn-primary">{{ linkLabel }} →</a>
        <a href="https://github.com/dsingh80" target="_blank" rel="noreferrer" class="btn">GitHub · @dsingh80</a>
        <a href="https://www.linkedin.com/in/domsingh/" target="_blank" rel="noreferrer" class="btn">LinkedIn</a>
      </div>
      <div class="cta-section__foot mono">
        <p>© 2026 Damanveer Singh · Indianapolis, IN · +1 (317) 997-5730</p>
        <p>Built by hand</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 120px 0 32px;
  border-top: 1px solid var(--line);
}

.cta-section__inner {
  padding-inline: var(--pad-x);
}

.cta-section__h2 {
  font-family: var(--serif);
  font-size: clamp(3rem, 7.5vw, 6rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  font-weight: 500;
  margin: 18px 0 0;
  text-wrap: balance;
}

.cta-section__accent {
  color: var(--accent);
  font-style: italic;
}

.cta-section__dek {
  font-size: 19px;
  color: var(--ink-2);
  max-width: 640px;
  line-height: 1.55;
  margin: 28px 0 40px;
}

.cta-section__btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

.cta-section__foot {
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  margin-top: 80px;
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.cta-section__foot p {
  margin: 0;
}

@media (max-width: 640px) {
  .cta-section__btns {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-section__foot {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
