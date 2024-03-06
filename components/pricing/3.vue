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
  price: string
  pricedesc: string
  features: string
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  feature5: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  badge: 'badge',
  title: 'no-title',
  description: 'Our passion for customer excellence is just one reason why we are the market leader. We`ve always worked very hard to give our customers the best experience.',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: 'button-1',
  button1href: '/contact',
  price: '£11',
  pricedesc: 'Free call features:',
  features: 'Features list of your need',
  feature1: 'Up to 05 users monthly',
  feature2: 'Free 5 host & domain',
  feature3: 'Google Docs style editors',
  feature4: 'Support for 30+ languages',
  feature5: '24/7 Dedicated Support',
})
</script>

<template>
    
<!-- =======================
Pricing START -->
<section class="pt-0">
	<div class="container">
		<div class="bg-dark rounded-3 p-5 p-md-6" data-bs-theme="dark">
			<div class="row g-4 g-md-5">
				<!-- Title & content -->
				<div class="col-xl-6 h-100 pe-sm-7">

					<div class="d-xl-flex justify-content-between">
						<div>
							<h3 class="mb-4">{{ title }}</h3>
							<p class="mb-4">{{ description }}</p>
							<a class="btn btn-white icon-link icon-link-hover" :href="button1href">{{ button1 }}<i class="bi bi-chevron-right"></i> </a>
						</div>
						<div class="vr bg-secondary opacity-1 ms-5 d-none d-xl-block"></div>
					</div>
				</div>

				<!-- Pricing & features -->
				<div class="col-xl-6 ms-auto">
					<div class="row">
						<!-- Price -->
						<div class="col-sm-6">
							<div class="icon-lg text-primary bg-white rounded-circle mb-3 m-md-start"><i class="bi bi-person-hearts fa-xl"></i></div>
							<p class="text-secondary fw-semibold mb-3">{{ badge }}</p>
							<h6 class="mb-1"> <span class="fs-1">{{ price }}</span> / month</h6>
							<p class="fw-semibold text-primary">{{ pricedesc }}</p>
						</div>
						
						<!-- Features -->
						<div class="col-sm-6 ps-md-5">
							<p class="text-secondary fw-semibold mb-3">{{ features }}</p>
							<!-- List -->
							<ul class="list-group list-group-borderless">
								<li class="list-group-item d-flex heading-color mb-0"><i class="bi bi-patch-check text-primary me-2"></i>{{ feature1 }}</li>
								<li class="list-group-item d-flex heading-color mb-0"><i class="bi bi-patch-check text-primary me-2"></i>{{ feature2 }}</li>
								<li class="list-group-item d-flex heading-color mb-0"><i class="bi bi-patch-check text-primary me-2"></i>{{ feature3 }}</li>
								<li class="list-group-item d-flex heading-color mb-0"><i class="bi bi-patch-check text-primary me-2"></i>{{ feature4 }}</li>
								<li class="list-group-item d-flex heading-color mb-0"><i class="bi bi-patch-check text-primary me-2"></i>{{ feature5 }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- =======================
Pricing END -->
</template>