<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main class="main-content">
      <!-- عرض مسارات Vue Router -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// استيراد المكونات الأساسية (الشريط العلوي والفوتر)
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* تأثيرات انتقال بسيطة بين الصفحات */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  /* إضافة مسافة علوية لتجنب التداخل مع الشريط اللاصق */
  padding-top: 70px; 
}
</style>
