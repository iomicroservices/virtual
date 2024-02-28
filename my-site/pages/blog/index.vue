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
    <section id="blogHero" class="pt-8">
        <div class="container">
            <!-- Main title and search -->
            <div class="inner-container text-center">
                <!-- Title -->
                <h1 class="mb-0 lh-base position-relative">
                    <!-- SVG decoration -->
                    <span class="position-absolute top-0 start-0 mt-n5 ms-n5 d-none d-sm-block">
                        <LogoPop />
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
            
                <!-- Popular tags -->
                <div class="align-items-center mt-5">
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
        </div>
    </section>
    <!-- =======================
    Main Banner END -->

    <!-- =======================
    Blog list and sidebar START -->
    <section id="blogBody" class="pt-0">
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
                    
                    <!-- Advertisement -->
                    <div class="card text-bg-dark mb-5">
                        <img src="assets/images/blog/adv.jpg" class="card-img" alt="adv image">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Advertisement</h5>
                        </div>
                    </div>

                    <!-- Subscribe box -->
                    <div class="card card-body bg-light p-4">
                        <!-- Svg icon -->
                        <LogoEmail />
                        <!-- Title -->
                        <h6 class="mb-3">Get the latest Mizzle article delivered to your inbox</h6>
                        <!-- Newsletter -->
                        <form>
                            <input type="email" class="form-control mb-2" placeholder="Email address">
                            <button type="submit" class="btn btn-dark mb-0">Subscribe</button>
                        </form>
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

                </div>
                <!-- Sidebar END -->

                <!-- Pagination START -->
                <div class="col-12 mt-6" v-if="totalPage > 1">
                <ul class="pagination pagination-primary-soft justify-content-center flex-wrap mb-0">
                    <!-- Previous Page Button -->
                    <li class="page-item" :class="{ disabled: pageNumber <= 1 }">
                    <a class="page-link" href="#" @click.prevent="onPreviousPageClick">
                        <i class="fas fa-long-arrow-alt-left me-2 rtl-flip"></i> Prev
                    </a>
                    </li>

                    <!-- First Page -->
                    <li class="page-item" :class="{ active: pageNumber === 1 }">
                    <a class="page-link" href="#">1</a>
                    </li>

                    <!-- Placeholder for intermediate page numbers -->
                    <li class="page-item" v-if="totalPage > 2" :class="{ active: pageNumber > 1 && pageNumber < totalPage }">
                    <a class="page-link" href="#" @click.prevent="() => {}">...</a>
                    </li>

                    <!-- Last Page -->
                    <li class="page-item" :class="{ active: pageNumber === totalPage }">
                    <a class="page-link" href="#">{{ totalPage }}</a>
                    </li>

                    <!-- Next Page Button -->
                    <li class="page-item" :class="{ disabled: pageNumber >= totalPage }">
                    <a class="page-link" href="#" @click.prevent="onNextPageClick">Next
                        <i class="fas fa-long-arrow-alt-right ms-2 rtl-flip"></i>
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