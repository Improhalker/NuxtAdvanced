<template>
    <div class="not-prose">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Someting went wrong... Try again!</section>
    <section v-else>Here we display the repos</section>
    <ul class="grid grid-cols-1 gap-4"> 
        <li v-for="repository in repos" :key="repository.id" class="border border-gray-200 dark:border-gray-700 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mon">
            <a :href="repository.html_url" target="_blank">
                <div class="flex items-center justify-between">
                    <div class="font-semibold">{{ repository.name }}</div>
                    <div>{{ repository.stargazers_count }} *</div>
                </div>
                <p class="text-sm">{{ repository.description }}</p>
            </a>
        </li>
    </ul>
</div>
</template>

<script setup>
 const {error, status, data} = await useFetch('https://api.github.com/users/Improhalker/repos');
 const repos = computed(
    () => (data.value || []).filter(repo => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
 )
</script>
