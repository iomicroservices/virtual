<template>
    
<!-- =======================
Checkout content START -->
<section class="pt-0">
	<div class="container">
		<div class="row">
			<!-- Left side START -->
			<div class="col-lg-8 mb-6 mb-lg-0">
				<!-- Personal info START -->
				<div class="card bg-transparent mb-6">
					<!-- Card header -->
					<div class="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center px-0">
						<h5>Personal info</h5>
						<a href="#" class="btn btn-sm btn-light border mb-0"><i class="bi bi-plus-lg me-1"></i>Add new</a>
					</div>

					<!-- Card body -->
					<div class="card-body px-0 pb-0">
						<!-- Card body --> 
						<div class="card-body p-0">
							<form class="row g-3">
								<!-- First name -->
								<div class="col-md-6">
									<label class="form-label">First name</label>
									<input type="text" class="form-control" value="Jacqueline" aria-label="First name">
								</div>

								<!-- Last name -->
								<div class="col-md-6">
									<label class="form-label">Last name</label>
									<input type="text" class="form-control" value="Miller"  aria-label="Last name">
								</div>

								<!-- Email -->
								<div class="col-md-6">
									<label class="form-label">Email</label>
									<input type="email" value="example@gmail.com" class="form-control">
								</div>
								
								<!-- Mobile number -->
								<div class="col-md-6">
									<label class="form-label">Mobile number</label>
									<input type="text" value="9154857896" class="form-control">
								</div>

								<!-- Address -->
								<div class="col-12">
									<label class="form-label">Address</label>
									<input type="text" value="1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548." class="form-control">
								</div>

								<!-- Address 2 -->
								<div class="col-12">
									<label class="form-label">Address 2 (Optional)</label>
									<input type="text" class="form-control">
								</div>

								<!-- Country -->
								<div class="col-md-4">
									<label class="form-label">Country</label>
									<select class="form-select" aria-label="Default select example">
										<option value="1">UK</option>
										<option value="2">USA</option>
										<option value="3">India</option>
									</select>
								</div>

								<!-- State -->
								<div class="col-md-4">
									<label class="form-label">State</label>
									<select class="form-select" aria-label="Default select example">
										<option value="1">New York</option>
										<option value="2">California</option>
										<option value="3">Mumbai</option>
										<option value="3">Peru</option>
									</select>
								</div>

								<!-- Zip -->
								<div class="col-md-4">
									<label class="form-label">Zip</label>
									<input type="text" value="444555" class="form-control">
								</div>

								<!-- custom checkbox -->
								<div class="col-md-12">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">The shipping address is the same as my billing address </label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
										<label class="form-check-label" for="flexCheckDefault2">Save this information for next time </label>
									</div>
								</div>

								<div class="col-12">
									<label class="form-label me-2">Your saved cards</label>
									<a href="#"><img src="assets/images/elements/visa.svg" class="w-40px me-2" alt=""></a>
									<a href="#"><img src="assets/images/elements/mastercard.svg" class="w-40px me-2" alt=""></a>
								</div>
							</form>
						</div>	
					</div>
				</div>
				<!-- Personal info END -->

				<!-- Payment options START -->
				<div class="card bg-transparent">
					<!-- Card header -->
					<div class="card-header bg-transparent border-bottom px-0">
						<h5>Payment options</h5>
					</div>

					<!-- Card body -->
					<div class="card-body px-0">
						<div class="row g-4">
							<!-- Options item -->
							<div class="col-md-6 col-lg-12 col-xl-6">
								<div class="form-check border rounded p-3">
									<div class="d-flex justify-content-between">
										<label class="form-check-label d-flex align-items-start pe-4" for="standard">
											<img src="assets/images/elements/visa.svg" class="w-40px me-3 mt-1" alt="">
											<span>
												<span class="d-block fw-semibold heading-color mb-1">Visa ending in 1245</span>
												<span class="d-block small">Expiry 08/2024</span>
											</span>
										</label>
										<input class="form-check-input" type="radio" name="payOptions" id="standard" checked>
									</div>

									<div class="d-flex justify-content-end gap-3 mt-3">
										<a href="#" class="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="#" class="heading-color text-primary-hover fw-semibold small" data-bs-toggle="modal" data-bs-target="#editcard"><i class="bi bi-pencil-square me-1"></i>Edit</a>
									</div>
								</div>
							</div>

							<!-- Options item -->
							<div class="col-md-6 col-lg-12 col-xl-6">
								<div class="form-check border rounded p-3">
									<div class="d-flex justify-content-between">
										<label class="form-check-label d-flex align-items-start pe-4" for="standard2">
											<img src="assets/images/elements/mastercard.svg" class="w-40px me-3 mt-1" alt="">
											<span>
												<span class="d-block fw-semibold heading-color mb-1">Mastercard ending in 1245</span>
												<span class="d-block small">Expiry 06/2024</span>
											</span>
										</label>
										<input class="form-check-input" type="radio" name="payOptions" id="standard2">
									</div>

									<div class="d-flex justify-content-end gap-3 mt-3">
										<a href="#" class="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="#" class="heading-color text-primary-hover fw-semibold small" data-bs-toggle="modal" data-bs-target="#editcard"><i class="bi bi-pencil-square me-1"></i>Edit</a>
									</div>
								</div>
							</div>

							<!-- Options item -->
							<div class="col-md-6 col-lg-12 col-xl-6">
								<div class="form-check border rounded p-3">
									<div class="d-flex justify-content-between">
										<label class="form-check-label d-flex align-items-start pe-4" for="standard3">
											<img src="assets/images/elements/paypal.svg" class="w-30px me-3 mt-1" alt="">
											<span>
												<span class="d-block fw-semibold heading-color mb-1">Pay using PayPal</span>
												<span class="d-block small">Fast, easy an secure</span>
											</span>
										</label>
										<input class="form-check-input" type="radio" name="payOptions" id="standard3">
									</div>

									<div class="d-flex justify-content-end gap-3 mt-3">
										<a href="#" class="text-body-secondary text-primary-hover small">Set as default</a>
										<a href="#" class="heading-color text-primary-hover fw-semibold small"><i class="bi bi-pencil-square me-1"></i>Edit</a>
									</div>
								</div>
							</div>

							<!-- Options item -->
							<div class="col-md-6 col-lg-12 col-xl-6">
								<div class="form-check border rounded p-3">
									<div class="d-flex justify-content-between">
										<label class="form-check-label d-flex align-items-start pe-4" for="standard4">
											<span class="w-40px"><i class="bi bi-truck fs-5"></i></span>
											<span>
												<span class="d-block fw-semibold heading-color mb-1">Cash on delivery</span>
												<span class="d-block small">You have to pay <b>$25</b> for delivery.</span>
											</span>
										</label>
										<input class="form-check-input" type="radio" name="payOptions" id="standard4">
									</div>

									<div class="mt-3 text-end">
										<a href="#" class="text-body-secondary text-primary-hover small">Set as default</a>
									</div>
								</div>
							</div>

						</div>
					</div>	
				</div>
				<!-- Payment options END -->
			</div>
			<!-- Left side END -->

			<!-- Right side START -->
			<div class="col-lg-4 ps-xl-6">
				<!-- Summary -->
				<div class="card border p-4">
					<!-- card header -->
					<div class="card-header p-0 pb-3">
						<h5 class="card-title mb-0">Promo code</h5>

						<!-- Input -->
						<form class="input-group mt-4">
							<input class="form-control rounded me-1" type="email" placeholder="Type here..">
							<button type="button" class="btn btn-dark rounded-2 mb-0">Apply</button>
						</form>
					</div>

					<!-- Card body -->
					<div class="card-body p-0 pb-3 mt-2">
						<ul class="list-group list-group-borderless">
							<li class="list-group-item d-flex justify-content-between align-items-center">
								<span>Subtotal</span>
								<span class="heading-color fw-semibold mb-0">$473.00</span>
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center">
								<span>Service Charge</span>
								<span class="heading-color fw-semibold mb-0">-$50</span>	
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center">
								<span>Tax</span>
								<span class="heading-color fw-semibold mb-0">$10</span>
							</li>
						</ul>
					</div>

					<!-- Card footer -->
					<div class="card-footer bg-transparent border-top p-0 pt-3">
						<div class="d-flex justify-content-between align-items-center mb-4">
							<span class="heading-color fw-normal">Payable Now</span>
							<span class="h6 mb-0">$410.00</span>
						</div>

						<!-- Button -->
						<div class="d-grid"><a href="#" class="btn btn-lg btn-primary mb-0">Place order</a></div>
					</div>
				</div>

				<!-- Product detail -->
				<div class="card bg-transparent mt-5">
					<!-- Card header -->
					<div class="card-header bg-transparent border-bottom px-0">
						<h6 class="mb-0">Arrives by Wed, Jan 25</h6>
					</div>

					<!-- Card body -->
					<div class="card-body px-0 pb-0">
						<!-- Item -->
						<div class="d-flex align-items-start border-bottom pb-4 mb-4">
							<!-- Image -->
							<div class="bg-light p-2 rounded-2 w-25">
								<img src="assets/images/shop/02.png" alt="">
							</div>

							<div class="ms-3">
								<p class="fw-semibold mb-1"><a href="#" class="heading-color text-primary-hover">Round neck cotton t-shirt</a></p>
								<ul class="list-group list-group-borderless small">
									<li class="list-group-item mb-0 pb-0">Item: #2458644</li>
									<li class="list-group-item mb-0 pb-0">Color: Midblue</li>
									<li class="list-group-item mb-0 pb-0">Size: L</li>
								</ul>
							</div>
						</div>

						<!-- Item -->
						<div class="d-flex align-items-start border-bottom pb-4">
							<!-- Image -->
							<div class="bg-light p-2 rounded-2 w-25">
								<img src="assets/images/shop/08.png" alt="">
							</div>

							<div class="ms-3">
								<p class="fw-semibold mb-1"><a href="#" class="heading-color text-primary-hover">Mizz dunk low shoes</a></p>
								<ul class="list-group list-group-borderless small">
									<li class="list-group-item mb-0 pb-0">Item: #2458644</li>
									<li class="list-group-item mb-0 pb-0">Size: 42</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Right side END -->
		</div>
	</div>
</section>
<!-- =======================
Checkout content END -->
</template>