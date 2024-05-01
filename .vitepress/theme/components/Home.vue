<template>
  <h1 class="md:text-5xl md:leading-tight">{{ title }}</h1>
  <h2>{{ author }}</h2>
</template>

<script lang="ts" setup>

const props = defineProps(["title", "author"])
</script>