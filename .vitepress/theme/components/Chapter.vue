<template>
  <h1>{{ title }}</h1>
  <Content />
</template>

<script lang="ts" setup>
import { Content } from 'vitepress';

const props = defineProps<{ title: string }>()
</script>