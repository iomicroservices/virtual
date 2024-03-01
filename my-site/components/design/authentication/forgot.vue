<template>
    <!-- Right -->
			<div id="stepper" class="bs-stepper stepper-outline position-relative col-sm-10 col-lg-5 d-flex m-auto vh-100">

<!-- Step Buttons START -->
<div class="bs-stepper-header position-absolute top-0 start-50 translate-middle-x" role="tablist">
    <!-- Step 1 -->
    <div class="step" data-target="#step-1">
        <div class="text-center">
            <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                <span class="bs-stepper-circle">1</span>
            </button>
        </div>
    </div>

    <!-- Step 2 -->
    <div class="step" data-target="#step-2">
        <div class="text-center">
            <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                <span class="bs-stepper-circle">2</span>
            </button>
        </div>
    </div>

    <!-- Step 3 -->
    <div class="step" data-target="#step-3">
        <div class="text-center">
            <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                <span class="bs-stepper-circle">3</span>
            </button>
        </div>
    </div>

    <!-- Step 4 -->
    <div class="step" data-target="#step-4">
        <div class="text-center">
            <button type="button" class="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
                <span class="bs-stepper-circle">4</span>
            </button>
        </div>
    </div>
</div>
<!-- Step Buttons END -->

<div class="bs-stepper-content d-flex justify-content-center m-auto w-100">
    <form class="w-100" onsubmit="return false">
        <div class="row g-4 m-auto">
            <!-- Main content START -->
            <div class="col-lg-10 m-auto">

                <!-- Step 1 content START -->
                <div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">

                    <a href="index.html"><img src="assets/images/logo-icon.svg" class="h-50px mb-4" alt="logo"></a>

                    <h2 class="mb-1">Forgot password</h2>
                    <p class="mb-4">Enter the email address associated with an account.</p>
                
                    <!-- Email -->
                    <div class="input-floating-label form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>

                    <!-- Button -->
                    <div class="d-grid">
                        <button class="btn btn-dark mb-0" type="button">Reset password</button>
                    </div>

                    <!-- Sign up link -->
                    <div class="mt-4 text-center">
                        <a href="sign-up.html" class="text-primary-hover"><i class="bi bi-arrow-left"></i> Back to login</a>
                    </div>
                </div>
                <!-- Step 1 content END -->

                <!-- Step 2 content START -->
                <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
                    <a href="index.html"><img src="assets/images/logo-icon.svg" class="h-50px mb-4" alt="logo"></a>

                    <h2 class="mb-1">Password reset</h2>
                    <p class="mb-4">We sent a code to <span class="fw-bold">example@gmail.com</span></p>
                
                    <!-- Form START -->
                    <div class="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-3">
                        <input type="text" maxlength="1" class="form-control text-center p-3">
                        <input type="text" maxlength="1" class="form-control text-center p-3">
                        <input type="text" maxlength="1" class="form-control text-center p-3">
                        <input type="text" maxlength="1" class="form-control text-center p-3">
                    </div>

                    <!-- Button -->
                    <div class="d-grid text-center">
                        <button class="btn btn-dark mb-0" type="button">Continue</button>
                        <p class="mb-0 mt-3">Didn't receive the code? <a href="#">Click to resend</a></p>
                    </div>
                    <!-- Form END -->

                    <!-- Sign up link -->
                    <div class="mt-4 text-center">
                        <a href="sign-up.html" class="text-primary-hover"><i class="bi bi-arrow-left"></i> Back to login</a>
                    </div>
                </div>
                <!-- Step 2 content END -->

                <!-- Step 3 content START -->
                <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
                    <a href="index.html"><img src="assets/images/logo-icon.svg" class="h-50px mb-4" alt="logo"></a>

                    <h2 class="mb-1">Set new password</h2>
                    <p class="mb-4">Must be at least 8 character</p>
                
                    <!-- Password -->
                    <div class="input-floating-label form-floating position-relative">
                        <input type="password" class="form-control fakepassword pe-6" id="psw-input" placeholder="Enter your password">
                        <label for="floatingInput">Password</label>
                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                    </div>
                    <!-- Pswmeter -->
                    <div id="pswmeter" class="mt-3"></div>
                    <div class="d-flex mt-1 mb-4">
                        <div id="pswmeter-message" class="rounded"></div>
                        <!-- Password message notification -->
                        <button type="button" class="btn btn-link p-0 text-primary-hover ms-auto" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="focus"
                            data-bs-placement="top"
                            data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long.">
                            <i class="bi bi-info-circle ps-1" ></i>
                        </button>
                    </div>

                    <!-- Confirm Password -->
                    <div class="input-floating-label form-floating mb-3">
                        <input type="password" class="form-control" placeholder="Confirm your password">
                        <label for="floatingInput">Confirm Password</label>
                    </div>

                    <!-- Button -->
                    <div class="d-grid text-center">
                        <button class="btn btn-dark mb-0" type="button">Reset Password</button>
                    </div>

                    <!-- Sign up link -->
                    <div class="mt-4 text-center">
                        <a href="sign-up.html" class="text-primary-hover next-btn"><i class="bi bi-arrow-left"></i> Back to login</a>
                    </div>
                </div>
                <!-- Step 3 content END -->

                <!-- Step 4 content START -->
                <div id="step-4" role="tabpanel" class="content fade text-center" aria-labelledby="steppertrigger4">

                    <span class="display-2 text-success"><i class="bi bi-check-circle"></i></span>
                    <h2 class="mb-1 mt-4">Password changed!</h2>
                    <p class="mb-4">Your password has been changed successfully.</p>

                    <!-- Button -->
                    <div class="d-grid text-center">
                        <a href="index.html" class="btn btn-dark mb-0">Back to main page</a>
                    </div>
                </div>
                <!-- Step 4 content END -->
            </div>
            <!-- Main content END -->
        </div>						
    </form>
</div>
</div>
</template>