<template>
    
<!-- =======================
Similar product START -->
<section class="pt-0">
	<div class="container">

		<!-- Title -->
		<div class="d-flex justify-content-between mb-5">
			<h2 class="h4 mb-0">Similar products</h2>

			<!-- Slider arrow -->
			<div class="d-flex gap-1 gap-sm-3 d-xl-none">
				<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev"><i class="bi bi-arrow-left"></i></a>
				<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next"><i class="bi bi-arrow-right"></i></a>
			</div>
		</div>

		<!-- Slider START -->
		<div class="swiper" data-swiper-options='{
			"spaceBetween": 30, 
			"grabCursor": true,
			"speed":"1000",
			"navigation":{
				"nextEl":".swiper-button-next",
				"prevEl":".swiper-button-prev"
			},
			"autoplay":{
				"delay": 5000,
				"disableOnInteraction": true,
				"pauseOnMouseEnter": true
			},
			"breakpoints": {
				"576": {"slidesPerView": 1}, 
				"768": {"slidesPerView": 2}, 
				"992": {"slidesPerView": 3},
				"1200": {"slidesPerView": 4}
			}}'>

			<div class="swiper-wrapper">
				<!-- Slider items -->
				<div class="swiper-slide">
					<div class="card border bg-transparent overflow-hidden p-0 h-100">
						<!-- Overlay -->
						<div class="position-absolute top-0 start-0 p-3">
							<span class="badge text-bg-dark">Featured</span>
						</div>
	
						<!-- Image -->
						<div class="card-header bg-light rounded m-2">
							<img src="assets/images/shop/02.png" alt="">
						</div>
	
						<!-- Card body -->
						<div class="card-body pb-0">
							<!-- Title -->
							<h6 class="card-title"><a href="shop-detail.html" class="stretched-link">Classic round neck t-shirt</a></h6>
							<!-- Badge and price -->
							<ul class="list-inline">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
	
						<!-- Card footer -->
						<div class="card-footer bg-transparent d-flex justify-content-between align-items-center pt-0">
							<p class="fw-bold text-success mb-0">$103.00</p>
							<a href="#" class="btn btn-dark mb-0 z-index-2"><i class="bi bi-cart"></i></a>
						</div>
					</div>
				</div>

				<!-- Slider items -->
				<div class="swiper-slide">
					<div class="card border bg-transparent overflow-hidden p-0 h-100">
						<!-- Image -->
						<div class="card-header bg-light rounded m-2">
							<img src="assets/images/shop/03.png" alt="">
						</div>
	
						<!-- Card body -->
						<div class="card-body pb-0">
							<!-- Title -->
							<h6 class="card-title"><a href="shop-detail.html" class="stretched-link">Premium cotton baseball cap</a></h6>
							<!-- Badge and price -->
							<ul class="list-inline">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
	
						<!-- Card footer -->
						<div class="card-footer bg-transparent d-flex justify-content-between align-items-center pt-0">
							<p class="fw-bold text-success mb-0">$98.00</p>
							<a href="#" class="btn btn-dark mb-0 z-index-2"><i class="bi bi-cart"></i></a>
						</div>
					</div>
				</div>

				<!-- Slider items -->
				<div class="swiper-slide">
					<div class="card border bg-transparent overflow-hidden p-0 h-100">
						<!-- Overlay -->
						<div class="position-absolute top-0 start-0 p-3">
							<span class="badge text-bg-danger">30% off</span>
						</div>
	
						<!-- Image -->
						<div class="card-header bg-light rounded m-2">
							<img src="assets/images/shop/04.png" alt="">
						</div>
	
						<!-- Card body -->
						<div class="card-body pb-0">
							<!-- Title -->
							<h6 class="card-title"><a href="shop-detail.html" class="stretched-link">High performance headphones with Noise cancellation</a></h6>
							<!-- Badge and price -->
							<ul class="list-inline">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
	
						<!-- Card footer -->
						<div class="card-footer bg-transparent d-flex justify-content-between align-items-center pt-0">
							<div class="d-flex align-items-center gap-2 justify-content-center">
								<p class="fw-bold text-success mb-0">$150.00</p>
								<small class="text-decoration-line-through">$180.00</small>
							</div>
							<a href="#" class="btn btn-dark mb-0 z-index-2"><i class="bi bi-cart"></i></a>
						</div>
					</div>
				</div>

				<!-- Slider items -->
				<div class="swiper-slide">
					<div class="card border bg-transparent overflow-hidden p-0 h-100">
						<!-- Image -->
						<div class="card-header bg-light rounded m-2">
							<img src="assets/images/shop/01.png" alt="">
						</div>
	
						<!-- Card body -->
						<div class="card-body pb-0">
							<!-- Title -->
							<h6 class="card-title"><a href="shop-detail.html" class="stretched-link">Premium stainless steel water bottle</a></h6>
							<!-- Badge and price -->
							<ul class="list-inline">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
	
						<!-- Card footer -->
						<div class="card-footer bg-transparent d-flex justify-content-between align-items-center pt-0">
							<p class="fw-bold text-success mb-0">$40.00</p>
							<a href="#" class="btn btn-dark mb-0 z-index-2"><i class="bi bi-cart"></i></a>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
</section>
<!-- =======================
Similar product END -->
</template>