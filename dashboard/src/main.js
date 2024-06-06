import '../public/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Notifications from 'notiwind'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notifications)

app.mount('#app')
