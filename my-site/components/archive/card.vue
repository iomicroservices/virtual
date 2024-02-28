<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
    <!-- Blog item -->
    <article class="card card-hover-shadow border p-3 mb-4">
        <NuxtLink :to="path">
            <div class="row">
                <div class="col-md-4">
                    <NuxtImg
                    class="img-fluid card-img"
                    width="300"
                    :src="image"
                    :alt="alt"
                    />
                </div>
                <div class="col-md-8">
                    <!-- Content -->
                    <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                        <div><p v-for="tag in tags" :key="tag" class="badge text-bg-dark mb-3">{{ tag }}</p></div>
                        <h5 class="card-title mb-3 mb-md-0">{{ title }} </h5>
                        <p> {{ description }} </p>
                        <!-- Author name and button -->
                        <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                            <p class="mb-2 heading-color fw-semibold">
                                <LogoDate />
                                <p> {{ date }}</p>
                            </p>
                            <a class="icon-link icon-link-hover stretched-link" href="blog-single-v1.html">Read more<i class="bi bi-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </article>
</template>