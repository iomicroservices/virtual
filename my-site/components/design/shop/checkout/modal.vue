<template>
    
<!-- Modal START -->
<div class="modal fade" id="editcard" tabindex="-1" aria-labelledby="editCardLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<!-- Modal header -->
			<div class="modal-header px-4">
				<h5 class="modal-title" id="editCardLabel">Edit card</h5>
				<button type="button" class="btn btn-sm btn-light mb-0" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
			</div>
			<!-- Modal body -->
			<div class="modal-body p-4">
				<form class="row g-4">
					<!-- Card number -->
					<div class="col-12">
						<label class="form-label">Card Number</label>
						<div class="position-relative">
							<input type="text" class="form-control" maxlength="16" value="2456 2588 4589 7895" placeholder="xxxx xxxx xxxx xxxx">
							<img src="assets/images/elements/visa.svg" class="w-40px position-absolute top-50 end-0 translate-middle-y me-2" alt="">
						</div>	
					</div>
					<!-- Expiration Date -->
					<div class="col-md-6">
						<label class="form-label">Expiration date</label>
						<div class="input-group">
							<input type="text" class="form-control" maxlength="2" value="08" placeholder="Month">
							<input type="text" class="form-control" maxlength="4" value="2024" placeholder="Year">
						</div>
					</div>	
					<!--Cvv code  -->
					<div class="col-md-6">
						<label class="form-label">CVV / CVC</label>
						<input type="text" class="form-control" maxlength="3" value="565" placeholder="xxx">
					</div>
					<!-- Card name -->
					<div class="col-12">
						<label class="form-label">Name on Card</label>
						<input type="text" class="form-control" aria-label="name of card holder" value="Jacqueline Miller" placeholder="Name of card holder">
					</div>
					<!-- Check box -->
					<div class="col-md-12">
						<div class="form-check mb-0">
							<input type="checkbox" class="form-check-input" id="exampleCheck1">
							<label class="form-check-label" for="exampleCheck1">Secuarely save card and details</label>
						</div>	
					</div>
				</form>
			</div>
			<!-- Modal footer -->
			<div class="modal-footer px-4">
				<button type="button" class="btn btn-white border my-0" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary my-0" data-bs-dismiss="modal">Save change</button>
			</div>
		</div>
	</div>
</div>
<!-- Modal END -->
</template>