<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
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

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
  titleTemplate: 'Riyad\'s Blog - %s',
})
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300   ">
        Recent Post
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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


  <!-- =======================
Blog START -->
<Section>
	<div class="container">
		<!-- Title -->
		<div class="row align-items-center g-4 mb-5">
			<div class="col-md-6">
				<h2 class="mb-0">Take a look at the latest articles & blogs</h2>
			</div>
			<div class="col-md-5 ms-auto text-sm-end">
				<!-- Button -->
				<a href="blog-grid.html" class="btn btn-light btn-lg mb-0">View all blogs</a>
			</div>
		</div>

		<div class="row g-4 g-xl-5">
			<!-- Blog item -->
			<div class="col-md-4">
				<article class="card card-img-scale shadow overflow-hidden h-100">
					<!-- Image -->
					<div class="card-img-scale-wrapper">
						<img src="assets/images/blog/4by3/03.jpg" class="img-scale card-img-top" alt="Blog-img">
					</div>

					<div class="card-body p-4">
						<!-- Content -->
						<h6 class="card-title mb-4"><a href="blog-single-v1.html" class="stretched-link">Sleek and Responsive - Designing with Bootstrap and Mizzle</a></h6>
						<ul class="nav heading-color small nav-divider mb-0">
							<li class="nav-item">By Jacqueline Miller</li>
							<li class="nav-item"><i class="bi bi-calendar me-1"></i>April 08, 2023</li>
						</ul>
					</div>
				</article>
			</div>

			<!-- Blog item -->
			<div class="col-md-4">
				<article class="card card-img-scale shadow overflow-hidden h-100">
					<!-- Image -->
					<div class="card-img-scale-wrapper">
						<img src="assets/images/blog/4by3/01.jpg" class="img-scale card-img-top" alt="Blog-img">
					</div>

					<div class="card-body p-4">
						<!-- Content -->
						<h6 class="card-title mb-4"><a href="blog-single-v1.html" class="stretched-link">Webestica Template: The Ultimate Web Design Solution</a></h6>
						<ul class="nav heading-color small nav-divider mb-0">
							<li class="nav-item">By Jacqueline Miller</li>
							<li class="nav-item"><i class="bi bi-calendar me-1"></i>April 13, 2023</li>
						</ul>
					</div>
				</article>
			</div>

			<!-- Blog item -->
			<div class="col-md-4">
				<article class="card card-img-scale shadow overflow-hidden h-100">
					<!-- Image -->
					<div class="card-img-scale-wrapper">
						<img src="assets/images/blog/4by3/07.jpg" class="img-scale card-img-top" alt="Blog-img">
					</div>

					<div class="card-body p-4">
						<!-- Content -->
						<h6 class="card-title mb-4"><a href="blog-single-v1.html" class="stretched-link">Effortless Web Design with Mizzle - Unlock Your Creative Potential</a></h6>
						<ul class="nav heading-color small nav-divider mb-0">
							<li class="nav-item">By Allen Smith</li>
							<li class="nav-item"><i class="bi bi-calendar me-1"></i>April 26, 2023</li>
						</ul>
					</div>
				</article>
			</div>
		</div> <!-- Row END -->
	</div>
</Section>
<!-- =======================
Blog END -->
</template>