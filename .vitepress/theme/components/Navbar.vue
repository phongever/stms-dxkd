<template>
  <nav class="grid grid-cols-3">
    <div>
      <a :href="preUrl" v-if="preUrl">Previous chapter</a>
    </div>
    <div class="text-center">
      <a href="/toc">Table of content</a>
    </div>
    <div class="text-right">
      <a :href="nextUrl" v-if="nextUrl">Next chapter</a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  preUrl: String,
  nextUrl: String,
})
</script>