<script setup>
import { ref } from 'vue'
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

function closeModal(status) {
  if (status) {
    emit('close', status)
  } else {
    emit('close')
  }
}

async function handleSubmit() {
  try {
    const form = new FormData()
    form.append('image', formData.value.image)
    form.append('backgroundImage', formData.value.backgroundImage)
    form.append('name', formData.value.name)
    form.append('description', formData.value.description)

    const response = await fetch('your-api-endpoint', {
      method: 'POST',
      body: form
    })

    if (!response.ok) {
      throw new Error('Failed to save data')
    }

    closeModal(true)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <ModalLayout :isOpen="isOpen" @close="closeModal">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div class="space-y-2.5">
        <div class="input-group">
          <label>Image*</label>
          <p class="placeholder--text">Choose File</p>
          <input type="file" class="input" @change="(e) => (formData.image = e.target.files[0])" />
        </div>
        <div class="input-group">
          <label>Background Image*</label>
          <p class="placeholder--text">Choose File</p>
          <input
            type="file"
            class="input"
            @change="(e) => (formData.backgroundImage = e.target.files[0])"
          />
        </div>
        <div class="input-group">
          <label>Name*</label>
          <input
            type="text"
            placeholder="Enter category name"
            class="input"
            v-model="formData.name"
          />
        </div>
        <div class="input-group">
          <label>Description*</label>
          <textarea
            class="input"
            placeholder="Enter category description"
            v-model="formData.description"
          ></textarea>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-4 px-2.5">
        <button type="button" class="form--btn" @click="closeModal">Cancel</button>
        <button type="submit" class="form--btn save">Save</button>
      </div>
    </form>
  </ModalLayout>
</template>
