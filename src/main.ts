import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from "vue-i18n";
//import fr from '@/locales/fr.json'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

// Vue i18n
app.use(createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  //messages: {fr}
}))

// Router
app.use(router)

app.mount('#app')
