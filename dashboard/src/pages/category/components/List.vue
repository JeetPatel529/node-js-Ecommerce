<script setup>
import OptionWrapper from '@/components/OptionWrapper.vue'
import CategoryDetails from '@/pages/category/components/CategoryDetails.vue'

const props = defineProps({
  categoryList: Array
})

const emit = defineEmits(['delete', 'status'])

function handleDelete(value) {
  emit('delete', value)
}

function handleStatus(value) {
  emit('status', value)
}
</script>

<template>
  <div
    class="w-full bg-white dark:bg-black-100 rounded-lg border border-solid border-black-20 dark:border-white-20"
  >
    <div class="list---row head">
      <div class="cName">
        <p>Category Name</p>
      </div>
      <div class="tPro">
        <p>Total Pro.</p>
      </div>
      <div class="tVis">
        <p>Total Visitor</p>
      </div>
      <div class="status"></div>
      <div class="options"></div>
    </div>
    <div class="list---row" v-for="(item, index) in props.categoryList" :key="index">
      <VDropdown class="cName">
        <p>{{ item.category_name }}</p>
        <template #popper>
          <CategoryDetails />
        </template>
      </VDropdown>
      <div class="tPro">
        <p>{{ item.category_total_item }}</p>
      </div>
      <div class="tVis">
        <p>{{ item.category_visitor }}</p>
      </div>
      <div class="status">
        <button class="status--btn enable" v-if="item.category_status" @click="handleStatus(item)">
          enable
        </button>
        <button class="status--btn disable" v-else @click="handleStatus(item)">disable</button>
      </div>
      <div class="options">
        <OptionWrapper>
          <button class="options--btn">
            <div class="flex items-center gap-1.5">
              <p>Edit</p>
            </div>
          </button>
          <button class="options--btn" @click="handleDelete(item)">
            <div class="flex items-center gap-1.5">
              <p>Delete</p>
            </div>
          </button>
        </OptionWrapper>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list---row {
  @apply flex items-center w-full py-1.5 px-2.5 border-b border-solid border-black-5 dark:border-white-20;
}

.list---row:nth-last-child(1) {
  @apply border-0;
}

.list---row.head p {
  @apply text-sm text-black-80 dark:text-white-80;
}

.cName {
  @apply min-w-[25%] max-w-[25%];
}

.tPro {
  @apply min-w-[20%] max-w-[20%];
}

.tVis {
  @apply min-w-[25%] max-w-[25%];
}

.status {
  @apply min-w-[10%] max-w-[10%];
}

.options {
  @apply min-w-[20%] max-w-[20%] text-end pr-4;
}

.status--btn {
  @apply rounded-full px-3.5 py-0.5 text-sm capitalize;
}

.status--btn.enable {
  @apply bg-green-600 bg-opacity-50;
}

.status--btn.disable {
  @apply bg-gray-600 bg-opacity-50;
}
</style>
