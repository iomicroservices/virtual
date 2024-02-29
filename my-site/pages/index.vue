<script lang="ts" setup>
useHead({
  title: 'Homepage',
  meta: [
    {
      name: 'Homepage description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
  titleTemplate: 'Virtual Telco - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Virtual Telco Blog',
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>
  <div>
    <DesignSaas3Testimonials />
    <LandlineHero />
    <LandlineForm />
    <LandlinePricing />
    <LandlineProcess />
    <LandlineFeatures />
    <LandlineFaqs />
    <LandlineContact />
    <LandlineFeedback />
    <LandlineAbout />
  </div>
</template>