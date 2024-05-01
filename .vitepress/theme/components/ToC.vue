<template>
  <h1>Table of conent</h1>
  <ul>
    <li v-for="(chapter, i) in chapters" :key="i">
      <a :href="chapter.url">{{ chapter.frontmatter.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ContentData } from "vitepress"

const props = defineProps<{ chapters: ContentData[] }>()
</script>
