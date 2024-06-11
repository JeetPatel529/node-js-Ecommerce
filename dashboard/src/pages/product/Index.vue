<script setup>
import { ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ListFunWrapper from '@/components/ListFunWrapper.vue'
import List from '@/pages/product/components/List.vue'
import Form from '@/pages/product/components/Form.vue'
import Pagination from '@/components/Pagination.vue'
import DeleteModel from '@/components/DeleteModel.vue'

const formOpen = ref(false)
const deleteModal = ref(false)
const breadcrumb = ref([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products'
  }
])

function closeForm() {
  formOpen.value = false
}

function handleDelete(value) {
  if (value) {
    deleteModal.value = false
  } else {
    deleteModal.value = false
  }
}
</script>

<template>
  <LayoutWrapper :breadcrumbList="breadcrumb">
    <div class="space-y-6 h-full overflow-y-auto">
      <p class="text-base font-medium">Products List</p>
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
    <DeleteModel :isOpen="deleteModal" delete_item="delete this item" @close="handleDelete" />
    <Form @close="closeForm" :isOpen="formOpen" />
  </LayoutWrapper>
</template>
