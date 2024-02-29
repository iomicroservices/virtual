<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
    <!-- ToC box -->
    <div class="card card-body bg-light border p-4">
        <div class="d-flex align-items-center mb-3">
            <h6 class="mb-0"><a href="#">Table of contents</a></h6>
        </div>
        <ul class="list-unstyled">
            <li v-for="link in links" :key="link.id" class="mb-2"> <!-- Add space between list items -->
                <NuxtLink :to="`#${link.id}`">
                    {{ link.text }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>