<template>
  <div class="category--details">
    <div class="py-2 px-3.5 space-y-2">
      <h4 class="text-base capitalize">Category Name</h4>
      <p class="text-sm dark:text-white-80 text-black-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id, quasi voluptates
        repellendus dolores veniam porro?
      </p>
    </div>
    <div class="py-2 px-3.5 space-y-2">
      <ul class="flex flex-wrap -space-x-2">
        <li>
          <RouterLink to="/" class="circle"></RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="circle"></RouterLink>
        </li>
      </ul>
    </div>
    <div class="py-2 px-3.5 space-y-2">
      <ul class="flex flex-wrap gap-2">
        <li>
          <RouterLink to="/" class="circle"></RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="circle"></RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.category--details {
  @apply min-w-96 max-w-96 divide-y divide-black-20 dark:divide-white-20;
}

.circle {
  @apply min-w-10 min-h-10 max-w-10 max-h-10 flex items-center justify-center border border-solid border-black-20 dark:border-white-20 rounded-full;
}
</style>
