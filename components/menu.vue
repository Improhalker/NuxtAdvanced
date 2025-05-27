<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-dark:bg-white">Gabriel.dev</NuxtLink>

            <!-- Mobile toggle -->
            <button @click="toggleMenu"
                class="md:hidden z-50 relative w-10 h-12 flex flex-col justify-center items-center space-y-1">
                <span :class="[
                    'block h-1 w-6 bg-black dark:bg-white transition-transform duration-300',
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                ]"></span>
                <span :class="[
                    'block h-1 w-6 bg-black dark:bg-white transition-opacity duration-300',
                    isMenuOpen ? 'opacity-0' : ''
                ]"></span>
                <span :class="[
                    'block h-1 w-6 bg-black dark:bg-white transition-transform duration-300',
                    isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                ]"></span>
            </button>

            <!-- Desktop menu -->
            <ul class="hidden md:flex space-x-6 text-lg text-primaryText dark:text-white">
                <li>
                    <NuxtLink to="/" class="hover:text-accent transition">Main</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="hover:text-accent transition">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects" class="hover:text-accent transition">Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog" class="hover:text-accent transition">Blog</NuxtLink>
                </li>
                <li>
                    <ColorModeSelector />
                </li>
            </ul>
        </div>

        <!-- Mobile menu overlay -->
        <transition name="fade-slide">
            <ul v-if="isMenuOpen"
                class="fixed inset-0 bg-gray-300 dark:bg-gray-700 text-primaryText dark:text-white flex flex-col items-center justify-center space-y-6 text-2xl z-40 w-screen h-screen overflow-hidden">
                <li>
                    <NuxtLink to="/" @click="closeMenu" class="hover:text-accent transition">Main</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" @click="closeMenu" class="hover:text-accent transition">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects" @click="closeMenu" class="hover:text-accent transition">Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog" @click="closeMenu" class="hover:text-accent transition">Blog</NuxtLink>
                </li>
                <li>
                    <ColorModeSelector />
                </li>
            </ul>
        </transition>
    </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
    isMenuOpen.value = false
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
