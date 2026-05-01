<<<<<<< HEAD
<script setup>
import heroBg from '../assets/hero.png'

const stats = [
  { number: '+15',  label: 'سنة خبرة' },
  { number: '+500', label: 'مشروع منجز' },
  { number: '+200', label: 'عميل راضٍ' },
]

const scrollToProducts = () => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
const scrollToContact  = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <!-- قسم الـ Hero الرئيسي -->
  <section id="hero" class="hero">
    <div class="hero__bg" :style="{ backgroundImage: `url(${heroBg})` }"></div>
    <div class="hero__overlay"></div>
    <div class="hero__lines"><span></span><span></span><span></span></div>

    <div class="container hero__content">
      <div class="hero__badge fade-in-up">
        <span class="badge-dot"></span>
        مواد بناء عالية الجودة
      </div>

      <h1 class="hero__title fade-in-up delay-1">
        أفضل الحديد<br />
        <span class="hero__title-highlight">بأعلى جودة</span>
      </h1>

      <p class="hero__desc fade-in-up delay-2">
        باريس — وجهتك الأولى للحديد ومواد البناء في اليمن.
        نوفر منتجات معتمدة تلبي أعلى معايير الجودة والمتانة.
      </p>

      <div class="hero__actions fade-in-up delay-3">
        <button class="btn-primary hero__btn" @click="scrollToProducts">
          <span>🔩 تصفح المنتجات</span>
        </button>
        <button class="btn-outline hero__btn-outline" @click="scrollToContact">
          تواصل معنا
        </button>
      </div>

      <div class="hero__stats fade-in-up delay-4">
        <div v-for="stat in stats" :key="stat.label" class="hero__stat">
          <strong class="hero__stat-num">{{ stat.number }}</strong>
          <span class="hero__stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <div class="hero__scroll-down" @click="scrollToProducts">
      <span class="scroll-arrow"></span>
=======
<template>
  <section class="hero">
    <!-- طبقة شفافة داكنة فوق صورة الخلفية -->
    <div class="overlay"></div>
    
    <div class="container hero-content">
      <h1 class="hero-title">Find Your Dream Job بسهولة</h1>
      <p class="hero-subtitle">Connecting talent with the right opportunities</p>
      
      <div class="hero-actions">
        <router-link to="/jobs" class="btn-primary">تصفح الوظائف</router-link>
      </div>
>>>>>>> 37dd174479c45708d70932b7fdcf8e43f4d379b9
    </div>
  </section>
</template>

<<<<<<< HEAD
<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  animation: zoomOut 12s ease forwards;
}
@keyframes zoomOut {
  from { transform: scale(1.05); }
  to   { transform: scale(1); }
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(232,119,34,0.12) 100%);
}
.hero__lines {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.hero__lines span {
  position: absolute;
  top: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(232,119,34,0.15), transparent);
  animation: lineSlide 6s ease-in-out infinite;
}
.hero__lines span:nth-child(1) { right: 20%; animation-delay: 0s; }
.hero__lines span:nth-child(2) { right: 50%; animation-delay: 2s; }
.hero__lines span:nth-child(3) { right: 80%; animation-delay: 4s; }
@keyframes lineSlide {
  0%,100% { opacity:0; transform:scaleY(0); transform-origin:top; }
  50%      { opacity:1; transform:scaleY(1); transform-origin:top; }
}
.hero__content {
  position: relative;
  z-index: 2;
  padding-top: 120px;
  padding-bottom: 80px;
  max-width: 750px;
}
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(232,119,34,0.12);
  border: 1px solid rgba(232,119,34,0.4);
  color: #ff9a45;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.badge-dot {
  width: 8px; height: 8px;
  background: #e87722;
  border-radius: 50%;
  animation: pulse 1.5s ease infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(232,119,34,0.6); }
  50%      { box-shadow: 0 0 0 8px rgba(232,119,34,0); }
}
.hero__title {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 20px;
}
.hero__title-highlight {
  color: #e87722;
  position: relative;
}
.hero__title-highlight::after {
  content: '';
  position: absolute;
  bottom: 4px; right: 0; left: 0;
  height: 4px;
  background: linear-gradient(to left, #e87722, transparent);
  border-radius: 2px;
}
.hero__desc {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.75);
  max-width: 560px;
  margin-bottom: 36px;
  line-height: 1.8;
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}
.hero__btn { font-size: 1.05rem; padding: 16px 40px; }
.hero__btn-outline { font-size: 1rem; padding: 14px 32px; }
.hero__stats { display: flex; gap: 40px; flex-wrap: wrap; }
.hero__stat {
  display: flex;
  flex-direction: column;
  position: relative;
}
.hero__stat:not(:last-child)::after {
  content: '';
  position: absolute;
  left: -20px; top: 10%; height: 80%; width: 1px;
  background: rgba(232,119,34,0.3);
}
.hero__stat-num { font-size: 2.2rem; font-weight: 900; color: #e87722; line-height: 1; }
.hero__stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 4px; }
.hero__scroll-down {
  position: absolute;
  bottom: 36px; left: 50%;
  transform: translateX(-50%);
  cursor: pointer; z-index: 3;
}
.scroll-arrow {
  display: block;
  width: 28px; height: 28px;
  border-right: 3px solid #e87722;
  border-bottom: 3px solid #e87722;
  transform: rotate(45deg);
  animation: bounce 1.8s ease infinite;
}
@keyframes bounce {
  0%,100% { transform: rotate(45deg) translateY(0); }
  50%      { transform: rotate(45deg) translateY(8px); }
}
@media (max-width: 600px) {
  .hero__actions { flex-direction: column; align-items: flex-start; }
  .hero__stats { gap: 24px; }
  .hero__stat::after { display: none; }
=======
<script setup>
// مكون قسم الواجهة الرئيسية
</script>

<style scoped>
/* التنسيقات الأساسية للقسم */
.hero {
  position: relative;
  height: 80vh;
  min-height: 500px;
  background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* الطبقة الشفافة الداكنة */
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.7);
  z-index: 1;
}

/* محتوى القسم */
.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 800px;
  animation: fadeIn 1s ease-out;
}

/* عنوان القسم */
.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* النص الفرعي */
.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  color: #e0dfdc;
  font-weight: 300;
}

/* حركات الدخول */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }
  .hero-subtitle {
    font-size: 16px;
  }
>>>>>>> 37dd174479c45708d70932b7fdcf8e43f4d379b9
}
</style>
