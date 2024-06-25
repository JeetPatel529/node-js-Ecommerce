<script setup>
import { useRecoverStore } from '@/stores'

const emit = defineEmits(['handle_req'])

function closeModel(status) {
  if (status == 1) {
    emit('handle_req', status)
  } else {
    emit('handle_req')
  }
}
</script>

<template>
  <div class="fixed left-0 bottom-0 flex z-[99] items-end justify-start p-6">
    <div class="w-full max-w-sm">
      <div
        class="w-full mx-auto mt-1.5 overflow-hidden border border-solid border-white-20 bg-black-100 px-3.5 py-4 rounded-lg shadow-md"
      >
        <div class="space-y-6">
          <div class="space-y-1">
            <h5 class="text-base font-medium leading-6 text-black-100 dark:text-white">
              Recover Deleted {{ useRecoverStore().recoverItemName || 'Item' }}
            </h5>
            <p class="text-sm text-gray-500">
              The item has been moved to the trash. Would you like to recover it?
            </p>
          </div>
          <div class="flex items-center justify-end gap-2.5 w-full">
            <button
              @click="closeModel"
              class="text-sm rounded-full px-3.5 py-1 border border-solid dark:border-white-20"
            >
              Cancel
            </button>
            <button
              @click="closeModel(1)"
              class="text-sm rounded-full px-3.5 py-1 dark:bg-white-10 bg-black-10 border border-solid dark:border-white-20"
            >
              Recover
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
