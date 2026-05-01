<template>
  <div class="about-page container section-padding">
    <div class="about-header text-center">
      <h1>من نحن</h1>
      <p>تعرف على منصة Paris للتوظيف والتوظيف المؤسسي</p>
    </div>

    <div class="about-content">
      <!-- قسم من نحن -->
      <section class="about-section card">
        <div class="section-text">
          <h2>مقدمة عن الشركة</h2>
          <p>
            تأسست منصة Paris لتكون الجسر الموثوق الذي يربط بين الكفاءات المهنية المتميزة وأفضل الشركات والمؤسسات. 
            نحن نؤمن بأن الموهبة المناسبة في المكان المناسب هي مفتاح النجاح لأي مؤسسة.
          </p>
          <p>
            نسعى دائماً لتقديم خدمات توظيف احترافية تعتمد على الشفافية، الثقة، والخبرة الواسعة في سوق العمل.
          </p>
        </div>
        <div class="section-image">
          <!-- صورة تعبيرية (استخدام Placeholder) -->
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="فريق العمل" />
        </div>
      </section>

      <!-- قسم القيم -->
      <section class="values-section">
        <h2 class="text-center">قيمنا ومبادئنا</h2>
        <div class="values-grid">
          <div class="value-card card">
            <div class="value-icon">🤝</div>
            <h3>الثقة والمصداقية</h3>
            <p>نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة المتبادلة والشفافية التامة في كل خطوة.</p>
          </div>
          
          <div class="value-card card">
            <div class="value-icon">⭐</div>
            <h3>الاحترافية</h3>
            <p>نلتزم بأعلى معايير الجودة والاحترافية في تقديم خدماتنا لضمان رضا جميع الأطراف.</p>
          </div>
          
          <div class="value-card card">
            <div class="value-icon">🎯</div>
            <h3>الخبرة المتخصصة</h3>
            <p>فريقنا يمتلك خبرة عميقة في استقطاب وتقييم الكفاءات لمختلف القطاعات والمجالات.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// لا يوجد منطق معقد في هذه الصفحة
</script>

<style scoped>
.about-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.text-center {
  text-align: center;
}

.about-header {
  margin-bottom: 50px;
}

.about-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.about-header p {
  color: var(--text-muted);
  font-size: 18px;
}

/* قسم المقدمة */
.about-section {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;
  margin-bottom: 60px;
}

.section-text {
  flex: 1;
}

.section-text h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--secondary-color);
}

.section-text p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 16px;
}

.section-image {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
}

.section-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.section-image:hover img {
  transform: scale(1.05);
}

/* قسم القيم */
.values-section h2 {
  font-size: 28px;
  margin-bottom: 40px;
  color: var(--secondary-color);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.value-card {
  padding: 30px;
  text-align: center;
}

.value-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.value-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

/* التجاوب */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    padding: 20px;
  }
  
  .section-image {
    order: -1; /* لجعل الصورة تظهر قبل النص في الجوال */
  }
}
</style>
