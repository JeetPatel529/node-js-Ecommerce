<script setup>
const props = defineProps({
  productData: Array,
});
</script>

<template>
  <li
    class="product-card"
    v-for="(item, index) in props.productData"
    :key="index"
  >
    <router-link to="/">
      <img :src="item.categor_image" />
      <div class="product-details">
        <h5>{{ item.categor_name }}</h5>
        <!-- <p>Price ${{ item }}</p> -->
      </div>
    </router-link>
  </li>
</template>
