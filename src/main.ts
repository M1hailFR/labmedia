import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/scss/main.scss'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import inputmask from './plugins/inputmask'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(inputmask)
app.mount('#app')
