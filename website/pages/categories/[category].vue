<script setup>
import { ref } from "vue";

const categoriesList = ref([
  {
    categor_id: "",
    categor_name: "Landscape Painting",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/landscape-painting.jpg",
    categor_bg_image: "",
  },
  {
    categor_id: "",
    categor_name: "Color Field Art",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/color-field.jpg",
    categor_bg_image: "",
  },
  {
    categor_id: "",
    categor_name: "Fine Art",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/fine-art.jpg",
    categor_bg_image: "",
  },
  {
    categor_id: "",
    categor_name: "Digital Art",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/digit-art.jpg",
    categor_bg_image: "",
  },
  {
    categor_id: "",
    categor_name: "Abstract expressionism Art",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/abstract-expressionism-art.jpg",
    categor_bg_image: "",
  },
  {
    categor_id: "",
    categor_name: "Portrait painting",
    categor_image:
      "https://jeetpatel529.github.io/eCommerceTheme/assets/img/portrait-painting.jpg",
    categor_bg_image: "",
  },
]);
</script>

<template>
  <CategoriesSection>
    <ul
      class="product-list-grid"
      :class="{ 'no-data_class': categoriesList.length === 0 }"
    >
      <template v-if="categoriesList.length === 0">
        <li :class="{ 'no-data-contain_class': categoriesList.length === 0 }">
          <h2>Oops!</h2>
          <router-link to="/categories" class="button"
            >More Category</router-link
          >
        </li>
      </template>
      <template v-else>
        <ProductBox
          :productData="categoriesList" />
      </template>
    </ul>
  </CategoriesSection>
</template>
