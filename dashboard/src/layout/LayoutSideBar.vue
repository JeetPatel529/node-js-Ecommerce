<script setup>
import { ref } from 'vue'

const routerArray = ref([
  {
    id: '#jac90s',
    router_name: 'Home',
    router_link: '/'
  }
])
</script>

<template>
  <aside class="sidebars leftSideBar leftSideBar_active space-y-6">
    <div class="w-full p-1 flex items-center space-x-3">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        class="w-10 h-10 rounded-full"
      />
      <p class="text-lg">Jeet Patel</p>
    </div>
    <div class="block w-full">
      <p class="side--com-title">Favorites</p>
      <ul class="list-disc mt-2 pl-8 space-y-1">
        <li><a href="#" class="fav--link">Overview</a></li>
        <li><a href="#" class="fav--link">Projects</a></li>
      </ul>
    </div>
    <div class="block w-full">
      <p class="side--com-title">Dashboards</p>
      <ul class="space-y-1 block mt-1.5">
        <li v-for="(item, index) in routerArray" :key="index">
          <router-link :to="item.router_link" class="router--link active">
            <div class="w-4 h-6"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.50002 2.92969V8.55469L2.62502 11.3672C2.29959 9.61066 2.61183 7.79565 3.50554 6.24885C4.39925 4.70205 5.81572 3.52504 7.50002 2.92969Z"
                fill-opacity="0.1"
              ></path>
              <path
                d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM17.0578 5.97812C17.0508 5.96406 17.0437 5.94922 17.0351 5.93516C17.0266 5.92109 17.0195 5.90938 17.0109 5.89688C16.2946 4.67328 15.2706 3.65834 14.0408 2.95282C12.8109 2.24729 11.4179 1.87572 9.99999 1.875C9.83423 1.875 9.67526 1.94085 9.55805 2.05806C9.44084 2.17527 9.37499 2.33424 9.37499 2.5V9.67422L3.21796 13.2602C3.14651 13.3016 3.08398 13.3567 3.03398 13.4225C2.98398 13.4882 2.9475 13.5632 2.92665 13.6431C2.9058 13.723 2.901 13.8062 2.91251 13.888C2.92403 13.9698 2.95164 14.0485 2.99374 14.1195C3.89708 15.6578 5.28156 16.856 6.93353 17.5293C8.58549 18.2025 10.4131 18.3134 12.1344 17.8448C13.8556 17.3762 15.3748 16.3541 16.4575 14.9364C17.5401 13.5186 18.1261 11.7839 18.125 10C18.1268 8.58916 17.7588 7.20247 17.0578 5.97812ZM10.625 3.15313C11.6162 3.24437 12.5759 3.54965 13.4376 4.04791C14.2994 4.54617 15.0428 5.22552 15.6164 6.03906L10.625 8.94609V3.15313ZM9.99999 16.875C8.90891 16.8722 7.834 16.6111 6.86323 16.113C5.89247 15.6149 5.05345 14.894 4.41484 14.0094L10.3055 10.5789L10.3226 10.568L16.2422 7.12031C16.7253 8.16777 16.9372 9.31996 16.8582 10.4708C16.7792 11.6216 16.4119 12.734 15.7902 13.7057C15.1684 14.6773 14.3122 15.4768 13.3003 16.0307C12.2885 16.5845 11.1535 16.8749 9.99999 16.875Z"
              ></path>
            </svg>
            <span>{{ item.router_name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebars {
  @apply h-dvh overflow-y-auto bg-white dark:bg-black-100;
}

.sidebars.leftSideBar {
  @apply -translate-x-56;
}

.sidebars.leftSideBar.leftSideBar_active {
  @apply translate-x-0;
}

.leftSideBar {
  @apply border-r border-solid border-black-10 w-full max-w-56 py-6 px-4;
}

.fav--link {
  @apply block text-base hover:underline focus:underline;
}

.side--com-title {
  @apply px-1.5 py-1 text-black-40 cursor-pointer;
}

.router--link {
  @apply flex items-center gap-1.5 text-base px-1 py-1 rounded-lg;
}

.router--link svg path {
  @apply fill-black-100 dark:fill-white;
}

.router--link.active {
  @apply bg-black-10;
}
</style>
