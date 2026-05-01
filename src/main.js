import { createApp } from 'vue';
import './style.css'; // الأنماط العامة
import App from './App.vue';
import router from './router'; // استيراد الموجه

const app = createApp(App);

// استخدام الموجه
app.use(router);

// تشغيل التطبيق
app.mount('#app');
