<template>
    <body>
       
        <h1>Bem vindo</h1>
    </body>
</template>

<script setup>
        useSeoMeta({
        title: 'My page',
        description: '[description]',
        ogTitle: '[og:title]',
        ogDescription: '[og:description]',
        ogImage: '[og:image]',
        ogUrl: '[og:url]',
        twitterTitle: '[twitter:title]',
        twitterDescription: '[twitter:description]',
        twitterImage: '[twitter:image]',
        twitterCard: 'summary'
        })

        useHead({
        htmlAttrs: {
            lang: 'en'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
            }
        ]
        })

</script>