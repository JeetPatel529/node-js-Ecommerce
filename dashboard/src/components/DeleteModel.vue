<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps({
  delete_item: String,
  isOpen: Boolean
})

const emit = defineEmits(['close'])

function closeModal(status) {
  emit('close', status)
}
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black-80 backdrop-blur-sm" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="space-y-8">
                <div class="space-y-1.5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-black-100">
                    Delete {{ props.delete_item }}
                  </DialogTitle>
                  <p class="text-sm text-gray-500">
                    Are you sure you want to delete {{ props.delete_item }} ?
                  </p>
                </div>
                <div class="flex w-full items-center justify-end gap-2.5">
                  <button class="delete--btn" @click="closeModal">Cancel</button>
                  <button class="delete--btn save" @click="closeModal(1)" tabindex="1">
                    Yes, delete
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
