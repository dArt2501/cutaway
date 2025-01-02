import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import vClickOutside from "click-outside-vue3"

createApp(App).use(router).use(PrimeVue).use(vClickOutside).mount('#app')