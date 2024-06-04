<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="rounded-md size-8 flex items-center justify-center hover:bg-black-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
            fill="#191C1F"
          />
          <path
            d="M18 13.125C18.6213 13.125 19.125 12.6213 19.125 12C19.125 11.3787 18.6213 10.875 18 10.875C17.3787 10.875 16.875 11.3787 16.875 12C16.875 12.6213 17.3787 13.125 18 13.125Z"
            fill="#191C1F"
          />
          <path
            d="M6 13.125C6.62132 13.125 7.125 12.6213 7.125 12C7.125 11.3787 6.62132 10.875 6 10.875C5.37868 10.875 4.875 11.3787 4.875 12C4.875 12.6213 5.37868 13.125 6 13.125Z"
            fill="#191C1F"
          />
        </svg>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-black-10 rounded-md bg-white shadow ring-1 ring-black-5 focus:outline-none"
      >
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
