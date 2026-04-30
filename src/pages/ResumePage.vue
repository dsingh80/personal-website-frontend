<script setup lang="ts">
const pdfUrl = "/DamanveerSingh_Resume.pdf";
</script>

<template>
  <div class="page section">
    <div class="section-inner">
      <h1 class="title">Resume</h1>
      <p class="lede">
        PDF is the source of truth for dates and titles. This page is a quick access point for recruiters and hiring
        managers.
      </p>
      <div class="actions">
        <a :href="pdfUrl" class="btn" download>Download PDF</a>
        <a :href="pdfUrl" class="btn ghost" target="_blank" rel="noopener noreferrer">Open in new tab</a>
      </div>
      <div class="embed-wrap">
        <iframe class="embed" title="Resume PDF" :src="pdfUrl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 0 0 var(--space-sm);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.lede {
  margin: 0 0 var(--space-lg);
  color: var(--color-text-muted);
  max-width: 40rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  text-decoration: none;
  background: var(--color-accent);
  color: var(--color-bg);
}

.btn.ghost {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.embed-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  min-height: 70vh;
}

.embed {
  width: 100%;
  height: 70vh;
  border: none;
}
</style>
