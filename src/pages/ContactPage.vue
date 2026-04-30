<script setup lang="ts">
const links = [
  { label: "Email", href: "mailto:singhdam27@gmail.com", external: false },
  { label: "GitHub", href: "https://github.com/dsingh80", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dsingh80", external: true },
];
</script>

<template>
  <div class="page section">
    <div class="section-inner narrow">
      <h1 class="title">Contact</h1>
      <p class="lede">Best channel is email. I’m open to senior IC roles, fractional leadership, and interesting product
        builds.</p>
      <ul class="links">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" v-bind="l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}">{{ l.label }}</a>
        </li>
      </ul>
      <p class="note">No backend form yet — this site stays static until you want one.</p>
    </div>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 36rem;
}

.title {
  margin: 0 0 var(--space-sm);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
}

.lede {
  margin: 0 0 var(--space-xl);
  color: var(--color-text-muted);
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  font-size: 1.125rem;
}

.note {
  margin-top: var(--space-xl);
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
</style>
