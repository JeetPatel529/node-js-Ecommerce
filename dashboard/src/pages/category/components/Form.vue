<script setup>
import ModalLayout from '@/components/ModalLayout.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

function closeModal(status) {
  if (status) {
    emit('close', status)
  } else {
    emit('close')
  }
}
</script>

<template>
  <ModalLayout :isOpen="isOpen" @close="closeModal">
    <form class="space-y-6">
      <div class="space-y-2.5">
        <div class="input-group">
          <label>Name*</label>
          <input type="text" placeholder="Enter category name" class="input" />
        </div>
        <div class="input-group">
          <label>description*</label>
          <textarea class="input" placeholder="Enter category description"></textarea>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-4 px-2.5">
        <button type="button" class="form--btn" @close="closeModal">Cancel</button>
        <button type="submit" class="form--btn save">Save</button>
      </div>
    </form>
  </ModalLayout>
</template>
