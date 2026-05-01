<script setup>
// استيراد صورة حديد التسليح
import rebarImg from '../assets/rebar.png'

// قائمة المنتجات - تُمرَّر عبر v-for لعرض البطاقات
const products = [
  {
    id: 1,
    title: 'حديد التسليح',
    desc: 'قضبان حديد تسليح عالية الجودة لجميع المشاريع الإنشائية، مطابقة للمعايير الدولية.',
    icon: '🔩',
    image: rebarImg,
    badge: 'الأكثر طلباً',
  },
  {
    id: 2,
    title: 'أنابيب الحديد',
    desc: 'أنابيب معدنية بأحجام متعددة للاستخدامات الإنشائية والصناعية بمقاومة عالية للصدأ.',
    icon: '⚙️',
    image: null,
    badge: 'جودة عالية',
  },
  {
    id: 3,
    title: 'الصفائح المعدنية',
    desc: 'صفائح فولاذية مجلفنة بسماكات متنوعة، مثالية للتغطية والتسقيف والأعمال الإنشائية.',
    icon: '🏗️',
    image: null,
    badge: 'متوفر بالجملة',
  },
]

// دالة فتح نافذة الطلب (التمرير لقسم التواصل)
const orderNow = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <!-- قسم المنتجات -->
  <section id="products" class="products">
    <div class="container">
      <!-- رأس القسم -->
      <div class="section-header fade-in-up">
        <span class="section-tag">منتجاتنا</span>
        <h2 class="section-title">
          أفضل <span>منتجات الحديد</span><br />ومواد البناء
        </h2>
        <div class="divider"><span class="divider-dot"></span></div>
        <p class="section-desc">
          نوفر تشكيلة واسعة من منتجات الحديد والصلب المعتمدة بأعلى معايير الجودة والمتانة
        </p>
      </div>

      <!-- شبكة بطاقات المنتجات -->
      <div class="products__grid">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="product-card fade-in-up"
          :class="`delay-${index + 1}`"
        >
          <!-- صورة المنتج أو خلفية CSS -->
          <div class="product-card__img-wrap">
            <img
              v-if="product.image"
              :src="product.image"
              :alt="product.title"
              class="product-card__img"
            />
            <div v-else class="product-card__img-placeholder">
              <span class="product-card__icon">{{ product.icon }}</span>
            </div>
            <!-- شارة المنتج -->
            <span class="product-card__badge">{{ product.badge }}</span>
          </div>

          <!-- معلومات المنتج -->
          <div class="product-card__body">
            <h3 class="product-card__title">{{ product.title }}</h3>
            <p class="product-card__desc">{{ product.desc }}</p>
            <button class="btn-primary product-card__btn" @click="orderNow">
              <span>🛒 اطلب الآن</span>
            </button>
          </div>

          <!-- تأثير الحد البرتقالي عند Hover -->
          <div class="product-card__glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- قسم المنتجات --- */
.products {
  padding: var(--section-padding);
  background: linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.products::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%);
  pointer-events: none;
}

/* --- شبكة البطاقات --- */
.products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}

/* --- بطاقة المنتج --- */
.product-card {
  background: var(--color-dark-2);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  border-color: rgba(232,119,34,0.5);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(232,119,34,0.1);
}

/* --- تأثير التوهج --- */
.product-card__glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  border: 2px solid transparent;
  background: linear-gradient(#111, #111) padding-box,
              linear-gradient(135deg, #e87722, transparent) border-box;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.product-card:hover .product-card__glow { opacity: 1; }

/* --- صورة المنتج --- */
.product-card__img-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-card__img { transform: scale(1.08); }

/* --- Placeholder للمنتجات بدون صورة --- */
.product-card__img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a, #222);
  border-bottom: 1px solid rgba(232,119,34,0.15);
}

.product-card__icon {
  font-size: 5rem;
  filter: drop-shadow(0 4px 24px rgba(232,119,34,0.4));
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

/* --- شارة المنتج --- */
.product-card__badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: linear-gradient(135deg, #e87722, #c45e0a);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 50px;
}

/* --- جسم البطاقة --- */
.product-card__body {
  padding: 24px;
}

.product-card__title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 10px;
}

.product-card__desc {
  font-size: 0.92rem;
  color: var(--color-gray-light);
  line-height: 1.7;
  margin-bottom: 20px;
}

.product-card__btn {
  width: 100%;
  justify-content: center;
}

/* --- استجابة الجوال --- */
@media (max-width: 768px) {
  .products__grid { grid-template-columns: 1fr; gap: 20px; }
}
</style>
