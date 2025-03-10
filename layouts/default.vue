<template>
    <div class="container mx-auto">
        <header class="flex justify-between items-center mt-5">
            <div>
                <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 ">Gabriel Estrela</NuxtLink>
            </div>
      
            <Menu />

        </header>

        <main class="p-2">

        </main>
        <slot/>
    </div>
</template>

<script setup>
useHead({
titleTemplate: '%s - Gabriel Estrela'


})

</script>