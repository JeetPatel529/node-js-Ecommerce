<template>
  <NotificationGroup group="foo">
    <div
      class="fixed inset-0 flex z-[99] items-start justify-end p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm mx-auto">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-fit max-w-xs mx-auto mt-1.5 overflow-hidden bg-black-100 px-3.5 py-2 text-center items-center justify-center rounded-lg shadow-md"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <p class="text-base text-white-80 tracking-wide text-center block capitalize">
              {{ notification.title }}
            </p>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
