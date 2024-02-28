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
    
    <!-- =======================
    Main Banner START -->
    <section class="pt-8">
        <div class="container">
            <!-- Main title and search -->
            <div class="inner-container text-center">
                <!-- Title -->
                <h1 class="mb-0 lh-base position-relative">
                    <!-- SVG decoration -->
                    <span class="position-absolute top-0 start-0 mt-n5 ms-n5 d-none d-sm-block">
                        <svg class="fill-primary" width="63.6px" height="93.3px" viewBox="0 0 63.6 93.3" style="enable-background:new 0 0 63.6 93.3;" xml:space="preserve">
                            <path d="M58.5,1.9c0.5,0,1.6,5.3,2.4,11.8c0.8,6.5,1.4,14,1.6,18.5c0.3,8.8-0.5,15.9-1.6,16c-1.1,0-2.1-7.1-2.4-15.8 c-0.2-4.4-0.3-12-0.4-18.4C57.9,7.3,57.9,1.9,58.5,1.9z"/>
                            <path d="M47.7,44.4c-0.5,0.1-1.5-2.1-2.8-4.7c-1.3-2.6-2.8-5.5-3.7-7.2c-1.7-3.4-2.9-6.4-2.1-7c0.8-0.6,3.4,1.5,5.3,5.1 c1,1.8,2.2,5.1,2.9,8.1C48.1,41.8,48.2,44.3,47.7,44.4z"/>
                            <path d="M36.2,53.4c-0.2,0.5-4.1-1.2-8.5-3.5c-4.4-2.3-9.5-5.4-12.3-7.3c-5.6-3.9-9.6-7.9-9-8.8c0.6-0.9,5.4,1.7,11,5.5 c2.8,1.9,7.5,5.3,11.6,8.2C33.1,50.5,36.4,53,36.2,53.4z"/>
                            <path d="M27.2,68.3c-0.1,0.5-2.1,0.7-4.4,0.6c-2.4,0-5.1-0.3-6.7-0.7c-3.1-0.6-5.4-2-5.2-3c0.2-1,2.9-1.2,5.9-0.5 c1.5,0.3,4.1,1,6.3,1.7C25.4,67.1,27.2,67.8,27.2,68.3z"/>
                            <path d="M30.8,83.2c0.1,0.5-3.5,1.7-7.7,3.1c-4.3,1.4-9.2,3.1-12.1,4.1c-5.7,1.9-10.6,3.1-11,2.1 c-0.4-0.9,3.9-3.6,9.8-5.6c2.9-1,8.1-2.4,12.6-3.2C26.9,83,30.7,82.7,30.8,83.2z"/>
                        </svg>
                    </span>
                    Thoughts, stories and ideas from Telco
                </h1>
                <!-- Search -->
                <form class="col-md-7 bg-light border rounded-2 position-relative mx-auto p-2 mt-4 mt-md-5">
                    <div class="input-group">
                        <input
                            v-model="searchTest"
                            placeholder="Search..."
                            type="search"
                            class="form-control focus-shadow-none bg-light border-0 me-1"
                            id="searchBar"
                        >
                        <button type="button" class="btn btn-dark rounded-2 mb-0"><i class="bi bi-search me-2"></i>Search</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- =======================
    Main Banner END -->

    <!-- =======================
    Blog list and sidebar START -->
    <section class="pt-0">
        <div class="container">
            <div class="row g-xl-7">
                <!-- Blog list START -->
                <div class="col-lg-8">
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
                <ul class="pagination pagination-primary-soft justify-content-center flex-wrap mb-0">
                    <!-- Previous Page Button -->
                    <li class="page-item" :class="{ disabled: pageNumber <= 1 }">
                    <a class="page-link" href="#" @click.prevent="onPreviousPageClick">
                        <i class="fas fa-long-arrow-alt-left me-2 rtl-flip"></i>
                    </a>
                    </li>

                    <!-- First Page -->
                    <li class="page-item" :class="{ active: pageNumber === 1 }">
                    <a class="page-link" href="#">1</a>
                    </li>

                    <!-- Placeholder for intermediate page numbers -->
                    <li class="page-item" :class="{ active: pageNumber > 1 && pageNumber < totalPage }">
                    <a class="page-link" href="#" @click.prevent="() => {}">...</a>
                    </li>

                    <!-- Last Page -->
                    <li class="page-item" :class="{ active: pageNumber === totalPage }">
                    <a class="page-link" href="#">{{ totalPage }}</a>
                    </li>

                    <!-- Next Page Button -->
                    <li class="page-item" :class="{ disabled: pageNumber >= totalPage }">
                    <a class="page-link" href="#" @click.prevent="onNextPageClick">
                        <i class="fas fa-long-arrow-alt-right me-2 rtl-flip"></i>
                    </a>
                    </li>
                </ul>
                </div>
                <!-- Pagination END -->
            </div>
        </div>
    </section>
    <!-- =======================
    Blog list and sidebar END -->
    </main>
</template>