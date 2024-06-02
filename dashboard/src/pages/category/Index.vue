<script setup>
import { ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ListFunWrapper from '@/components/ListFunWrapper.vue'
import List from '@/pages/category/components/List.vue'
import Form from '@/pages/category/components/Form.vue'
import Pagination from '@/components/Pagination.vue'

const formOpen = ref(false)
const breadcrumb = ref([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'category'
  }
])

function closeForm() {
  formOpen.value = false
}
</script>

<template>
  <LayoutWrapper :breadcrumbList="breadcrumb">
    <div class="space-y-6 h-full overflow-auto">
      <p class="text-base font-medium">Category List</p>
      <div class="space-y-4">
        <ListFunWrapper @addBtn="formOpen = !formOpen" />
        <div class="w-full">
          <List />
        </div>
        <div class="w-full flex items-center justify-end">
          <Pagination />
        </div>
      </div>
    </div>
    <Form @close="closeForm" :isOpen="formOpen" />
  </LayoutWrapper>
</template>
