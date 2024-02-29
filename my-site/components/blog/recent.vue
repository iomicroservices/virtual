<script lang="ts" setup>
// Get Last 3 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blog').limit(3).sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})
</script>

<template>
    <div class="container mt-8 pb-0 mb-0">    

        <!-- Title -->
        <div class="row align-items-center g-4 mb-5">
            <!-- Title -->
            <div class="col-md-6">
            <h2 class="mb-0">Take a look at the latest articles & blogs</h2>
            </div>

            <!-- Button -->
            <div class="col-md-5 ms-auto text-sm-end">
            <a href="/blog" class="btn btn-light btn-lg mb-0">View all posts</a>
            </div>
        </div>

        <!-- Recent blog items -->
        <div class="row g-4 g-xl-5">
            <template v-for="post in formattedData" :key="post.title">
                <BlogCard
                :path="post.path"
                :title="post.title"
                :date="post.date"
                :description="post.description"
                :image="post.image"
                :alt="post.alt"
                :og-image="post.ogImage"
                :tags="post.tags"
                :published="post.published"
                />
            </template>
            <template v-if="data?.length === 0">
                <BlogEmpty />
            </template>
        </div>
    </div>
</template>