<template>
    <nav class="font-mono">
                <ul class="flex space-x-4">
                    <li>
                    <NuxtLink to="/" class="link" >Main</NuxtLink>
                    </li>
                    <li>
                    <NuxtLink to="/about" class="link">About</NuxtLink>
                    </li>
                    
                    <li>
                    <NuxtLink to="/blog/" class="link">Blog</NuxtLink>
                    </li>
                </ul>
            </nav>
</template>

<style scoper>
    .link {
        @apply p-1 hover:bg-gray-100
    }

</style>