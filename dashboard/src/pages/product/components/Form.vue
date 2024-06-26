<script setup>
import { ref } from 'vue'
import { apiHelper } from '@/helpers'
import ModalLayout from '@/components/ModalLayout.vue'
import Combobox from '@/components/Combobox.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const people = ref([
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
])

const btnLoader = ref(false)
const isFormSubmitted = ref(false)
const query = ref('')

function updateSelected(newSelected) {
  formData.value.selectedCategory = newSelected
}

function updateQuery(newQuery) {
  query.value = newQuery
}

const formData = ref({
  image: null,
  originalPrice: '',
  sellingPrice: null,
  selectedCategory: [],
  description: ''
})

function closeModal(status) {
  emit('close', status || null)
}

async function handleSubmit() {
  isFormSubmitted.value = true
  btnLoader.value = true
  const form_data = new FormData()
  form_data.append('product_name', formData.value.name)
  form_data.append('product_description', formData.value.description)
  form_data.append('product_original_price', formData.value.originalPrice)
  form_data.append('product_selling_price', formData.value.sellingPrice)
  form_data.append('connected_category', formData.value.selectedCategory.join(','))
  form_data.append('product_img', formData.value.image)

  const response = await apiHelper('create-product', form_data)
  console.log(response)
}
</script>

<template>
  <ModalLayout :isOpen="isOpen" @close="closeModal">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div class="space-y-2.5">
        <div class="space-y-1">
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.image }">
            <label>Image*</label>
            <p class="placeholder--text">Choose File</p>
            <input
              type="file"
              class="input"
              @change="(e) => (formData.image = e.target.files[0])"
            />
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.image">Image is required</p>
        </div>
        <div class="space-y-1">
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.name }">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Enter Product name"
              class="input"
              v-model="formData.name"
            />
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.name">
            Background Image is required
          </p>
        </div>
        <div class="space-y-1">
          <div
            class="input-group"
            :class="{ error: isFormSubmitted && !formData.selectedCategory }"
          >
            <label>Choose Category*</label>
            <Combobox
              :people="people"
              :initialSelected="selectedPeople"
              :initialQuery="query"
              @update:selected="updateSelected"
              @update:query="updateQuery"
            />
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.selectedCategory">
            Background Image is required
          </p>
        </div>
        <div class="w-full grid grid-cols-2 gap-2.5">
          <div class="space-y-1">
            <div class="input-group" :class="{ error: isFormSubmitted && !formData.originalPrice }">
              <input
                type="number"
                placeholder="Product Origin Price*"
                class="input"
                v-model="formData.originalPrice"
              />
            </div>
            <p class="error-message" v-if="isFormSubmitted && !formData.originalPrice">
              Background Image is required
            </p>
          </div>
          <div class="space-y-1">
            <div class="input-group" :class="{ error: isFormSubmitted && !formData.sellingPrice }">
              <input
                type="text"
                placeholder="Product Selling Price"
                class="input"
                v-model="formData.sellingPrice"
              />
            </div>
            <p class="error-message" v-if="isFormSubmitted && !formData.sellingPrice">
              Background Image is required
            </p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.description }">
            <label>Description*</label>
            <textarea
              class="input"
              placeholder="Enter Product description"
              v-model="formData.description"
            ></textarea>
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.description">
            Background Image is required
          </p>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-4 px-2.5">
        <button type="button" class="form--btn" @click="closeModal">Cancel</button>
        <button type="submit" class="form--btn save" :disabled="btnLoader">
          {{ btnLoader ? 'Wait A Minute...' : 'Save' }}
        </button>
      </div>
    </form>
  </ModalLayout>
</template>
