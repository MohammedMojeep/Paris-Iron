<script setup>
// روابط التنقل السريع في التذييل
const quickLinks = [
  { label: 'الرئيسية',   href: '#hero' },
  { label: 'المنتجات',   href: '#products' },
  { label: 'عن باريس',  href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
]

// السنة الحالية
const year = new Date().getFullYear()

// دالة التمرير السلس
const goto = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <!-- تذييل الصفحة -->
  <footer class="footer">
    <!-- الجزء العلوي من التذييل -->
    <div class="container footer__top">

      <!-- الشعار والوصف -->
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="footer__logo-icon">⚙</span>
          <span>باريس</span>
        </div>
        <p class="footer__brand-desc">
          معرض باريس للحديد ومواد البناء — شريكك الموثوق في كل مشاريعك الإنشائية في اليمن.
        </p>
        <!-- أيقونات التواصل الاجتماعي -->
        <div class="footer__social">
          <a href="#" class="footer__social-btn" aria-label="واتساب">📱</a>
          <a href="#" class="footer__social-btn" aria-label="فيسبوك">👥</a>
          <a href="#" class="footer__social-btn" aria-label="إنستغرام">📸</a>
        </div>
      </div>

      <!-- روابط سريعة -->
      <div class="footer__col">
        <h4 class="footer__col-title">روابط سريعة</h4>
        <ul class="footer__links">
          <li v-for="link in quickLinks" :key="link.href">
            <a :href="link.href" class="footer__link" @click.prevent="goto(link.href)">
              <span class="footer__link-arrow">‹</span> {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- معلومات التواصل -->
      <div class="footer__col">
        <h4 class="footer__col-title">تواصل معنا</h4>
        <ul class="footer__contact-list">
          <li>📍 اليمن</li>
          <li>
            <a href="mailto:mohammedmojepp4063155@gmail.com" class="footer__email">
              📧 mohammedmojepp4063155<br/>@gmail.com
            </a>
          </li>
          <li>📞  772062777 +967</li>
          <li>📞  782807337 +967</li>

        </ul>
      </div>

    </div>

    <!-- الفاصل -->
    <div class="footer__divider"></div>

    <!-- حقوق النشر -->
    <div class="container footer__bottom">
      <p class="footer__copy">© {{ year }} باريس للحديد ومواد البناء — جميع الحقوق محفوظة</p>
      <p class="footer__made">صُنع بـ ❤️ في اليمن</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #080808;
  border-top: 1px solid rgba(232,119,34,0.2);
  padding-top: 60px;
}

/* --- الجزء العلوي --- */
.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}

/* --- الشعار في التذييل --- */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--color-white);
  margin-bottom: 16px;
}

.footer__logo-icon {
  color: var(--color-orange);
  font-size: 1.6rem;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.footer__brand-desc {
  font-size: 0.9rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: 20px;
}

/* --- روابط التواصل الاجتماعي --- */
.footer__social {
  display: flex;
  gap: 10px;
}

.footer__social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-dark-2);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  font-size: 1.2rem;
  text-decoration: none;
  transition: var(--transition);
}

.footer__social-btn:hover {
  border-color: var(--color-orange);
  background: rgba(232,119,34,0.1);
  transform: translateY(-3px);
}

/* --- أعمدة التذييل --- */
.footer__col-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-orange);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer__col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 2px;
  background: var(--color-orange);
  border-radius: 1px;
}

.footer__links { list-style: none; }

.footer__link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-gray);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 6px 0;
  transition: color 0.3s ease, gap 0.3s ease;
}

.footer__link:hover {
  color: var(--color-orange);
  gap: 10px;
}

.footer__link-arrow {
  color: var(--color-orange);
  font-size: 1.1rem;
  line-height: 1;
}

/* --- قائمة معلومات التواصل --- */
.footer__contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--color-gray);
  line-height: 1.6;
}

.footer__email {
  color: var(--color-gray);
  text-decoration: none;
  transition: color 0.3s;
  word-break: break-all;
}
.footer__email:hover { color: var(--color-orange); }

/* --- الفاصل --- */
.footer__divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(232,119,34,0.3), transparent);
}

/* --- الجزء السفلي --- */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  flex-wrap: wrap;
  gap: 8px;
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--color-gray);
}

.footer__made {
  font-size: 0.85rem;
  color: var(--color-gray);
}

/* --- استجابة الجوال --- */
@media (max-width: 900px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; }
}

@media (max-width: 500px) {
  .footer__top { grid-template-columns: 1fr; }
  .footer__bottom { flex-direction: column; text-align: center; }
}
</style>
