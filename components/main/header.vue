<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>


<template>
    <!-- Header START -->
    <header class="header-sticky sticky-top">
        <!-- nav bar ----------------------------------------------->
        <nav class="navbar navbar-expand-xl">
            <div class="container">
                <!-- Logo START -->
                <NuxtLink to="/" class="navbar-brand py-2">
                    <img class="navbar-brand-item" src="/assets/images/logo.svg" alt="logo">
                </NuxtLink>
                <!-- Logo END -->
        
                <!-- Main navbar START -->
                <div class="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
        
                        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link fw-bold" to="/blog">
                                Blog
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link fw-bold" to="/#faqs">
                                FAQs
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link fw-bold" to="/#about">
                                About
                            </NuxtLink>
                         </li>
        
                        <!-- Nav item -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link fw-bold" to="/#contact-us">
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
                        <a href="/#custom" class="btn btn-sm btn-primary mb-0" role="button">Get started 🚀</a>
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

<style scoped>
/* Targets the element that has both `header-sticky` and `sticky` classes */
.header-sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

</style>