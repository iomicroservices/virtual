<template>
    
<!-- =======================
Blogs START -->
<section class="pt-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-xl-4 text-center text-xl-start mx-auto">
				<!-- Title -->
				<h2 class="mb-4 h3">Explore Our Insights and Updates</h2>
				<p class="mb-0">Explore a world of articles covering a variety of topics, from best practices and success stories to tutorials and product updates. </p>
				
				<!-- Slider arrow -->
				<div class="d-flex justify-content-center justify-content-xl-start gap-3 position-relative mt-5 mt-xl-6">
					<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev"><i class="bi bi-arrow-left"></i></a>
					<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next"><i class="bi bi-arrow-right"></i></a>
				</div>	
			</div>

			<div class="col-xl-8 mt-5 mt-xl-0">
				<!-- Slider START -->
				<div class="swiper" data-swiper-options='{
					"spaceBetween": 40, 
					"grabCursor": true,
					"navigation":{
						"nextEl":".swiper-button-next",
						"prevEl":".swiper-button-prev"
					},
					"breakpoints": {
						"576": {"slidesPerView": 1}, 
						"768": {"slidesPerView": 2}, 
						"992": {"slidesPerView": 2}
					}}'>

					<!-- Slider items -->
					<div class="swiper-wrapper">
						<!-- Testimonials item -->
						<div class="swiper-slide">
							<article class="card bg-transparent h-100 p-0">
								<!-- Badge -->
								<div class="badge text-bg-dark position-absolute top-0 start-0 m-3">Technology</div>
			
								<!-- Card image -->
								<img src="assets/images/blog/4by3/01.jpg" class="card-img" alt="Blog-img">
			
								<!-- Card Body -->
								<div class="card-body px-2 pb-4">
									<!-- Title -->
									<h5 class="card-title mb-2"><a href="#">10 things you need to know about Mizzle</a></h5>

									<!-- Info -->
									<div class="d-flex justify-content-between mt-2">
										<span>By Bryan Knight</span>
										<a class="icon-link icon-link-hover stretched-link" href="blog-single-v1.html">Read more<i class="bi bi-arrow-right"></i> </a>
									</div>
								</div>
								
							</article>
						</div>

						<!-- Testimonials item -->
						<div class="swiper-slide">
							<article class="card bg-primary p-4 overflow-hidden h-100">
								<!-- pattern decoration -->
								<div class="position-absolute end-0 bottom-0 mb-n5 me-n7">
									<img src="assets/images/elements/pattern.svg" class="opacity-4" alt="">
								</div>
			
								<!-- Card body -->
								<div class="card-body z-index-1 p-0">
									<div class="d-flex justify-content-between mb-5">
										<div class="badge bg-dark text-white small">Advertisements</div>
										<a href="#!" class="mb-0 text-white small" tabindex="0" role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site.">
											<i class="bi bi-info-circle ps-1"></i> Sponsored
										</a>
									</div>
									<!-- Title -->
									<h5 class="card-title">Always wanted to become a coder? Here is a great chance for you to fulfill your dream.</h5>
								</div>
			
								<!-- Card footer -->
								<div class="card-footer bg-transparent d-flex justify-content-between align-items-center p-0 mt-4 mt-sm-8 z-index-1">
									<!-- Avatar info -->
									<div class="d-flex align-items-center">
										<div class="avatar flex-shrink-0 me-2">
											<div class="avatar-img rounded-circle bg-dark">
												<span class="text-white position-absolute top-50 start-50 translate-middle fw-bold small">WP</span>
											</div>
										</div>
										<span class="heading-color fw-semibold">Web poster</span>
									</div>
									<!-- Button -->
									<a href="#" class="btn btn-sm btn-white mb-0">Apply now</a>
								</div>
							</article>
						</div>

						<!-- Testimonials item -->
						<div class="swiper-slide">
							<article class="card bg-transparent h-100 p-0">
								<!-- Badge -->
								<div class="badge text-bg-dark position-absolute top-0 start-0 m-3">Marketing</div>
			
								<!-- Card image -->
								<img src="assets/images/blog/4by3/06.jpg" class="card-img" alt="Blog-img">
			
								<!-- Card Body -->
								<div class="card-body px-2 pb-4">
									<!-- Title -->
									<h5 class="card-title mb-2"><a href="#">5 investment doubts you should clarify</a></h5>
									<!-- info -->
									<div class="d-flex justify-content-between mt-2">
										<span>by Amanda Reed</span>
										<a class="icon-link icon-link-hover stretched-link" href="blog-single-v2.html">Read more<i class="bi bi-arrow-right"></i> </a>
									</div>
								</div>
								
							</article>
						</div>

						<!-- Testimonials item -->
						<div class="swiper-slide">
							<article class="card bg-transparent h-100 p-0">
								<!-- Badge -->
								<div class="badge text-bg-dark position-absolute top-0 start-0 m-3">Technology</div>
			
								<!-- Card image -->
								<img src="assets/images/blog/4by3/07.jpg" class="card-img" alt="Blog-img">
			
								<!-- Card Body -->
								<div class="card-body px-2 pb-4">
									<!-- Title -->
									<h5 class="card-title mb-2"><a href="#">10 things you need to know about Mizzle</a></h5>

									<!-- Info -->
									<div class="d-flex justify-content-between mt-2">
										<span>By Bryan Knight</span>
										<a class="icon-link icon-link-hover stretched-link" href="blog-single-v1.html">Read more<i class="bi bi-arrow-right"></i> </a>
									</div>
								</div>
								
							</article>
						</div>
					</div>	
				</div>
				<!-- Slider END -->
			</div>
		</div> <!-- Row END -->
	</div>
</section>
<!-- =======================
Blogs END -->
</template>