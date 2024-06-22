import '../public/css/main.css'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Notifications from 'notiwind'
import FloatingVue from 'floating-vue'
import { useModeStore } from '@/stores'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notifications)
app.use(FloatingVue)

app.mount('#app')

useModeStore().applyThemeMode()
