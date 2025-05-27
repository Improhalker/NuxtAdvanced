<template>
  <article>
 <section class="bg-gradient-to-br from-[#abf8ea] via-[#54306e] to-[#253342] dark:from-[#4a148c] dark:via-[#8d8df6] dark:to-[#1a237e] p-8 text-center h-[90vh] flex flex-col justify-center items-center 
         animate-gradient-slow bg-[length:200%_200%]">
      <h1 class="animate-slide-down text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-4">
         Welcome to my blog!
      </h1>

      <h2
        class="animate-slide-left text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-100 dark:text-white mb-4">
        Thoughts, tutorials and <span class="text-yellow-300 dark:text-accentHover">technical insights</span>
      </h2>

      <p class="animate-slide-right text-base sm:text-lg text-white dark:text-white font-medium max-w-xl mb-6">
        I write about web development, security, tools I love, and things I’m learning.
      </p>

      <NuxtLink to="blog/ai-hr"
        class="animate-fade-in dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white 
           bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded text-lg transition duration-300">
        Read the latest posts
      </NuxtLink>
    </section>
    <LatestBlogPosts limit="5" />
  </article>


</template>