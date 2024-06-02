<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
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
              class="w-full max-w-lg transform overflow-hidden text-left align-middle transition-all space-y-6"
            >
              <div class="flex items-center w-full justify-end">
                <button
                  @click="closeModal"
                  class="size-8 flex items-center justify-center cursor-pointer bg-black-40 rounded-lg outline-none hover:bg-black-100 focus:bg-black-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.75689 6.69672C7.464 6.40383 6.98913 6.40383 6.69623 6.69672C6.40334 6.98961 6.40334 7.46449 6.69623 7.75738L10.9389 12.0001L6.69629 16.2427C6.4034 16.5356 6.4034 17.0104 6.69629 17.3033C6.98918 17.5962 7.46406 17.5962 7.75695 17.3033L11.9996 13.0607L16.2422 17.3033C16.5351 17.5962 17.0099 17.5962 17.3028 17.3033C17.5957 17.0104 17.5957 16.5356 17.3028 16.2427L13.0602 12.0001L17.3029 7.75738C17.5958 7.46449 17.5958 6.98962 17.3029 6.69672C17.01 6.40383 16.5351 6.40383 16.2422 6.69672L11.9996 10.9394L7.75689 6.69672Z"
                      fill="#FFF"
                    />
                  </svg>
                </button>
              </div>
              <div class="rounded-2xl bg-white p-6 overflow-hidden">
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
