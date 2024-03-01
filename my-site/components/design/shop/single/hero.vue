<template>
    
<!-- =======================
Hero START -->
<section>
	<div class="container">
		<!-- Title and breadcrumb -->
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
				<li class="breadcrumb-item"><a href="#">Home</a></li>
				<li class="breadcrumb-item"><a href="#">All product</a></li>
				<li class="breadcrumb-item"><a href="#">Cart</a></li>
				<li class="breadcrumb-item active" aria-current="page">Checkout</li>
			</ol>
		</nav>

		<!-- Content START -->
		<div class="row mt-7">
			<!-- Images -->
			<div class="col-md-5 mb-5 mb-md-0">

				<!-- Slider START -->
				<div class="swiper" data-swiper-options='{
					"loop": false, 
					"grabCursor": true,
					"autoplay": false,
					"navigation":{
						"nextEl":".swiper-button-next",
						"prevEl":".swiper-button-prev"
					}}'>

					<div class="swiper-wrapper">
						<!-- Slider items -->
						<div class="swiper-slide">
							<a class="w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/shop/review/01.jpg">
								<div class="card card-element-hover overflow-hidden">
									<!-- Image -->
									<img src="assets/images/shop/review/06.jpg" class="rounded-3" alt="">
									<!-- Full screen button -->
									<div class="hover-element w-100 h-100">
										<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
									</div>
								</div>
							</a>
						</div>

						<!-- Slider items -->
						<div class="swiper-slide">
							<a class="w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/shop/review/02.jpg">
								<div class="card card-element-hover overflow-hidden">
									<!-- Image -->
									<img src="assets/images/shop/review/02.jpg" class="rounded-3" alt="">
									<!-- Full screen button -->
									<div class="hover-element w-100 h-100">
										<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
									</div>
								</div>
							</a>
						</div>

						<!-- Slider items -->
						<div class="swiper-slide">
							<a class="w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/shop/review/01.jpg">
								<div class="card card-element-hover overflow-hidden">
									<!-- Image -->
									<img src="assets/images/shop/review/01.jpg" class="rounded-3" alt="">
									<!-- Full screen button -->
									<div class="hover-element w-100 h-100">
										<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
									</div>
								</div>
							</a>
						</div>

						<!-- Slider items -->
						<div class="swiper-slide">
							<a class="w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/shop/review/05.jpg">
								<div class="card card-element-hover overflow-hidden">
									<!-- Image -->
									<img src="assets/images/shop/review/05.jpg" class="rounded-3" alt="">
									<!-- Full screen button -->
									<div class="hover-element w-100 h-100">
										<i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
									</div>
								</div>
							</a>
						</div>
					</div>
					
					<!-- Add pagination and navigation elements here -->
					<div class="d-flex justify-content-between position-absolute top-50 start-0 w-100">
						<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev"><i class="bi bi-arrow-left"></i></a>
						<a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next"><i class="bi bi-arrow-right"></i></a>
					</div>
				</div>	

			</div>

			<!-- Product detail -->
			<div class="col-md-7 ps-md-6">
				<!-- Badge -->
				<div class="badge text-bg-dark mb-3">Technology</div>

				<!-- Title -->
				<h1 class="h2 mb-4">The ultimate smartphone for modern lifestyles</h1>

				<!-- Rating list -->
				<div class="d-flex align-items-center flex-wrap mb-4">
					<ul class="list-inline mb-0">
						<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item me-0"><i class="fas fa-star-half-alt text-warning"></i></li>
						<li class="list-inline-item me-0 heading-color fw-normal">(4.5)</li>
					</ul>
					<span class="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
					<a href="#" class="heading-color text-primary-hover mb-0">345 reviews</a>
					<span class="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
					<span>86 sold</span>
				</div>

				<!-- Price -->
				<h4 class="text-success mb-4">$215.00</h4>

				<!-- Storage choice -->
				
				<div class="d-flex align-items-center gap-1 gap-sm-3 flex-wrap mt-2 mb-4">
					<span class="d-block">Memory storage:</span>
					<!-- First button -->
					<input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
					<label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio1">256 GB</label>
					<!-- Second button -->
					<input type="radio" class="btn-check" name="btnradio" id="btnradio2">
					<label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio2">512 GB</label>
					<!-- Third button -->
					<input type="radio" class="btn-check" name="btnradio" id="btnradio3">
					<label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio3">1 TB</label>
				</div>

				<!-- Color choice -->
				<div class="color-check-radio d-flex align-items-center gap-3 mt-2 mb-4">
					<span class="d-block">Select color:</span>
					<div>
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style="background-color: #9a0a0a;">
						<label class="form-check-label" for="flexRadioDefault1"></label>
	
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style="background-color: #32C7F5;">
						<label class="form-check-label" for="flexRadioDefault2"></label>
	
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" style="background-color: #F7C32E;">
						<label class="form-check-label" for="flexRadioDefault3"></label>
	
						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked style="background-color: #333369;">
						<label class="form-check-label" for="flexRadioDefault4"></label>
					</div>
				</div>

				<!-- Quantity -->
				<div class="d-flex align-items-center gap-3 mt-2 mb-4">
					<span class="d-block">Select quantity:</span>
					<!-- Select -->
					<div class="col-md-2">
						<select class="form-select" aria-label="Default select example">
							<option value="1">01</option>
							<option value="2">02</option>
							<option value="3">03</option>
						</select>
					</div>
				</div>	

				<p class="mb-4">Packed with cutting-edge features and innovations, this smartphone is more than just a communication tool, it's a lifestyle companion that keeps up with your needs.</p>

				<!-- Button -->
				<div class="d-grid">
					<a href="shop-cart.html" class="btn btn-primary mb-0 w-100"><i class="bi bi-cart2 me-2"></i>Add to Cart</a>
					<p class="mb-0 mt-2 text-end small"><i class="bi bi-question-circle-fill text-primary me-2"></i>Need help? <a href="contact-v1.html" class="mb-0">Chat Now</a></p>
				</div>

			</div>
		</div>
		<!-- Content END -->

	</div>
</section>
<!-- =======================
Hero END -->
</template>