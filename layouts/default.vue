<template>
    <div class="">
        <header class="px-3 py-2 flex justify-between items-start md:items-center">
            <div class="flex items-center md:space-x-12">
                <Menu />
            </div>
            <ColorModeSelector />
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div class="w-full h-56 bg-emphasis flex items-center justify-center">
                <div class="p-8 w-3/4 h-5/6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div class="text-center md:text-left">
                        <h3 class="text-xl font-bold text-white">GABRIEL ESTRELA</h3>
                        <p class="text-sm text-gray-200 max-w-md">
                            A security enthusiast that started your career focusing in Web Applications
                        </p>
                    </div>

                    <div class="flex flex-col items-center md:items-end">
                        <h3 class="text-xl place-self-center font-bold text-white mb-2">SOCIAL</h3>
                        <div class="flex gap-4">
                            <a href="#" aria-label="LinkedIn">
                                <img src="/images/linkedin-ico.png" alt="LinkedIn" class="h-6 w-6" />
                            </a>
                            <a href="#" aria-label="GitHub">
                                <img src="/images/github-ico.png" alt="GitHub" class="h-6 w-6" />
                            </a>
                            <a href="#" aria-label="Mail">
                              <img src="/images/icons8-mail-50.png" alt="Twitter" class="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

useHead({
    titleTemplate: '%s - Gabriel Estrela'
})

</script>

<style>
body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>