<script lang="ts" setup>
import { Route, VitePressData, useData, useRoute } from 'vitepress'
import { computed, ComputedRef, watch } from "vue"
import NotFound from './components/NotFound.vue';
import Home from './components/Home.vue';
import ToC from "./components/ToC.vue"
import Navbar from './components/Navbar.vue';
import Chapter from './components/Chapter.vue';
import { LAYOUT } from "./index.i"
import { data as homeData } from "./data/home.data"
import { data as chaptersData } from "./data/chapters.data.mts"

const { page, frontmatter }: VitePressData = useData()
const route: Route = useRoute()

const preNextUrl: ComputedRef<{
  preUrl: string | null,
  nextUrl: string | null,
} | undefined> = computed(() => {
  if (page.value.isNotFound) return { preUrl: null, nextUrl: null }

  switch (frontmatter.value.layout) {
    case LAYOUT.HOME:
      return { preUrl: null, nextUrl: "/toc" }
    case LAYOUT.TOC:
      return { preUrl: "/", nextUrl: chaptersData[0].url }
    default:
      if (route.path === chaptersData[0].url) return { preUrl: "/toc", nextUrl: chaptersData[1].url }

      if (route.path === chaptersData[chaptersData.length - 1].url) return { preUrl: chaptersData[chaptersData.length - 2].url, nextUrl: null }

      const currentPageIndex = chaptersData.findIndex(chapter => chapter.url === route.path)

      return { preUrl: chaptersData[currentPageIndex - 1].url, nextUrl: chaptersData[currentPageIndex + 1].url }
  }
})
</script>

<template>
  <div class="layout bg-slate-400 min-h-screen p-5 md:p-10">
    <div class="container max-w-screen-md  mx-auto">
      <Navbar v-bind="preNextUrl" />
      <div
        class="paper min-h-screen bg-white border border-slate-500 shadow-xl shadow-gray-500 py-10 px-8 md:py-20 md:px-16 my-4">
        <NotFound v-if="page.isNotFound" />
        <Home v-else-if="frontmatter.layout === LAYOUT.HOME" v-bind="homeData" />
        <ToC v-else-if="frontmatter.layout === LAYOUT.TOC" :chapters="chaptersData" />
        <Chapter v-else :title="frontmatter.title" />
      </div>
      <Navbar v-bind="preNextUrl" />
    </div>
  </div>
</template>
