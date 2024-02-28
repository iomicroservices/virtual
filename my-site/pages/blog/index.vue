<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blog').sort({ _id: -1 }).find())

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchTest = ref('')

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  }) || []
})

const searchData = computed(() => {
  return formattedData.value.filter((data) => {
    const lowerTitle = data.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedData = computed(() => {
  return searchData.value.filter((data, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}

useHead({
  title: 'The blog',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
  titleTemplate: 'Telco - %s',
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'The blog',
    description: 'Here you will find all the blog posts I have written & published on this site.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main>
    <ArchiveHero />
        <div>
            <!-- =======================
            Blog list and sidebar START -->
            <section class="pt-0">
                <div class="container">
                    <div class="row g-xl-7">
                        <!-- Blog list START -->
                        <div class="col-lg-8">

                            <!-- Blog item -->
                            <article class="card card-hover-shadow border p-3 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- Image -->
                                        <img src="assets/images/blog/4by4/06.jpg" class="img-fluid card-img" alt="blog-img">
                                    </div>
                                    <div class="col-md-8">
                                        <!-- Content -->
                                        <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                                            <div><span class="badge text-bg-dark mb-3">Technology</span></div>
                                            <h5 class="card-title mb-3 mb-md-0">The Power of Gratitude: Cultivating Joy and Abundance</h5>
                                            <!-- Author name and button -->
                                            <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                                                <p class="mb-2 heading-color fw-semibold">By Carolyn Ortiz</p>
                                                <a class="icon-link icon-link-hover stretched-link" href="blog-single-v1.html">Read more<i class="bi bi-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <!-- Blog items -->
                            
                            <ClientOnly>
                            <div>
                                <template v-for="post in paginatedData" :key="post.title">
                                <ArchiveCard
                                    :path="post.path"
                                    :title="post.title"
                                    :date="post.date"
                                    :description="post.description"
                                    :image="post.image"
                                    :alt="post.alt"
                                    :og-image="post.ogImage"
                                    :tags="post.tags"
                                    :published="post.published"
                                />
                                </template>

                                <ArchiveCard
                                v-if="paginatedData.length <= 0"
                                title="No Post Found"
                                image="/not-found.jpg"
                                />
                            </div>

                            <template #fallback>
                                <!-- this will be rendered on server side -->
                                <BlogLoader />
                                <BlogLoader />
                            </template>
                            </ClientOnly>

                            <!-- Blog item -->
                            <article class="card card-hover-shadow border p-3 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- Image -->
                                        <img src="assets/images/blog/4by4/07.jpg" class="img-fluid card-img" alt="blog-img">
                                    </div>
                                    <div class="col-md-8">
                                        <!-- Content -->
                                        <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                                            <div class="d-flex justify-content-between position-relative z-index-2">
                                                <span class="badge text-bg-dark mb-3">Lifestyle</span>
                                                <a href="#!" class="mb-0 text-body small" tabindex="0" role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site.">
                                                    <i class="bi bi-info-circle ps-1"></i> Sponsored
                                                </a>
                                            </div>
                                            <h5 class="card-title mb-3 mb-md-0">5 investment doubts you should clarify</h5>
                                            <!-- Author name and button -->
                                            <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                                                <p class="mb-2 heading-color fw-semibold">By Amanda Reed</p>
                                                <a class="icon-link icon-link-hover stretched-link" href="blog-single-v2.html">Read more<i class="bi bi-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <!-- Blog item -->
                            <article class="card card-hover-shadow border p-3 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- Image -->
                                        <img src="assets/images/blog/4by4/08.jpg" class="img-fluid card-img" alt="blog-img">
                                    </div>
                                    <div class="col-md-8">
                                        <!-- Content -->
                                        <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                                            <div><span class="badge text-bg-dark mb-3">Design</span></div>
                                            <h5 class="card-title mb-3 mb-md-0">Mastering Responsive Web Design with Bootstrap</h5>
                                            <!-- Author name and button -->
                                            <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                                                <p class="mb-2 heading-color fw-semibold">By Joan Wallace</p>
                                                <a class="icon-link icon-link-hover stretched-link" href="blog-single-v1.html">Read more<i class="bi bi-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <!-- Blog item -->
                            <article class="card card-hover-shadow border p-3 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- Image -->
                                        <img src="assets/images/blog/4by4/09.jpg" class="img-fluid card-img" alt="blog-img">
                                    </div>
                                    <div class="col-md-8">
                                        <!-- Content -->
                                        <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                                            <div><span class="badge text-bg-dark mb-3">Marketing</span></div>
                                            <h5 class="card-title mb-3 mb-md-0">Effortless Web Development with Mizzle</h5>
                                            <!-- Author name and button -->
                                            <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                                                <p class="mb-2 heading-color fw-semibold">By Lori Stevens</p>
                                                <a class="icon-link icon-link-hover stretched-link" href="blog-single-v2.html">Read more<i class="bi bi-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <!-- Blog item -->
                            <article class="card card-hover-shadow border p-3">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- Image -->
                                        <img src="assets/images/blog/4by4/10.jpg" class="img-fluid card-img" alt="blog-img">
                                    </div>
                                    <div class="col-md-8">
                                        <!-- Content -->
                                        <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                                            <div><span class="badge text-bg-dark mb-3">Research</span></div>
                                            <h5 class="card-title mb-3 mb-md-0">Ten questions you should answer truthfully.</h5>
                                            <!-- Author name and button -->
                                            <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                                                <p class="mb-2 heading-color fw-semibold">By Louis Crawford</p>
                                                <a class="icon-link icon-link-hover stretched-link" href="blog-single-v2.html">Read more<i class="bi bi-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <!-- Blog list END -->

                        <!-- Sidebar START -->
                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <!-- Subscribe box -->
                            <div class="card card-body bg-light p-4">
                                <!-- Svg icon -->
                                <svg class="mb-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1113_392)">
                                    <path class="fill-primary" d="M22.5492 24.7427C23.8548 25.6131 26.1456 25.6132 27.4515 24.7426C27.4517 24.7425 27.452 24.7423 27.4522 24.7422L49.7048 9.90706C48.9749 7.79611 46.9686 6.27539 44.6128 6.27539H5.38754C3.03156 6.27539 1.0254 7.79611 0.29541 9.90706L22.5485 24.7423C22.5488 24.7425 22.549 24.7425 22.5492 24.7427Z"/>
                                    <path class="fill-mode" d="M29.077 27.1812C29.0767 27.1814 29.0765 27.1816 29.0763 27.1817C27.9335 27.9435 26.4665 28.3244 25 28.3244C23.5332 28.3244 22.0668 27.9436 20.9239 27.1816C20.9237 27.1815 20.9236 27.1814 20.9234 27.1813L0 13.2324V38.3373C0 41.3077 2.41672 43.7244 5.38735 43.7244H44.6128C47.5834 43.7244 50 41.3077 50 38.3373V13.2324L29.077 27.1812Z"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1113_392">
                                    <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <!-- Title -->
                                <h6 class="mb-3">Get the latest Mizzle article delivered to your inbox</h6>
                                <!-- Newsletter -->
                                <form>
                                    <input type="email" class="form-control mb-2" placeholder="Email address">
                                    <button type="submit" class="btn btn-dark mb-0">Subscribe</button>
                                </form>
                            </div>

                            <!-- Advertisement -->
                            <div class="card text-bg-dark mt-5">
                                <img src="assets/images/blog/adv.jpg" class="card-img" alt="adv image">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Advertisement</h5>
                                </div>
                            </div>

                            <!-- Social button -->
                            <div class="mt-5">
                                <h6 class="mb-3">Follow us on:</h6>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item"> <a class="btn btn-round bg-facebook" href="#"><i class="fab fa-fw fa-facebook-f lh-base"></i></a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-round bg-instagram" href="#"><i class="fab fa-fw fa-instagram lh-base"></i></a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-round bg-twitter" href="#"><i class="fab fa-fw fa-twitter lh-base"></i></a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-round bg-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in lh-base"></i></a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-round bg-youtube" href="#"><i class="fab fa-fw fa-youtube lh-base"></i></a> </li>
                                </ul>
                            </div>

                            <!-- Popular tags -->
                            <div class="align-items-center mt-5">
                                <h6 class="mb-3 d-inline-block">Popular Tags:</h6>
                                <ul class="list-inline mb-0 social-media-btn">
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">blog</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">business</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">bootstrap</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">data science</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">deep learning</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Adventure</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Community</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Tutorials</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Interview</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Photography</a> </li>
                                    <li class="list-inline-item"> <a class="btn btn-light btn-sm" href="#">Classic</a> </li>
                                </ul>
                            </div>

                        </div>
                        <!-- Sidebar END -->

                        <!-- Pagination START -->
                        <div class="col-12 mt-6">
                            <ul class="pagination pagination-primary-soft d-flex justify-content-sm-between flex-wrap mb-0">
                                <li>
                                    <ul class="list-unstyled">
                                        <li class="page-item">
                                            <a class="page-link" href="#"><i class="fas fa-long-arrow-alt-left me-2 rtl-flip"></i>Prev</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul class="list-unstyled">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">..</a></li>
                                        <li class="page-item"><a class="page-link" href="#">22</a></li>
                                        <li class="page-item"><a class="page-link" href="#">23</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul class="list-unstyled">
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next<i class="fas fa-long-arrow-alt-right ms-2 rtl-flip"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- Pagination END -->

                    </div>
                </div>
            </section>
            <!-- =======================
            Blog list and sidebar END -->
        </div>

    <div class="px-6">
      <input
        v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block"
      >
    </div>


    <div class="flex justify-center items-center space-x-6 ">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
        <Icon name="mdi:code-greater-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }" />
      </button>
    </div>
  </main>
</template>