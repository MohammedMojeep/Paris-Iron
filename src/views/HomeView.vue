<template>
  <div class="home">
    <HeroSection />
    
    <!-- قسم نبذة سريعة -->
    <section class="quick-about container section-padding">
      <div class="section-header text-center">
        <h2>لماذا تختار منصة Paris؟</h2>
        <p>نحن نربط بين أفضل الكفاءات وأبرز الشركات لتوفير بيئة عمل مثالية.</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card card">
          <div class="icon-wrapper">🚀</div>
          <h3>فرص سريعة</h3>
          <p>ابحث وقدم على الوظائف بضغطة زر واحدة بكل سهولة ويسر.</p>
        </div>
        <div class="feature-card card">
          <div class="icon-wrapper">💼</div>
          <h3>شركات موثوقة</h3>
          <p>نتعاون مع أفضل الشركات والمؤسسات لضمان بيئة عمل احترافية.</p>
        </div>
        <div class="feature-card card">
          <div class="icon-wrapper">🔒</div>
          <h3>خصوصية تامة</h3>
          <p>بياناتك وسيرتك الذاتية في أمان تام ومحفوظة بسرية.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// استيراد قسم الواجهة
import HeroSection from '../components/HeroSection.vue';
</script>

<style scoped>
.section-padding {
  padding: 80px 20px;
}

.text-center {
  text-align: center;
}

.section-header {
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 32px;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.section-header p {
  color: var(--text-muted);
  font-size: 18px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 40px 30px;
  text-align: center;
}

.icon-wrapper {
  font-size: 48px;
  margin-bottom: 20px;
  display: inline-block;
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.feature-card p {
  color: var(--text-muted);
}
</style>
