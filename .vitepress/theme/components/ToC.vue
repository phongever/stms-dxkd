<template>
  <h1>Mục lục</h1>
  <ul>
    <li v-for="(chapter, i) in chapters" :key="i">
      <a :href="chapter.url">{{ chapter.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ContentData } from "vitepress"

const props = defineProps<{ chapters: ContentData[] }>()
</script>
