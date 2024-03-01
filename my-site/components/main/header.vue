<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}
</script>


<template>
    <!-- Header START -->
    <header class="header-sticky header-absolute">
        <!-- nav bar ----------------------------------------------->
        <nav class="navbar navbar-expand-xl">
            <div class="container">
                <!-- Logo START -->
                <NuxtLink to="/" class="navbar-brand me-0">
                    <img class="navbar-brand-item" src="/assets/images/logo.svg" alt="logo">
                </NuxtLink>
                <!-- Logo END -->
        
                <!-- Main navbar START -->
                <div class="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
        
                        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/blog">
                                Blog
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/#faqs">
                                FAQs
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#about">
                                About
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#contact-us">
                                Contact
                            </NuxtLink>
                         </li>
                    </ul>
                </div>
                <!-- Main navbar END -->
        
                <!-- Buttons -->
                <ul class="nav align-items-center dropdown-hover ms-sm-2">
        
                    <!-- Buy now button -->
                    <li class="nav-item d-none d-sm-block">
                        <a href="#custom" class="btn btn-sm btn-primary mb-0" role="button">Get started 🚀</a>
                    </li>
                    <!-- Responsive navbar toggler -->
                    <li class="nav-item">
                        <button class="navbar-toggler ms-sm-3 p-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Header END -->
</template>