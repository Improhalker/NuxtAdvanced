<template>
    <article>
        <section class="bg-gradient-to-br from-[#abf8ea] via-[#54306e] to-[#253342] dark:from-[#4a148c] dark:via-[#8d8df6] dark:to-[#1a237e] p-8 text-center h-[90vh] flex flex-col justify-center items-center 
         animate-gradient-slow bg-[length:200%_200%]">
            <h1 class="animate-slide-down text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-100 mb-6">
                My Projects
            </h1>
            <h2 class="animate-slide-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 dark:text-gray-100 mb-6">
                Explore my work, <span class="text-yellow-400 dark:text-accentHover">Discover my passion</span>
            </h2>
            <p class="animate-slide-right text-lg text-white dark:text-gray-100 font-semibold mb-8">
                A showcase of my recent projects and contributions.
            </p>
        </section>
        <section class="animate-fade-in bg-white dark:bg-gray-800 p-8 mt-8 text-center rounded-lg shadow-lg">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">PROJECTS</h1>
            <div class="w-16 h-1 dark:bg-purple-600 bg-yellow-400 mx-auto mb-4 rounded-sm"></div>
            <ContentDoc path="/projects"/>
        </section>
    </article>
</template>