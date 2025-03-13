<script setup lang="ts">
const { data: home, error } = await useAsyncData(() => queryCollection('content').path('/blog').first())

if (error.value) {
    console.error('Failed to fetch home content:', error.value)
}

useSeoMeta({
    title: home.value?.title || 'Default Title',
    description: home.value?.description || 'Default Description'
})
</script>

<template>
    <ContentRenderer v-if="home && !error" :value="home" />
    <div v-else-if="error">Failed to load home content</div>
    <div v-else>Home not found</div>
</template>
