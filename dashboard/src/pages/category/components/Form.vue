<script setup>
import { ref } from 'vue'
import { apiHelper } from '@/helpers'
import ModalLayout from '@/components/ModalLayout.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const formData = ref({
  image: null,
  backgroundImage: null,
  name: '',
  description: ''
})

const isFormSubmitted = ref(false)
const btnLoader = ref(false)

function closeModal(status) {
  emit('close', status || null)
}

async function handleSubmit() {
  isFormSubmitted.value = true
  btnLoader.value = true
  const form_data = new FormData()
  form_data.append('category_img', formData.value.image)
  form_data.append('category_bg_img', formData.value.backgroundImage)
  form_data.append('category_name', formData.value.name)
  form_data.append('category_description', formData.value.description)

  try {
    const response = await apiHelper('create-category', form_data)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
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
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.backgroundImage }">
            <label>Background Image*</label>
            <p class="placeholder--text">Choose File</p>
            <input
              type="file"
              class="input"
              @change="(e) => (formData.backgroundImage = e.target.files[0])"
            />
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.backgroundImage">
            Background Image is required
          </p>
        </div>
        <div class="space-y-1">
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.name }">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Enter category name"
              class="input"
              v-model="formData.name"
            />
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.name">
            Category name is required
          </p>
        </div>
        <div class="space-y-1">
          <div class="input-group" :class="{ error: isFormSubmitted && !formData.description }">
            <label>Description*</label>
            <textarea
              class="input"
              placeholder="Enter category description"
              v-model="formData.description"
            ></textarea>
          </div>
          <p class="error-message" v-if="isFormSubmitted && !formData.description">
            Category description is required
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
