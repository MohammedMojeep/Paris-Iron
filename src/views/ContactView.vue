<template>
  <div class="contact-page container section-padding">
    <div class="contact-header text-center">
      <h1>اتصل بنا</h1>
      <p>نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك</p>
    </div>

    <div class="contact-content">
      <!-- معلومات الاتصال -->
      <div class="contact-info card">
        <h2>معلومات التواصل</h2>
        <p class="info-desc">لا تتردد في التواصل معنا عبر القنوات التالية:</p>
        
        <ul class="info-list">
          <li>
            <span class="icon">📍</span>
            <div class="details">
              <strong>العنوان:</strong>
              <span>اليمن</span>
            </div>
          </li>
          <li>
            <span class="icon">📧</span>
            <div class="details">
              <strong>البريد الإلكتروني:</strong>
              <a href="mailto:mohammedmojepp4063155@gmail.com">mohammedmojepp4063155@gmail.com</a>
            </div>
          </li>
        </ul>
      </div>

      <!-- نموذج الاتصال -->
      <div class="contact-form-container card">
        <h2>أرسل رسالة</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          
          <div class="form-group">
            <label for="name">الاسم الكامل</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="أدخل اسمك الكريم"
            />
          </div>
          
          <div class="form-group">
            <label for="email">البريد الإلكتروني</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          
          <div class="form-group">
            <label for="message">الرسالة</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              required 
              placeholder="كيف يمكننا مساعدتك؟"
            ></textarea>
          </div>
          
          <button type="submit" class="btn-primary submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة' }}
          </button>
          
          <!-- رسالة النجاح -->
          <div v-if="successMessage" class="success-message">
            تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// حالة النموذج
const form = reactive({
  name: '',
  email: '',
  message: ''
});

// حالة الإرسال
const isSubmitting = ref(false);
const successMessage = ref(false);

// وظيفة إرسال النموذج (محاكاة)
const submitForm = () => {
  isSubmitting.value = true;
  
  // محاكاة طلب للشبكة (تأخير ثانية ونصف)
  setTimeout(() => {
    isSubmitting.value = false;
    successMessage.value = true;
    
    // تفريغ الحقول
    form.name = '';
    form.email = '';
    form.message = '';
    
    // إخفاء رسالة النجاح بعد 5 ثواني
    setTimeout(() => {
      successMessage.value = false;
    }, 5000);
  }, 1500);
};
</script>

<style scoped>
.contact-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.text-center {
  text-align: center;
}

.contact-header {
  margin-bottom: 50px;
}

.contact-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.contact-header p {
  color: var(--text-muted);
  font-size: 18px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

/* معلومات التواصل */
.contact-info {
  padding: 30px;
  height: fit-content;
}

.contact-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.info-desc {
  color: var(--text-muted);
  margin-bottom: 24px;
}

.info-list {
  list-style: none;
  padding: 0;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.info-list .icon {
  font-size: 24px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.details strong {
  color: var(--secondary-color);
  font-size: 15px;
}

.details span, .details a {
  color: var(--text-muted);
  font-size: 14px;
}

.details a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

/* نموذج الاتصال */
.contact-form-container {
  padding: 30px;
}

.contact-form-container h2 {
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--secondary-color);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  font-size: 14px;
  color: var(--secondary-color);
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-family: var(--font-family);
  font-size: 15px;
  outline: none;
  transition: var(--transition);
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(255, 123, 0, 0.1);
}

.submit-btn {
  padding: 12px;
  margin-top: 10px;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
}

/* التجاوب */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
