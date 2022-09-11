<script setup>
import { useNuxtApp } from 'nuxt/app';
let hero = {}
const { $contentful } = useNuxtApp()
const entries = await $contentful.getEntries({
  'content_type': 'hero',
});
hero = entries.items[0];
console.log(hero)


</script>
<template>
  <div>
    <p>here is the content from contentful:</p>
    <p> {{hero.fields.heading}}</p>
    <p> {{hero.fields.subheading}}</p>
    <img :src="hero.fields.heroImage.fields.file.url" />
  </div>
</template>