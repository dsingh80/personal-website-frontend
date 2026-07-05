<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/common/NavBar.vue";
import SiteFooter from "@/components/common/SiteFooter.vue";
</script>

<template>
  <div class="page-shell">
    <NavBar />
    <main class="site-main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
}

.site-main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
