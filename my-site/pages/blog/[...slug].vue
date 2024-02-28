<!-- New template-->
<script setup lang="ts">
import type { BlogPost } from '@/types/blog'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'no alter data available',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Riyad\'s Blog' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://blog-nurriyad.vercel.app/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://blog-nurriyad.vercel.app/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://blog-nurriyad.vercel.app/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Greetings 👋',
  title: data.value.title || '',
  description: data.value.description || '',
  link: data.value.ogImage,

})
</script>

<template>
	
  <!-- **************** MAIN CONTENT START **************** -->
  <main>

  <!-- =======================
  Blog detail START -->
  <section class="pt-lg-8">
    <div class="container pt-4 pt-lg-0">
      <div class="row g-4 g-sm-7">
        <!-- Main content START -->
        <div class="col-lg-8">

          <BlogHeader 
            :title="data.title"
            :image="data.image"
            :alt="data.alt"
            :date="data.date"
            :description="data.description"
            :tags="data.tags"
          />

          <div class="mt-5">
            <ContentRenderer v-if="articles" :value="articles">
            <template #empty>
              <p>No content found.</p>
            </template>
            </ContentRenderer>
          </div>


          <!-- Helpful box -->
          <div class="bg-light border rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
            <!-- Title -->
            <h6 class="mb-0">Was this article helpful?</h6>
            <small class="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
            <!-- Check buttons -->
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <!-- Yes button -->
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio1"><i class="fa-regular fa-thumbs-up me-1"></i> Yes</label>
              <!-- No button -->
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio2"> No <i class="fa-regular fa-thumbs-down ms-1"></i></label>
            </div>
          </div>
        </div>
        <!-- Main content END -->

        <!-- Sidebar START -->
        <div class="col-lg-4 ps-xl-6">

          <BlogToc />
          
          <!-- Related post -->
          <div class="align-items-center mt-5">
            <h6 class="mb-3 d-inline-block">Related post:</h6>

            <ul class="list-group list-group-flush">
              <li class="list-group-item ps-0"><a href="#" class="heading-color text-primary-hover fw-semibold">5 investment doubts you should clarify</a></li>
              <li class="list-group-item ps-0"><a href="#" class="heading-color text-primary-hover fw-semibold">Mastering Responsive Web Design with Bootstrap</a></li>
              <li class="list-group-item ps-0"><a href="#" class="heading-color text-primary-hover fw-semibold">Effortless Web Development with Mizzle</a></li>
              <li class="list-group-item ps-0"><a href="#" class="heading-color text-primary-hover fw-semibold">Sleek and Responsive - Designing with Bootstrap and Mizzle</a></li>
              <li class="list-group-item ps-0"><a href="#" class="heading-color text-primary-hover fw-semibold">Ten questions you should answer truthfully.</a></li>
            </ul>
          </div>

          <!-- Popular tags -->
          <div class="align-items-center mt-5">
            <h6 class="mb-3 d-inline-block">Popular Tags:</h6>
            <ul class="list-inline mb-0">
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">blog</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">business</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">bootstrap</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">data science</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">deep learning</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Adventure</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Community</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Tutorials</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Interview</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Photography</a> </li>
              <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Classic</a> </li>
            </ul>
          </div>
        </div>
        <!-- Sidebar END -->
      </div> <!-- Row END -->
    </div>
  </section>
  <!-- =======================
  Blog detail END -->

  </main>
  <!-- **************** MAIN CONTENT END **************** -->



</template>

