import { createRouter, createWebHistory } from 'vue-router';

// استيراد الصفحات
import HomeView from '../views/HomeView.vue';
import JobsView from '../views/JobsView.vue';
import JobDetailsView from '../views/JobDetailsView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

// إعداد المسارات
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsView,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
];

// إنشاء الموجه
const router = createRouter({
  history: createWebHistory(),
  routes,
  // التمرير لأعلى الصفحة عند التنقل بين الصفحات
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;
