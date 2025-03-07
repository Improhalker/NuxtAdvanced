<template>
    <div>
      <h1>Rota Atual</h1>
      <p>Caminho: {{ route.path }}</p>
      <p>Parâmetros: {{ route.params }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute() // Pegando o objeto da rota
  console.log(route)
  </script>
  