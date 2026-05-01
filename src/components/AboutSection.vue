<script setup>
// مزايا الشركة المعروضة في قسم "من نحن"
const features = [
  { icon: '🏆', title: 'خبرة أكثر من 15 عاماً', desc: 'نمتلك تجربة واسعة في قطاع الحديد ومواد البناء' },
  { icon: '✅', title: 'جودة معتمدة دولياً',    desc: 'جميع منتجاتنا مطابقة للمعايير والمواصفات الدولية' },
  { icon: '🚚', title: 'توصيل سريع وآمن',      desc: 'نوفر خدمة توصيل متكاملة لجميع محافظات اليمن' },
  { icon: '💬', title: 'دعم فني متخصص',        desc: 'فريقنا جاهز للإجابة على كل استفساراتكم ومتطلباتكم' },
]
</script>

<template>
  <!-- قسم عن باريس -->
  <section id="about" class="about">
    <div class="container">
      <div class="about__inner">

        <!-- الجانب النصي -->
        <div class="about__text fade-in-left">
          <span class="section-tag">من نحن</span>
          <h2 class="section-title" style="text-align:right; margin-bottom:16px;">
            باريس — رائدة<br /><span>الحديد ومواد البناء</span>
          </h2>
          <div class="divider" style="justify-content:flex-start; margin: 16px 0 24px;">
            <span class="divider-dot"></span>
          </div>

          <p class="about__para">
            تأسست شركة <strong>باريس</strong> للحديد ومواد البناء بهدف توفير أفضل المنتجات
            الإنشائية وأعلاها جودةً للسوق اليمني. نعمل منذ أكثر من <strong>15 عاماً</strong>
            على بناء ثقة عملائنا من خلال الالتزام بالجودة والأمانة.
          </p>
          <p class="about__para">
            نتخصص في توريد حديد التسليح وأنابيب الحديد والصفائح المعدنية وسائر مواد البناء،
            لنكون الشريك الموثوق لجميع مشاريعكم الإنشائية الصغيرة والكبيرة.
          </p>

          <a href="#contact" class="btn-primary about__btn"
             @click.prevent="() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})">
            <span>تواصل معنا</span>
          </a>
        </div>

        <!-- شبكة المزايا -->
        <div class="about__features fade-in-right">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            class="feature-card"
            :class="`delay-${i + 1}`"
          >
            <div class="feature-card__icon">{{ f.icon }}</div>
            <div>
              <h4 class="feature-card__title">{{ f.title }}</h4>
              <p class="feature-card__desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- عنصر زخرفي خلفي -->
    <div class="about__bg-shape"></div>
  </section>
</template>

<style scoped>
.about {
  padding: var(--section-padding);
  background: #111;
  position: relative;
  overflow: hidden;
}

.about__bg-shape {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(232,119,34,0.07) 0%, transparent 70%);
  pointer-events: none;
}

/* --- التخطيط الداخلي --- */
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* --- النص --- */
.about__para {
  font-size: 1rem;
  color: var(--color-gray-light);
  line-height: 1.85;
  margin-bottom: 16px;
}
.about__para strong { color: var(--color-orange); }
.about__btn { margin-top: 12px; }

/* --- شبكة المزايا --- */
.about__features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.feature-card {
  background: var(--color-dark-2);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(232,119,34,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4);
}

.feature-card__icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
}

.feature-card__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 6px;
}

.feature-card__desc {
  font-size: 0.82rem;
  color: var(--color-gray-light);
  line-height: 1.6;
}

/* --- استجابة الجوال --- */
@media (max-width: 900px) {
  .about__inner { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 500px) {
  .about__features { grid-template-columns: 1fr; }
}
</style>
