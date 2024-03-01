<template>
    
<!-- =======================
Team START -->
<section class="pt-0">
	<div class="container">
		<div class="row">
			<!-- Title -->
			<div class="col-md-4 mb-4 mb-md-0">
				<h2>Meet Our Dedicated Team</h2>
				<!-- Slider arrow -->
				<div class="d-flex gap-3 position-relative mt-md-5">
					<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev-team"><i class="bi bi-arrow-left"></i></a>
					<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next-team"><i class="bi bi-arrow-right"></i></a>
				</div>
			</div>

			<div class="col-md-8">
				<!-- Slider START -->
				<div class="swiper mt-2 mt-md-4" data-swiper-options='{
					"spaceBetween": 40,
					"navigation":{
						"nextEl":".swiper-button-next-team",
						"prevEl":".swiper-button-prev-team"
					},
					"breakpoints": { 
						"576": {"slidesPerView": 2},
						"992": {"slidesPerView": 3}
					}}'>
					
					<div class="swiper-wrapper">
						<!-- Team item -->
						<div class="swiper-slide">
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/01.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Emma Watson</a></h6>
									<small>Founder</small>
								</div>
							</div>
						</div>

						<!-- Team item -->
						<div class="swiper-slide">
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/02.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Allen Smith</a></h6>
									<small>UI/UX designer</small>
								</div>
							</div>
						</div>	

						<!-- Team item -->
						<div class="swiper-slide">
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/03.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Jacqueline Miller</a></h6>
									<small>Human Resource</small>
								</div>
							</div>
						</div>	
						
						<!-- Team item -->
						<div class="swiper-slide">
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/04.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Frances Guerrero</a></h6>
									<small>Software Developer</small>
								</div>
							</div>
						</div>

						<!-- Team item -->
						<div class="swiper-slide">
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/05.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Samuel Bishop</a></h6>
									<small>Product designer</small>
								</div>
							</div>
						</div>

						<!-- Team item -->
						<div class="swiper-slide">	
							<div class="card card-img-scale bg-transparent overflow-hidden">
								<div class="card-img-scale-wrapper rounded-3">
									<!-- Card Image -->              
									<img src="assets/images/team/4by4/06.jpg" class="img-scale" alt="card image">
								</div>
								<!-- Card body -->
								<div class="card-body text-center px-0 pb-0">
									<h6 class="mb-0"><a href="#" class="stretched-link">Amanda Reed</a></h6>
									<small>Content writer</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Slider END -->
			</div>
		</div> <!-- Row END -->
	</div>
</section>
<!-- =======================
Team END -->
</template>