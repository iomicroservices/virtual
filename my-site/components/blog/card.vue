<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
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
    <div class="col-md-4">
        <article class="card card-img-scale shadow overflow-hidden h-100">
            <!-- Link whole element -->
            <NuxtLink :to="path">
                <!-- Image -->
                <div class="card-img-scale-wrapper">
                <NuxtImg
                    class="img-scale card-img-top"
                    width="300"
                    :src="image"
                    :alt="alt"
                />
                </div>

                <div class="card-body p-4">
                    <!-- Content -->
                    <h6 class="card-title mb-4">{{ title }}</h6>
                    <ul class="nav heading-color small nav-divider mb-0">
                        <li class="nav-item">
                            <template v-for="tag in tags" :key="tag">
                                <span class="badge text-bg-dark mb-3">{{ tag }}</span>
                            </template>
                        </li>
                        <li class="nav-item"><i class="bi bi-calendar me-1"></i>{{ date }}</li>
                    </ul>
                </div>    
            </NuxtLink>
        </article> 
    </div>            
</template>