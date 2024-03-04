<script setup>

const description
  = 'Riyad, Software Engineer at AppsCode working on ByteBuilders, with over 2+ years experience in Frontend development.'
const ogTitle
  = 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving'
const twitterDescription
  = 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc'
const image
  = 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp'
const mySite = 'https://blog-nurriyad.vercel.app/'

  useHead({
    title: "this is a title",
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
        crossorigin: "anonymous"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
        integrity: "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
        crossorigin: "anonymous"
      }
    ],
  })
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import '~/assets/css/style.css';
@import '~/assets/vendor/font-awesome/css/all.min.css';
@import '~/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '~/assets/css/swiper-bundle.min.css';


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark{
  color-scheme: dark;
}

</style>