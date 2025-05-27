<template>
  <BlogPosts v-slot="{ posts }" :limit="numericLimit">
    <section class="bg-white dark:bg-gray-900 p-8 mt-8 rounded-lg shadow-lg animate-fade-in">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Latest Posts
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:bg-yellow-400 dark:hover:bg-purple-600 transition duration-300 shadow group"
        >
          <NuxtLink
            :to="post._path"
            class="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white"
          >
            {{ post.title }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </BlogPosts>
</template>


<script setup>
import { computed } from "vue";

const props = defineProps({
  limit: {
    type: [Number, String], 
    default: null
  }
});

const numericLimit = computed(() => ensureNumber(props.limit, 2));

function ensureNumber(value, defaultValue = null) {
  const number = Number(value);
  return isNaN(number) ? defaultValue : number;
}
</script>
