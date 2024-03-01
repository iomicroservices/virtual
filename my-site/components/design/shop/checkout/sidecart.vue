<template>
    
<!-- Offcanvas START -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu">
	<!-- Offcanvas header -->
	<div class="offcanvas-header justify-content-between border-bottom px-3">
		<h5 class="mb-0">Your Cart</h5>
		<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>

	<!-- Offcanvas body -->
	<div class="offcanvas-body d-flex flex-column px-3">
		<div class="row g-3">
			<!-- Image -->
			<div class="col-4">
				<img class="rounded-2 bg-light p-2" src="assets/images/shop/02.png" alt="avatar">
			</div>
			<div class="col-8">
				<p class="heading-color fw-semibold mb-1">Round neck cotton t-shirt</p>
				<div class="d-flex justify-content-between align-items-center">
					<!-- Select item -->
					<select class="form-select form-select-sm w-auto" aria-label="Default select example">
						<option value="1">01</option>
						<option value="2">02</option>
						<option value="3">03</option>
					</select>
	
					<a href="#" class="btn btn-sm btn-link p-0">Remove</a>
				</div>
			</div>
		</div>

		<!-- Button and price -->
		<div class="mt-auto">
			<div class="d-flex justify-content-between mb-2">
				<span class="heading-color fw-semibold">Subtotal</span>
				<h6 class="text-success mb-0">$103</h6>
			</div>
			<!-- Button -->
			<div class="d-grid">
				<a href="checkout.html" class="btn btn-lg btn-dark mb-0">Continue to Checkout</a>
			</div>
		</div>
	</div>
</div>
<!-- Offcanvas END -->
</template>