<script setup>
import OptionWrapper from '@/components/OptionWrapper.vue'
</script>

<template>
  <div class="w-full bg-white rounded-lg border border-solid border-black-20">
    <div class="list---row head">
      <div class="pName">
        <p>Product Name</p>
      </div>
      <div class="tVisitor">
        <p>Total Visitor</p>
      </div>
      <div class="oPrice">
        <p>Origin Price</p>
      </div>
      <div class="sPrice">
        <p>Selling Price</p>
      </div>
      <div class="cCategory">
        <p>Connected Category</p>
      </div>
      <div class="status"></div>
      <div class="options"></div>
    </div>
    <div class="list---row">
      <div class="pName">
        <p>Product Name</p>
      </div>
      <div class="tVisitor">
        <p>Total Visitor</p>
      </div>
      <div class="oPrice">
        <p>Origin Price</p>
      </div>
      <div class="sPrice">
        <p>Selling Price</p>
      </div>
      <div class="cCategory">
        <p>Connected Category</p>
      </div>
      <div class="status">
        <button class="status--btn disable">disable</button>
      </div>
      <div class="options">
        <OptionWrapper>
          <button class="options--btn">
            <div class="flex items-center gap-1.5">
              <p>Edit</p>
            </div>
          </button>
          <button class="options--btn">
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
  @apply flex items-center w-full py-1.5 px-2.5 border-b border-solid border-black-5;
}

.list---row:nth-last-child(1) {
  @apply border-0;
}

.list---row.head p {
  @apply text-sm text-black-80;
}

.pName {
  @apply min-w-[20%] max-w-[20%] text-start;
}

.tVisitor {
  @apply min-w-[10%] max-w-[10%];
}

.oPrice {
  @apply min-w-[10%] max-w-[10%];
}

.sPrice {
  @apply min-w-[10%] max-w-[10%];
}

.cCategory {
  @apply min-w-[20%] max-w-[20%];
}

.tItem {
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
