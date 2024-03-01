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
    
    <LandlineHero
      badge="🤩 Largest selection of UK numbers"
      title="Virtual business numbers made by you"
      description="Have something specific in mind? Request a custom mobile number in a couple of clicks. It has never been easier to create a personalised mobile number that reflects your identity or brand."
      image="/custom/hero.png"
      alt="personalise your mobile phone number for business"
      ogImage="/custom/hero.png"
      button1="Create a number"
      button2="Find out more"
      feature1="Request for free"
      feature2="£185+/number"
      feature3="International delivery"
      path=""
    />
    
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