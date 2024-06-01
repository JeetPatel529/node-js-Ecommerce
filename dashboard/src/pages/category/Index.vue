<script setup>
import { ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ListFunWrapper from '@/components/ListFunWrapper.vue'
import Pagination from '@/components/Pagination.vue'

const breadcrumb = ref([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'category'
  }
])
</script>

<template>
  <LayoutWrapper :breadcrumbList="breadcrumb">
    <div class="space-y-6">
      <p class="text-base font-medium">Category List</p>
      <div class="space-y-4">
        <ListFunWrapper />
        <div></div>
        <div class="w-full flex items-center justify-end">
          <Pagination />
        </div>
      </div>
    </div>
  </LayoutWrapper>
</template>
