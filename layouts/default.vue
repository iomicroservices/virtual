<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div>
    <header>
      <MainHeader />
      <SpeedInsights />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>