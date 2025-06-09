<template>
  <article
    class="min-h-[75vh] p-6 mt-10 prose dark:prose-invert max-w-6xl mx-auto prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
        <p>This blog could not be found </p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="hidden md:col-span-2 mt-20  md:block not-prose" v-if="doc.toc">
            <aside class="sticky top-20">
              <div class="font-semibold mb-2">
                Navegação
              </div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
    <!-- Botão de voltar no fim da página -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center px-4 py-2 mt-10 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
    >
     Voltar para listagem
    </NuxtLink>
  </article>
</template>

<script setup>
const activeId = ref(null)

onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3')

  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>

<style>
html {
  height: 100vh;
}
</style>