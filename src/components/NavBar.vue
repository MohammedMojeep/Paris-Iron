<script setup>
// استيراد الدوال الضرورية من Vue
import { ref, onMounted, onUnmounted } from 'vue'

// حالة القائمة المتنقلة (مفتوحة / مغلقة)
const menuOpen = ref(false)

// حالة شريط التنقل عند التمرير
const scrolled = ref(false)

// روابط التنقل
const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'المنتجات',  href: '#products' },
  { label: 'عن باريس',  href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
]

// دالة التحقق من موضع التمرير
const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

// دالة إغلاق القائمة وتمرير القسم
const navigateTo = (href) => {
  menuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// إضافة وإزالة مستمع حدث التمرير
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- شريط التنقل الرئيسي - يتغير مظهره عند التمرير -->
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__container container">

      <!-- الشعار -->
      <a class="navbar__logo" href="#hero" @click.prevent="navigateTo('#hero')">
        <span class="navbar__logo-icon">⚙</span>
        <span class="navbar__logo-text">باريس</span>
        <span class="navbar__logo-sub">للحديد ومواد البناء</span>
      </a>

      <!-- روابط التنقل - للشاشات الكبيرة -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="navbar__link"
            @click.prevent="navigateTo(link.href)"
          >
            {{ link.label }}
            <span class="navbar__link-bar"></span>
          </a>
        </li>
      </ul>

      <!-- زر طلب الآن في شريط التنقل -->
      <a href="#contact" class="navbar__cta btn-primary" @click.prevent="navigateTo('#contact')">
        <span>اطلب الآن</span>
      </a>

      <!-- زر القائمة للجوال -->
      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="تبديل القائمة"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- القائمة المتنقلة للجوال -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <ul class="navbar__mobile-links">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="navbar__mobile-link"
            @click.prevent="navigateTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a href="#contact" class="btn-primary" @click.prevent="navigateTo('#contact')">
            <span>اطلب الآن</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* --- شريط التنقل الرئيسي --- */
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 0;
  background: transparent;
  transition: all 0.4s ease;
}

/* تأثير الشريط عند التمرير */
.navbar--scrolled {
  padding: 12px 0;
  background: rgba(10, 10, 10, 0.96);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(232, 119, 34, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* --- الشعار --- */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-icon {
  font-size: 1.8rem;
  color: var(--color-orange);
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.navbar__logo-text {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--color-white);
  line-height: 1;
}

.navbar__logo-sub {
  font-size: 0.65rem;
  color: var(--color-orange);
  font-weight: 600;
  align-self: flex-end;
  margin-bottom: 3px;
}

/* --- روابط التنقل --- */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
}

.navbar__link {
  position: relative;
  display: block;
  padding: 8px 14px;
  color: var(--color-gray-lighter);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.navbar__link:hover { color: var(--color-orange); }

.navbar__link-bar {
  position: absolute;
  bottom: 4px;
  right: 14px;
  left: 14px;
  height: 2px;
  background: var(--color-orange);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
  border-radius: 2px;
}

.navbar__link:hover .navbar__link-bar { transform: scaleX(1); }

/* --- زر CTA في الناف --- */
.navbar__cta {
  padding: 10px 24px;
  font-size: 0.9rem;
  flex-shrink: 0;
}

/* --- زر الهامبرغر للجوال --- */
.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid rgba(232, 119, 34, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 8px;
}

.navbar__burger span {
  display: block;
  height: 2px;
  background: var(--color-orange);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar__burger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.navbar__burger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* --- القائمة المتنقلة --- */
.navbar__mobile {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  background: rgba(10, 10, 10, 0.98);
  border-top: 1px solid rgba(232, 119, 34, 0.15);
}

.navbar__mobile--open { max-height: 400px; }

.navbar__mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px;
  gap: 4px;
}

.navbar__mobile-link {
  display: block;
  padding: 12px 0;
  color: var(--color-gray-lighter);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: color 0.3s ease, padding-right 0.3s ease;
}

.navbar__mobile-link:hover {
  color: var(--color-orange);
  padding-right: 8px;
}

/* --- استجابة الجوال --- */
@media (max-width: 900px) {
  .navbar__links,
  .navbar__cta { display: none; }
  .navbar__burger { display: flex; }
}
</style>
