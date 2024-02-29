<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  description: string
  date: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  tags: () => ([]),
})
</script>

<template>
<header>

    <!-- Breadcrumb -->
    <div class="d-flex position-relative z-index-9">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-dots mb-1">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/blog">Blog</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title || '' }}</li>
        </ol>
    </nav>
    </div>

    <!-- Title -->
    <h1 class="h2 mb-0">{{ title || '' }}</h1>

    <!-- Action -->
    <div class="d-flex align-items-center flex-wrap mt-4">
        <!-- LogoTag /> -->
        <template v-for="tag in tags" :key="tag">
            <span class="badge text-bg-dark mb-0">{{ tag }}</span>
        </template>
        <span class="text-secondary opacity-3 mx-3">|</span>
    <div class="dropdown">
        <a href="#" class="text-secondary text-primary-hover" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-share me-2"></i>14
        </a>
        <!-- Card feed action dropdown menu -->
        <ul class="dropdown-menu min-w-auto" aria-labelledby="cardFeedAction">
        <li><a class="dropdown-item" href="#"> <i class="bi bi-facebook fa-fw me-2"></i>Facebook</a></li>
        <li><a class="dropdown-item" href="#"> <i class="bi bi-instagram fa-fw me-2"></i>Instagram</a></li>
        <li><a class="dropdown-item" href="#"> <i class="bi bi-whatsapp fa-fw me-2"></i>Whatsapp</a></li>
        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-paste fa-fw me-2"></i>Copy link</a></li>
        </ul>
    </div>
    <span class="text-secondary opacity-3 mx-3">|</span>    
    <!-- <LogoDate /> -->
    <p class="text-secondary text-primary-hover mb-0">{{ date || '' }}</p>
    <span class="text-secondary opacity-3 mx-3">|</span>
    <span class="text-secondary">2 min read</span>
    </div>

    <!-- Image -->
    <NuxtImg
      :src="image || 'assets/images/blog/03.jpg'"
      :alt="alt || ''"
      width="400"
      class="img-fluid rounded mt-5"
    />
    

    <!-- Quote -->
    <blockquote class="card card-body bg-light overflow-hidden mt-5 p-sm-5">
      <!-- Vertical line -->
      <div class="vr bg-primary h-100 position-absolute top-0 start-0" style="width: 3px; opacity:100%"></div>
      <!-- Quote icon -->
      <span class="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><i class="bi bi-quote"></i></span>
      <!-- Description text -->
      <q class="fs-6 heading-color">{{ description }}</q>

    </blockquote>

</header>
</template>