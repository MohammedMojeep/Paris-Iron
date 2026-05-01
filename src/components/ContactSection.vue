<script setup>
import { ref, reactive } from 'vue'

// بيانات التواصل
const contactInfo = [
  { icon: '📍', label: 'العنوان',    value: 'اليمن' },
  { icon: '📧', label: 'البريد الإلكتروني', value: 'mohammedmojepp4063155@gmail.com' },
  { icon: '📞', label: 'الهاتف',    value: ' 772062777 +967' },
  { icon: '📞', label: 'الهاتف',    value: ' 782807337 +967' },

]

// بيانات نموذج التواصل باستخدام reactive
const form = reactive({ name: '', email: '', message: '' })

// حالة الإرسال
const submitted = ref(false)
const loading   = ref(false)

// دالة إرسال النموذج
const submitForm = () => {
  if (!form.name || !form.email || !form.message) return
  loading.value = true
  // محاكاة الإرسال (يمكن ربطها بـ API لاحقاً)
  setTimeout(() => {
    loading.value = false
    submitted.value = true
    form.name = ''; form.email = ''; form.message = ''
    setTimeout(() => { submitted.value = false }, 4000)
  }, 1500)
}
</script>

<template>
  <!-- قسم التواصل -->
  <section id="contact" class="contact">
    <div class="container">
      <!-- رأس القسم -->
      <div class="section-header fade-in-up">
        <span class="section-tag">تواصل معنا</span>
        <h2 class="section-title">
          نحن هنا<br /><span>لخدمتك دائماً</span>
        </h2>
        <div class="divider"><span class="divider-dot"></span></div>
        <p class="section-desc">تواصل معنا لأي استفسار أو طلب وسنرد عليك في أقرب وقت</p>
      </div>

      <div class="contact__inner">

        <!-- معلومات التواصل -->
        <div class="contact__info fade-in-left">
          <div
            v-for="item in contactInfo"
            :key="item.label"
            class="contact-info-card"
          >
            <div class="contact-info-card__icon">{{ item.icon }}</div>
            <div>
              <p class="contact-info-card__label">{{ item.label }}</p>
              <p class="contact-info-card__value">{{ item.value }}</p>
            </div>
          </div>

          <!-- بطاقة الاقتباس التحفيزي -->
          <div class="contact__quote">
            <p>"نحن نبني معك، لا من أجلك"</p>
            <span>— فريق باريس</span>
          </div>
        </div>

        <!-- نموذج التواصل -->
        <div class="contact__form-wrap fade-in-right">
          <!-- رسالة النجاح -->
          <transition name="fade">
            <div v-if="submitted" class="form-success">
              ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
            </div>
          </transition>

          <form class="contact__form" @submit.prevent="submitForm">
            <!-- حقل الاسم -->
            <div class="form-group">
              <label class="form-label" for="contact-name">الاسم الكامل</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                class="form-input"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <!-- حقل البريد الإلكتروني -->
            <div class="form-group">
              <label class="form-label" for="contact-email">البريد الإلكتروني</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                class="form-input"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <!-- حقل الرسالة -->
            <div class="form-group">
              <label class="form-label" for="contact-message">الرسالة</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="form-input form-textarea"
                placeholder="اكتب رسالتك هنا..."
                rows="5"
                required
              ></textarea>
            </div>

            <!-- زر الإرسال -->
            <button
              type="submit"
              class="btn-primary contact__submit"
              :disabled="loading"
            >
              <span v-if="loading">⏳ جاري الإرسال...</span>
              <span v-else>✉️ إرسال الرسالة</span>
            </button>
          </form>
        </div>

      </div>
    </div>

    <!-- زخرفة خلفية -->
    <div class="contact__bg-shape"></div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--section-padding);
  background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
  position: relative;
  overflow: hidden;
}

.contact__bg-shape {
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(232,119,34,0.06) 0%, transparent 70%);
  pointer-events: none;
}

/* --- التخطيط الداخلي --- */
.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
  align-items: start;
}

/* --- بطاقات معلومات التواصل --- */
.contact-info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--color-dark-2);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.contact-info-card:hover {
  transform: translateX(-6px);
  border-color: rgba(232,119,34,0.35);
}

.contact-info-card__icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.contact-info-card__label {
  font-size: 0.78rem;
  color: var(--color-orange);
  font-weight: 600;
  margin-bottom: 4px;
}

.contact-info-card__value {
  font-size: 0.92rem;
  color: var(--color-gray-lighter);
  word-break: break-all;
}

/* --- اقتباس تحفيزي --- */
.contact__quote {
  background: linear-gradient(135deg, rgba(232,119,34,0.12), rgba(232,119,34,0.04));
  border: 1px solid rgba(232,119,34,0.25);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-top: 8px;
}

.contact__quote p {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 8px;
  font-style: italic;
}

.contact__quote span {
  font-size: 0.85rem;
  color: var(--color-orange);
}

/* --- نموذج التواصل --- */
.contact__form-wrap {
  background: var(--color-dark-2);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius-lg);
  padding: 36px;
}

.form-group { margin-bottom: 20px; }

.form-label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-gray-lighter);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 12px 16px;
  font-family: var(--font-main);
  font-size: 0.95rem;
  color: var(--color-white);
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;
  direction: rtl;
}

.form-input:focus {
  border-color: var(--color-orange);
  background: rgba(232,119,34,0.05);
}

.form-input::placeholder { color: var(--color-gray); }

.form-textarea {
  resize: vertical;
  min-height: 130px;
}

.contact__submit {
  width: 100%;
  justify-content: center;
  font-size: 1rem;
  padding: 14px;
}

.contact__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}

/* --- رسالة النجاح --- */
.form-success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
  padding: 14px 20px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  font-size: 0.95rem;
  font-weight: 600;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* --- استجابة الجوال --- */
@media (max-width: 900px) {
  .contact__inner { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 500px) {
  .contact__form-wrap { padding: 24px 16px; }
}
</style>
