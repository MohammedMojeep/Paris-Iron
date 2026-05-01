<script setup>
// استيراد جميع المكونات الرئيسية للصفحة
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// تفعيل الأنيميشن عند التمرير باستخدام Intersection Observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.15 }
  )

  // مراقبة كل العناصر التي تحمل كلاس الأنيميشن
  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <!-- التطبيق الرئيسي - يحتوي على جميع أقسام الصفحة -->
  <div id="paris-app">
    <!-- شريط التنقل العلوي -->
    <NavBar />

    <!-- القسم الرئيسي (Hero) -->
    <HeroSection />

    <!-- قسم المنتجات -->
    <ProductsSection />

    <!-- قسم من نحن -->
    <AboutSection />

    <!-- قسم التواصل -->
    <ContactSection />

    <!-- تذييل الصفحة -->
    <FooterSection />
  </div>
</template>

<style>
/* أنماط التطبيق الرئيسي */
#paris-app {
  min-height: 100vh;
  background-color: #0a0a0a;
}
</style>
