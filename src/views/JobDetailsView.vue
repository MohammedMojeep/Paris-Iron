<template>
  <div class="job-details-page container section-padding">
    <div v-if="job" class="job-content">
      
      <!-- زر العودة -->
      <router-link to="/jobs" class="back-link">
        <span>&rarr;</span> العودة للوظائف
      </router-link>
      
      <!-- ترويسة الوظيفة -->
      <div class="job-header card">
        <div class="header-main">
          <h1>{{ job.title }}</h1>
          <div class="company-info">
            <span class="company">{{ job.company }}</span>
            <span class="location">📍 {{ job.location }}</span>
            <span class="type-badge" :class="job.type === 'دوام كامل' ? 'full-time' : 'part-time'">
              {{ job.type }}
            </span>
          </div>
        </div>
        <div class="header-action">
          <button class="btn-primary apply-btn">التقديم الآن</button>
        </div>
      </div>

      <!-- تفاصيل الوظيفة -->
      <div class="job-body">
        <div class="main-info card">
          <section class="info-section">
            <h2>وصف الوظيفة</h2>
            <p>{{ job.fullDescription }}</p>
          </section>

          <section class="info-section">
            <h2>المتطلبات</h2>
            <ul class="requirements-list">
              <li v-for="(req, index) in job.requirements" :key="index">
                {{ req }}
              </li>
            </ul>
          </section>
        </div>
        
        <!-- بطاقة جانبية -->
        <aside class="sidebar card">
          <h3>ملخص الوظيفة</h3>
          <ul class="summary-list">
            <li>
              <strong>تاريخ النشر:</strong>
              <span>{{ job.postedDate }}</span>
            </li>
            <li>
              <strong>المستوى:</strong>
              <span>{{ job.level }}</span>
            </li>
            <li>
              <strong>الراتب المتوقع:</strong>
              <span>{{ job.salary }}</span>
            </li>
          </ul>
        </aside>
      </div>
      
    </div>
    
    <!-- في حالة عدم العثور على الوظيفة -->
    <div v-else class="not-found card">
      <h2>عذراً، الوظيفة غير موجودة</h2>
      <p>ربما تم حذفها أو الرابط غير صحيح.</p>
      <router-link to="/jobs" class="btn-primary">تصفح الوظائف المتاحة</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const job = ref(null);

// بيانات وهمية للوظائف (يجب أن تتطابق مع الموجودة في JobsView للتوضيح)
const allJobs = [
  {
    id: 1,
    title: 'مطور واجهات أمامية (Vue.js)',
    company: 'شركة التقنية الحديثة',
    location: 'صنعاء',
    type: 'دوام كامل',
    fullDescription: 'نحن نبحث عن مطور واجهات أمامية متحمس وموهوب للانضمام إلى فريقنا. ستكون مسؤولاً عن بناء واجهات مستخدم تفاعلية وجذابة باستخدام Vue 3 و Composition API. يجب أن يكون لديك فهم عميق لأساسيات الويب (HTML, CSS, JavaScript) والقدرة على كتابة كود نظيف وقابل للصيانة.',
    requirements: [
      'خبرة لا تقل عن سنتين في تطوير الواجهات الأمامية',
      'إتقان Vue.js (يفضل Vue 3)',
      'معرفة ممتازة بـ HTML5, CSS3, و JavaScript الحديثة',
      'خبرة في التعامل مع RESTful APIs',
      'مهارات جيدة في حل المشكلات والعمل ضمن فريق'
    ],
    postedDate: 'قبل يومين',
    level: 'متوسط الخبرة',
    salary: 'يحدد في المقابلة'
  },
  {
    id: 2,
    title: 'مصمم جرافيك',
    company: 'وكالة الإبداع',
    location: 'عن بعد',
    type: 'دوام جزئي',
    fullDescription: 'مطلوب مصمم جرافيك مبدع للانضمام لوكالتنا والعمل على مشاريع متنوعة لعملائنا. ستتولى تصميم الهويات البصرية، منشورات وسائل التواصل الاجتماعي، والمواد التسويقية.',
    requirements: [
      'خبرة ممتازة في برامج Adobe (Photoshop, Illustrator, InDesign)',
      'معرض أعمال (Portfolio) قوي يثبت الإبداع',
      'القدرة على الالتزام بالمواعيد النهائية',
      'مهارات تواصل جيدة'
    ],
    postedDate: 'اليوم',
    level: 'مبتدئ / متوسط',
    salary: 'بالقطعة / راتب شهري'
  }
];

// جلب تفاصيل الوظيفة بناءً على المعرف في الرابط
onMounted(() => {
  const jobId = parseInt(route.params.id);
  // البحث عن الوظيفة
  const foundJob = allJobs.find(j => j.id === jobId);
  
  if (foundJob) {
    job.value = foundJob;
  } else {
    // كود بديل إذا لم تكن الوظيفة من ضمن القائمة المبسطة أعلاه
    // في تطبيق حقيقي سيتم جلب البيانات من الخادم
    job.value = {
      id: jobId,
      title: 'وظيفة عامة',
      company: 'شركة غير محددة',
      location: 'غير محدد',
      type: 'دوام كامل',
      fullDescription: 'تفاصيل هذه الوظيفة غير متوفرة حالياً بالكامل. يرجى مراجعة الشركة لمزيد من المعلومات.',
      requirements: ['غير محدد'],
      postedDate: 'غير محدد',
      level: 'غير محدد',
      salary: 'غير محدد'
    };
  }
});
</script>

<style scoped>
.job-details-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.back-link:hover {
  text-decoration: underline;
}

/* الترويسة */
.job-header {
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.header-main h1 {
  font-size: 28px;
  margin-bottom: 15px;
}

.company-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 15px;
}

.company {
  font-weight: 600;
  color: var(--primary-color);
}

.location {
  color: var(--text-muted);
}

.type-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.type-badge.full-time {
  background-color: rgba(255, 123, 0, 0.1);
  color: var(--primary-color);
}

.type-badge.part-time {
  background-color: rgba(102, 102, 102, 0.1);
  color: var(--text-muted);
}

.apply-btn {
  padding: 12px 30px;
  font-size: 18px;
}

/* الجسم الرئيسي */
.job-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.main-info {
  padding: 30px;
}

.info-section {
  margin-bottom: 30px;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section h2 {
  font-size: 22px;
  margin-bottom: 15px;
  color: var(--secondary-color);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
  display: inline-block;
}

.info-section p {
  color: var(--text-muted);
  line-height: 1.8;
}

.requirements-list {
  list-style-type: none;
  padding: 0;
}

.requirements-list li {
  position: relative;
  padding-right: 20px;
  margin-bottom: 10px;
  color: var(--text-muted);
}

.requirements-list li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  line-height: 1.2;
}

/* الشريط الجانبي */
.sidebar {
  padding: 24px;
  height: fit-content;
}

.sidebar h3 {
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.summary-list {
  list-style: none;
  padding: 0;
}

.summary-list li {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.summary-list strong {
  color: var(--secondary-color);
  font-size: 14px;
}

.summary-list span {
  color: var(--text-muted);
}

/* حالة عدم الوجود */
.not-found {
  text-align: center;
  padding: 80px 20px;
}

.not-found h2 {
  margin-bottom: 10px;
}

.not-found p {
  color: var(--text-muted);
  margin-bottom: 20px;
}

/* التجاوب */
@media (max-width: 992px) {
  .job-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header-action {
    width: 100%;
  }
  
  .apply-btn {
    width: 100%;
  }
}
</style>
