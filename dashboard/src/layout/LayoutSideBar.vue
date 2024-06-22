<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeSideBar: {
    type: Boolean,
    default: true
  }
})

const routerArray = ref([
  {
    id: '#jac90s',
    router_name: 'Home',
    router_link: '/',
    active_path: '/'
  },
  {
    id: '#dw9f1v',
    router_name: 'Category',
    router_link: '/category/list',
    active_path: '/'
  },
  {
    id: '#hs9s02',
    router_name: 'Products',
    router_link: '/products/list',
    active_path: '/'
  }
])
</script>

<template>
  <aside
    class="sidebars leftSideBar space-y-6"
    :class="{ leftSideBar_active: props.activeSideBar }"
  >
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
        <li
          v-for="(item, index) in routerArray"
          :key="index"
          v-tooltip.right="'Go to' + ' ' + item.router_name"
        >
          <router-link :to="item.router_link" class="router--link active">
            <div class="w-4 h-6"></div>
            <svg
              v-if="item.id === '#jac90s'"
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
            <svg
              v-if="item.id === '#dw9f1v'"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              class="stroke"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.125 10.5C8.98896 10.5 10.5 8.98896 10.5 7.125C10.5 5.26104 8.98896 3.75 7.125 3.75C5.26104 3.75 3.75 5.26104 3.75 7.125C3.75 8.98896 5.26104 10.5 7.125 10.5Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.875 10.5C18.739 10.5 20.25 8.98896 20.25 7.125C20.25 5.26104 18.739 3.75 16.875 3.75C15.011 3.75 13.5 5.26104 13.5 7.125C13.5 8.98896 15.011 10.5 16.875 10.5Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.875 20.25C18.739 20.25 20.25 18.739 20.25 16.875C20.25 15.011 18.739 13.5 16.875 13.5C15.011 13.5 13.5 15.011 13.5 16.875C13.5 18.739 15.011 20.25 16.875 20.25Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.125 20.25C8.98896 20.25 10.5 18.739 10.5 16.875C10.5 15.011 8.98896 13.5 7.125 13.5C5.26104 13.5 3.75 15.011 3.75 16.875C3.75 18.739 5.26104 20.25 7.125 20.25Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-if="item.id === '#hs9s02'"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              class="stroke"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 13.0859V19.4984C4.5 19.6973 4.57902 19.8881 4.71967 20.0288C4.86032 20.1694 5.05109 20.2484 5.25 20.2484H18.75C18.9489 20.2484 19.1397 20.1694 19.2803 20.0288C19.421 19.8881 19.5 19.6973 19.5 19.4984V13.0859"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.0625 3.75H18.9375C19.1002 3.75134 19.2582 3.8049 19.3881 3.9028C19.5181 4.00069 19.6132 4.13774 19.6594 4.29375L21 9H3L4.34062 4.29375C4.38682 4.13774 4.4819 4.00069 4.61187 3.9028C4.74183 3.8049 4.8998 3.75134 5.0625 3.75V3.75Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9V10.5C9 11.2956 8.68393 12.0587 8.12132 12.6213C7.55871 13.1839 6.79565 13.5 6 13.5C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2956 3 10.5V9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 9V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5V9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
  @apply translate-x-0 py-6 px-4 w-full max-w-56;
}

.leftSideBar {
  @apply border-r border-solid border-black-10 dark:border-white-20 w-0;
}

.fav--link {
  @apply block text-base hover:underline focus:underline;
}

.side--com-title {
  @apply px-1.5 py-1 text-black-40 dark:text-white-80 cursor-pointer;
}

.router--link {
  @apply flex items-center gap-1.5 text-base px-1 py-1 rounded-lg;
}

.router--link svg path {
  @apply fill-black-100 dark:fill-white;
}

.router--link svg.stroke path {
  @apply stroke-black-100 dark:stroke-white fill-none;
}

.router--link.active {
  @apply bg-black-10 dark:bg-white-20;
}
</style>
