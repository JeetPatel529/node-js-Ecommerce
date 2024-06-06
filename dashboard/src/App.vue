<script setup>
import { onMounted } from 'vue'
import NotifyGroup from '@/components/NotifyGroup.vue'
import { notify } from 'notiwind'

onMounted(() => {
  notify(
    {
      group: 'foo',
      title: 'create new user successfully'
    },
    1500
  )
  notify(
    {
      group: 'foo',
      title: 'user Deleted  successfully'
    },
    1500
  )
  notify(
    {
      group: 'foo',
      title: 'user updated successfully'
    },
    1500
  )
})
</script>

<template>
  <RouterView />

  <NotifyGroup />
</template>
