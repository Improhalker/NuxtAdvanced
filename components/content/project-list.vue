<template>
    <div class="not-prose">
        <section v-if="pending" class="text-center text-gray-500 dark:text-gray-400">Loading...</section>
        <section v-else-if="error" class="text-center text-red-500 dark:text-red-400">Something went wrong... Try again!</section>
        <section v-else>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">My GitHub Repositories</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <li v-for="repository in repos" :key="repository.id" class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 shadow-lg">
                    <a :href="repository.html_url" target="_blank" class="block">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-lg text-gray-800 dark:text-white">{{ repository.name }}</h3>
                            <div class="text-sm text-yellow-500 dark:text-yellow-400 flex items-center">
                                <span class="material-icons mr-1">Stars:</span>{{ repository.stargazers_count }}
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300">{{ repository.description }}</p>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const { error, status, data } = await useFetch('https://api.github.com/users/Improhalker/repos');
const repos = computed(() =>
    (data.value || [])
        .filter(repo => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
