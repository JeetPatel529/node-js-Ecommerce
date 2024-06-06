<script setup>
import { onMounted } from 'vue'
import NotifyGroup from '@/components/NotifyGroup.vue'
import { notify } from 'notiwind'

onMounted(() => {
  notify(
    {
      group: 'foo',
      title: 'Success',
      text: 'Your account was registered!'
    },
    1500
  )
})
</script>

<template>
  <RouterView />

  <NotifyGroup />
</template>
