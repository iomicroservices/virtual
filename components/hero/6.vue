<script setup lang="ts">
interface Props {
  path: string
  badge: string
  title: string
  description: string
  image: string
  alt: string
  ogImage: string
  button1: string
  button1href: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  badge: 'badge',
  title: 'no-title',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: 'button-1',
  button1href: '/contact',
})
</script>

<template>
    
<!-- =======================
Main Banner START -->
<section class="pt-5">
	<div class="container-fluid pt-5">
		<div class="row">
			<div class="col-xxl-11 mx-auto">
				<div class="gradient-background rounded position-relative overflow-hidden px-4 px-sm-6 pt-6 pt-xl-8" data-bs-theme="dark">

					<!-- Content -->
					<div class="inner-container-small text-center position-relative mb-4">
						<!-- Title and info -->
						<h6 class="mb-3 d-inline-block bg-light small rounded-3 px-3 py-2">{{ badge }}</h6>
						<h1 class="mb-3 display-7">{{ title }}</h1>
						<p class="text-white mb-3 mb-lg-4">{{ description }}</p>
						<!-- Button -->
						<a class="btn btn-lg btn-primary icon-link icon-link-hover" :href="button1href">{{ button1 }}<i class="bi bi-chevron-right"></i> </a>
					</div>

					<!-- Images -->
					<div class="row position-relative mb-n4 mb-md-n7 mb-xl-n9 align-items-center justify-content-center">
						<div class="col-xl-8 mx-auto">
							<NuxtImg :src="image" :alt="alt" />
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</section>
<!-- =======================
Main Banner END -->

</template>

<style scoped>

.gradient-background {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 200% 200%;
	animation: gradient 15s ease infinite;
	height: auto;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>