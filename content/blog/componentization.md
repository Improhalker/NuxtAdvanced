---
description: Reflection on how componentization in Nuxt 3 goes beyond code reuse, focusing on clarity, maintainability, and scalability.
head:
  meta:
    - name: 'og:image'
      content: /images/vue-logo.png
publishedAt: 2025-05-09 17:30
toc: true
---

# O que Nuxt 3 me ensinou sobre componentização

Sinceramente, me vejo no dever de compartilhar o quanto o **Nuxt 3**, nesses últimos meses, me ensinou na prática que **componentização não é sobre reaproveitar código**, mas sobre **clareza, manutenção e escala**.

## O início: tudo em um único componente

Lembro que, no começo, tudo em um único componente era simplesmente incrível — funcionava!  
Mas bastaram algumas semanas e novas features para eu realmente perceber o quanto aquilo deveria ter sido pensado de outra forma.

## O colapso da abstração infinita

Foi aí que eu entrei num complexo de abstração simplesmente **INFINITA**.  
Tudo deveria ser abstraído... mas quanto mais abstraído, mais manipulações de componentes eu queria.  
E no fim? Eu criava um *outro* componente só para atender minhas expectativas.

## O dilema da abstração

Estive debatendo esse tópico com alguns colegas e a principal pergunta foi:

> **"Mas por que essa crise de abstração é tão comum?"**

E a resposta é simples:

- **Abstrair demais** e criar componentes pequenos e específicos pode gerar **mais confusão do que clareza**.
- E **abstrair de menos** e deixar tudo em um componente mágico, cheio de props, torna a manutenção **mega dolorosa**.  
  E o código? Um verdadeiro monolito `.vue` (rs).

## Padrões no caos

Hoje, com mais experiência, consigo enxergar **padrões no caos** e tomar decisões muito mais conscientes:

> *"Isso aqui merece mesmo um componente?"*  
> *"Vale mesmo extrair essa lógica?"*  
> *"Como é a periodicidade, repetição e variações do mesmo componente no Figma?"*

## Exemplo prático

### Excesso de componentização: `Megazord.vue` (com mil props)

```vue
<template>
  <MegazordComponent
    :title="title"
    :image="image"
    :description="description"
    :cta-text="ctaText"
    :show-rating="showRating"
    :border="border"
    :icon="icon"
    :shadow="shadow"
  />
</template>
```

### Abordagem alternativa e mais clara

```vue
<template>
  <div class="card">
    <img :src="product.image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <button>Ver mais</button>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>
```
