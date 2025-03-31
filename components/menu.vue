<template>
    <nav class="font-mono">
        <ul class="flex space-x-4">
            <li>
                <NuxtLink to="/" class="link dark:hover:bg-gray-800">Main</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about dark:hover:bg-gray-800" class="link">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects/" class="link dark:hover:bg-gray-800" >Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/" class="link dark:hover:bg-gray-800">Blog</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoper>
.link {
    @apply p-1 hover:bg-gray-500
}
</style>