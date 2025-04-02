<template>
  <BlogPosts v-slot="{ posts }" :limit="numericLimit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
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
