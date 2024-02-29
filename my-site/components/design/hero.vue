<script setup lang="ts">
interface Props {
  path: string
  title: string
  description: string
  image: string
  alt: string
  ogImage: string
  button1: string
  button2: string
  feature1: string
  feature2: string
  feature3: string
  badge: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: 'button-1',
  button2: 'button-2',
  feature1: 'feature-1',
  feature2: 'feature-2',
  feature3: 'feature-3',
  badge: 'badge',
})
</script>


<template>
<!-- =======================
Main Banner START -->
<section id="hero" class="pt-10 pb-0 mb-0">
	<!-- SVG decoration -->
	<div class="position-absolute top-0 start-0 ms-n7 d-none d-xl-block">
		<img src="assets/images/elements/decoration-pattern.svg" alt="">
	</div>

	<div class="container pt-2 pt-sm-5">
		<!-- Hero START -->
		<div class="row g-4 g-xxl-5">
			<!-- Hero content START -->
			<div class="col-xl-7 pe-xl-5">
				
				<span class="heading-color d-inline-block bg-light small rounded-3 px-3 py-2">{{ badge }}</span>

				
				<!-- Title -->
				<h1 class="mt-3"> 
					<p>{{ title }}</p>				
				</h1>

				<p class="mb-0 mt-4 mt-xl-5">{{ description }}</p>

				<!-- Buttons -->
				<div class="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
					<a href="#custom" class="btn btn-primary" role="button">{{ button1 }}</a>
					<a href="#process" class="btn btn-outline-dark" role="button">{{ button2 }}</a>
				</div>

				<!-- Features -->
				<ul class="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
					<li class="list-inline-item heading-color"> <i class="bi bi-fire me-1"></i>{{ feature1 }}</li>
					<li class="list-inline-item heading-color"> <i class="bi bi-bag-heart me-1"></i>{{ feature2 }}</li>
					<li class="list-inline-item heading-color"> <i class="bi bi-send-check me-1"></i>{{ feature3 }}</li>
				</ul>
			</div>
			<!-- Hero content END -->

			<!-- Hero image START -->
			<div class="col-xl-5 d-flex justify-content-center align-items-center">
				<img src="assets/images/custom/hero.png" alt="hello">
			<!-- Hero image END -->
			</div>
			
		</div>
		<!-- Hero END -->

		<hr class="border-primary opacity-2 mt-sm-7 mt-5  mb-0"> <!-- Divider -->
	</div>	
</section>
<!-- =======================
Main Banner END -->

</template>