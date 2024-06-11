<script setup>
import { ref, computed, watch, toRefs } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'

const props = defineProps({
  people: {
    type: Array,
    required: true
  },
  initialSelected: {
    type: Array,
    required: false
  },
  initialQuery: {
    type: String,
    default: ''
  }
})

const { people, initialSelected, initialQuery } = toRefs(props)

const selected = ref([...initialSelected.value] || '')
const query = ref(initialQuery.value)

const emit = defineEmits(['update:selected', 'update:query'])

watch(selected, (newSelected) => {
  emit('update:selected', newSelected)
})

watch(query, (newQuery) => {
  emit('update:query', newQuery)
})

const filteredPeople = computed(() =>
  query.value === ''
    ? people.value
    : people.value.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>

<template>
  <Combobox v-model="selected" multiple>
    <div class="relative">
      <ul class="flex flex-wrap gap-1 mb-2" v-if="selected.length > 0">
        <li class="selected-tag" v-for="person in selected" :key="person.id">
          {{ person.name }}
          <button @click="selected.splice(selected.indexOf(person), 1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.75689 6.69672C7.464 6.40383 6.98913 6.40383 6.69623 6.69672C6.40334 6.98961 6.40334 7.46449 6.69623 7.75738L10.9389 12.0001L6.69629 16.2427C6.4034 16.5356 6.4034 17.0104 6.69629 17.3033C6.98918 17.5962 7.46406 17.5962 7.75695 17.3033L11.9996 13.0607L16.2422 17.3033C16.5351 17.5962 17.0099 17.5962 17.3028 17.3033C17.5957 17.0104 17.5957 16.5356 17.3028 16.2427L13.0602 12.0001L17.3029 7.75738C17.5958 7.46449 17.5958 6.98962 17.3029 6.69672C17.01 6.40383 16.5351 6.40383 16.2422 6.69672L11.9996 10.9394L7.75689 6.69672Z"
                fill="#FFF"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div class="w-full cursor-default overflow-hidden text-left">
        <div class="flex items-center w-full gap-1.5">
          <ComboboxInput
            class="input"
            placeholder="Enter Category Name"
            :displayValue="(person) => person.name"
            @input="query = $event.target.value"
          />
          <ComboboxButton class="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 9L12 16.5L4.5 9"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ComboboxButton>
        </div>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="absolute mt-1 max-h-60 w-full z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <div
            v-if="filteredPeople.length === 0 && query !== ''"
            class="relative cursor-default select-none px-4 py-2 text-gray-700"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="person in filteredPeople"
            as="template"
            :key="person.id"
            :value="person"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4"
              :class="{
                ' bg-black-20 text-white': active,
                'text-gray-900': !active
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ person.name }}
              </span>
              <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 7.875L5.625 16.125L1.5 12"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5004 7.875L14.2504 16.125L12.0566 13.9313"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<style scoped>
.selected-tag {
  @apply text-sm bg-black-80 py-1 px-2 rounded-md text-white flex items-center gap-1;
}
</style>
