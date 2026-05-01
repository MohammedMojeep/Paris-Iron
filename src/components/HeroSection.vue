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
    </div>
  </section>
</template>

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
}
</style>
