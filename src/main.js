// استيراد دالة إنشاء التطبيق من Vue 3
import { createApp } from 'vue'

// استيراد المكوّن الرئيسي للتطبيق
import App from './App.vue'

// استيراد ملف الأنماط العامة
import './assets/css/main.css'

// إنشاء التطبيق وتركيبه على عنصر #app في index.html
createApp(App).mount('#app')
