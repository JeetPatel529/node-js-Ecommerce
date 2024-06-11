<script setup>
import { ref } from 'vue'
import { apihelper } from '@/helpers'
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

const selectedPeople = ref([])
const query = ref('')

function updateSelected(newSelected) {
  selectedPeople.value = newSelected
  console.log(selectedPeople)
}

function updateQuery(newQuery) {
  query.value = newQuery
}

const formData = ref({
  image: null,
  backgroundImage: null,
  name: '',
  description: ''
})

function closeModal(status) {
  emit('close', status || null)
}

async function handleSubmit() {
  const form_data = new FormData()
  form_data.append('category_img', formData.value.image)
  form_data.append('category_bg_img', formData.value.backgroundImage)
  form_data.append('category_name', formData.value.name)
  form_data.append('category_description', formData.value.description)
  const response = await apihelper('add-category', form_data)
  console.log(response)
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
          <label>Name*</label>
          <input
            type="text"
            placeholder="Enter Product name"
            class="input"
            v-model="formData.name"
          />
        </div>
        <div class="input-group">
          <label>Choose Category*</label>
          <Combobox
            :people="people"
            :initialSelected="selectedPeople"
            :initialQuery="query"
            @update:selected="updateSelected"
            @update:query="updateQuery"
          />
        </div>
        <div class="w-full grid grid-cols-2 gap-2.5">
          <div class="input-group">
            <input
              type="number"
              placeholder="Product Origin Price*"
              class="input"
              v-model="formData.name"
            />
          </div>
          <div class="input-group">
            <input
              type="text"
              placeholder="Product Selling Price"
              class="input"
              v-model="formData.name"
            />
          </div>
        </div>
        <div class="input-group">
          <label>Description*</label>
          <textarea
            class="input"
            placeholder="Enter Product description"
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