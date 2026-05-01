<<<<<<< HEAD
// استيراد دالة إنشاء التطبيق من Vue 3
import { createApp } from 'vue'

// استيراد المكوّن الرئيسي للتطبيق
import App from './App.vue'

// استيراد ملف الأنماط العامة
import './assets/css/main.css'

// إنشاء التطبيق وتركيبه على عنصر #app في index.html
createApp(App).mount('#app')
=======
import { createApp } from 'vue';
import './style.css'; // الأنماط العامة
import App from './App.vue';
import router from './router'; // استيراد الموجه

const app = createApp(App);

// استخدام الموجه
app.use(router);

// تشغيل التطبيق
app.mount('#app');
>>>>>>> 37dd174479c45708d70932b7fdcf8e43f4d379b9
