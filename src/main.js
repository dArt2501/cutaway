import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import PrimeVue from 'primevue/config';

createApp(App).use(router).use(PrimeVue).mount('#app')