<script setup>
import LayoutSideBar from '@/layout/LayoutSideBar.vue'
import LayoutHeader from '@/layout/LayoutHeader.vue'

defineProps({
  breadcrumbList: Array
})
</script>

<template>
  <main class="layout">
    <LayoutSideBar />
    <section class="main--content">
      <LayoutHeader :breadcrumbListArray="breadcrumbList" />
      <div class="w-full h-full bg-bg-body overflow-y-auto py-4 bg-white1">
        <div class="max-w-6xl mx-auto px-2 h-full">
          <slot></slot>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.layout {
  @apply w-full flex h-dvh overflow-hidden items-stretch bg-white dark:bg-black-100;
}

.main--content {
  @apply w-full h-full flex flex-col;
}
</style>
