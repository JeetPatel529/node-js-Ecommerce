<script setup>
import { apiHelper } from '@/helpers'
import { useAlertStore, useRecoverStore } from '@/stores'
import { ref } from 'vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ListFunWrapper from '@/components/ListFunWrapper.vue'
import List from '@/pages/category/components/List.vue'
import Form from '@/pages/category/components/Form.vue'
import Pagination from '@/components/Pagination.vue'
import DeleteModel from '@/components/DeleteModel.vue'
import RecoverModel from '@/components/RecoverModel.vue'

const formOpen = ref(false)
const deleteModal = ref(false)
const recoverModal = ref(false)
const categoryList = ref([])
const categoryItem = ref({})
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

function handleDeleteConfirmation(value) {
  if (value) {
    deleteModal.value = false
    deleteCategory()
  } else {
    deleteModal.value = false
  }
}

function prepareCategoryForDeletion(value) {
  categoryItem.value = value
  deleteModal.value = true
}

async function deleteCategory() {
  const form_data = new FormData()
  form_data.append('category_id', categoryItem.value.category_id)

  try {
    const response = await apiHelper('category-delete', form_data)
    if (response.success == 1) {
      loadCategoryList()
      recoverModal.value = true
      useRecoverStore().applyNewItemInRecover(
        categoryItem.value.category_id,
        categoryItem.value.category_name
      )
      useAlertStore().fooAlert(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}

async function toggleCategoryStatus(value) {
  const form_data = new FormData()
  form_data.append('category_id', value.category_id)

  try {
    const response = await apiHelper('category-status', form_data)
    if (response.success == 1) {
      loadCategoryList()
      useAlertStore().fooAlert(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}

loadCategoryList()

async function loadCategoryList() {
  try {
    const response = await apiHelper('category-list')
    if (response) {
      categoryList.value = response.data
      useAlertStore().fooAlert(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}

async function handle_req(status) {
  if (status) {
    const form_data = new FormData()
    form_data.append('category_id', useRecoverStore().recoverID)

    try {
      const response = await apiHelper('category-recover', form_data)
      if (response.success == 1) {
        loadCategoryList()
        recoverModal.value = false
        useAlertStore().fooAlert(response.message)
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    recoverModal.value = false
  }
}
</script>

<template>
  <LayoutWrapper :breadcrumbList="breadcrumb">
    <div class="space-y-6 h-full overflow-auto">
      <p class="text-base font-medium">Category List</p>
      <div class="space-y-4">
        <ListFunWrapper @addBtn="formOpen = !formOpen" />
        <div class="w-full">
          <List
            :categoryList="categoryList"
            @delete="prepareCategoryForDeletion"
            @status="toggleCategoryStatus"
          />
        </div>
        <div class="w-full flex items-center justify-end">
          <Pagination />
        </div>
      </div>
    </div>
    <DeleteModel
      :isOpen="deleteModal"
      :delete_item="categoryItem.category_name"
      @close="handleDeleteConfirmation"
    />
    <RecoverModel @click="handle_req" v-if="recoverModal" />
    <Form @close="closeForm" :isOpen="formOpen" />
  </LayoutWrapper>
</template>
