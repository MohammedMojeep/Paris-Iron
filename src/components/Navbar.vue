<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container nav-container">
      <!-- الشعار -->
      <div class="logo">
        <router-link to="/">
          <h1>Paris</h1>
        </router-link>
      </div>

      <!-- القائمة الرئيسية -->
      <nav class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/" @click="closeMenu">الرئيسية</router-link>
        <router-link to="/jobs" @click="closeMenu">الوظائف</router-link>
        <router-link to="/about" @click="closeMenu">من نحن</router-link>
        <router-link to="/contact" @click="closeMenu">اتصل بنا</router-link>
      </nav>

      <!-- زر القائمة للجوال -->
      <div class="mobile-toggle" @click="toggleMenu">
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// حالة القائمة في الجوال
const isMenuOpen = ref(false);
// حالة التمرير لتبديل شكل الشريط
const isScrolled = ref(false);

// وظيفة فتح/إغلاق القائمة
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// وظيفة إغلاق القائمة عند النقر على الروابط
const closeMenu = () => {
  isMenuOpen.value = false;
};

// وظيفة متابعة التمرير
const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// إضافة مستمع لحدث التمرير عند التحميل
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// إزالة مستمع التمرير عند تدمير المكون
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* إعدادات الشريط العلوي الأساسية */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: var(--transition);
  border-bottom: 1px solid var(--border-color);
}

/* حالة التمرير للشريط */
.navbar.scrolled {
  box-shadow: var(--shadow);
  height: 60px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* تنسيق الشعار */
.logo h1 {
  font-size: 24px;
  color: var(--primary-color);
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

/* تنسيقات الروابط */
.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-muted);
  position: relative;
  padding: 5px 0;
}

/* تأثيرات التحويم للروابط */
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

/* زر الجوال (Hamburger Menu) */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: var(--secondary-color);
  transition: var(--transition);
}

/* تحويل شكل زر الجوال عند الفتح */
.mobile-toggle .bar.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.mobile-toggle .bar.active:nth-child(2) {
  opacity: 0;
}
.mobile-toggle .bar.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: #fff;
    flex-direction: column;
    padding-top: 80px;
    padding-right: 30px;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: var(--transition);
  }

  .nav-links.active {
    right: 0;
  }
}
</style>
