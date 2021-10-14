import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import router from './router'
import '@/plugins/googleAnalytics'

createApp(App).use(router).mount('#app')
