<template>
  <nav class="grid grid-cols-3">
    <div>
      <a :href="preUrl" v-if="preUrl">Chương trước</a>
    </div>
    <div class="text-center">
      <a href="/toc">Mục lục</a>
    </div>
    <div class="text-right">
      <a :href="nextUrl" v-if="nextUrl">Chương sau</a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps<{
  preUrl: string,
  nextUrl: string,
}>()
</script>