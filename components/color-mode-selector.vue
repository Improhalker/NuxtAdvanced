<template>
    <div class="flex space-x-2 items-center">
      <button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false"
        class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base">
        <LucideSunMoon v-if="colorMode.preference === 'light'" />
        <LucideMoon :color="colorMode.preference === 'light' ? 'black' : 'white'" v-else />
      </button>
    </div>
  </template>
  
  <script setup>
  const showNextModelLabel = ref(false)
  const colorMode = useColorMode()
  
  const modes = [ 
    'light', 
    'dark' 
  ]
  
  const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
  
    if (currentModeIndex + 1 === modes.length) {
      nextModeIndex = 0
    } else {
      nextModeIndex = currentModeIndex + 1
    }
  
    return modes[nextModeIndex]
  })

  const toggleMode = () => colorMode.preference = nextMode.value
  </script>