<script setup>
const props = defineProps({
  categoryList: Array,
});
</script>

<template>
  <li
    class="shop-card-category"
    v-for="(item, index) in props.categoryList"
    :key="index"
  >
    <router-link to="/" class="card-category-img">
      <img :src="item.categor_image" />
    </router-link>
    <div class="card-category">
      <div class="content-card">
        <h3 class="text-center">{{ item.categor_name }}</h3>
        <router-link to="/" class="link">
          <p>Shop now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
              fill="black"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </li>
</template>

<style scoped>
.shop-card-category {
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.shop-card-category:nth-last-child(1) {
  border-bottom: 0;
}

.shop-card-category:nth-child(even) .card-category {
  order: -1;
}

.shop-card-category .card-category {
  width: 100%;
  height: 25vw;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.23vw;
  display: flex;
  position: relative;
}

/* .shop-card-category .card-category:nth-child(odd) {
    border-right: 1px solid #000000;
}

.shop-card-category .card-category:nth-child(even) {
    border-right: 1px solid #000000;
} */

.shop-card-category .card-category .content-card {
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.shop-card-category .card-category .content-card .link {
  align-items: center;
  transition: all 0.3s ease-out;
  display: flex;
  position: absolute;
  bottom: 0;
}

.shop-card-category .card-category .content-card .link svg {
  width: 1.77vw;
  height: 1.77vw;
}

.shop-card-category .card-category .content-card .link p {
  font-weight: 600;
  text-transform: capitalize;
}

.shop-card-category .card-category-img {
  max-width: 100%;
  display: inline-block;
  height: 25dvw;
}

.shop-card-category .card-category-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 50% 50%;
  object-position: 50% 50%;
  display: block;
}
</style>
