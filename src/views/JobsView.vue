<template>
  <div class="jobs-page container section-padding">
    <div class="page-header">
      <h1>استكشف أحدث الوظائف</h1>
      <p>ابحث عن الوظيفة التي تناسب طموحاتك ومهاراتك</p>
    </div>

    <!-- قسم الفلترة -->
    <div class="filter-section card">
      <div class="filter-group">
        <label for="search">البحث بالمسمى الوظيفي</label>
        <input 
          type="text" 
          id="search" 
          v-model="filters.searchQuery" 
          placeholder="مثال: مطور ويب، محاسب..." 
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="location">الموقع</label>
        <select id="location" v-model="filters.location" class="filter-input">
          <option value="">جميع المواقع</option>
          <option value="صنعاء">صنعاء</option>
          <option value="عدن">عدن</option>
          <option value="تعز">تعز</option>
          <option value="عن بعد">عن بعد</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="type">نوع الوظيفة</label>
        <select id="type" v-model="filters.type" class="filter-input">
          <option value="">جميع الأنواع</option>
          <option value="دوام كامل">دوام كامل</option>
          <option value="دوام جزئي">دوام جزئي</option>
        </select>
      </div>
    </div>

    <!-- عرض الوظائف -->
    <div class="jobs-grid" v-if="filteredJobs.length > 0">
      <JobCard 
        v-for="job in filteredJobs" 
        :key="job.id" 
        :job="job" 
      />
    </div>
    
    <!-- رسالة عند عدم وجود نتائج -->
    <div v-else class="no-results card">
      <h3>لم يتم العثور على وظائف مطابقة للبحث</h3>
      <p>حاول تغيير خيارات الفلترة للحصول على نتائج أكثر</p>
      <button class="btn-primary" @click="resetFilters">إعادة ضبط الفلاتر</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import JobCard from '../components/JobCard.vue';

// حالة الفلاتر
const filters = reactive({
  searchQuery: '',
  location: '',
  type: ''
});

// بيانات الوظائف (وهمية للتوضيح)
const jobs = ref([
  {
    id: 1,
    title: 'مطور واجهات أمامية (Vue.js)',
    company: 'شركة التقنية الحديثة',
    location: 'صنعاء',
    type: 'دوام كامل',
    shortDescription: 'نبحث عن مطور واجهات أمامية ذو خبرة في إطار عمل Vue 3 للانضمام إلى فريقنا وبناء تطبيقات ويب احترافية.'
  },
  {
    id: 2,
    title: 'مصمم جرافيك',
    company: 'وكالة الإبداع',
    location: 'عن بعد',
    type: 'دوام جزئي',
    shortDescription: 'مطلوب مصمم جرافيك مبدع للعمل على تصاميم السوشيال ميديا والهويات البصرية لعملائنا.'
  },
  {
    id: 3,
    title: 'محاسب مالي',
    company: 'مؤسسة التجارة العالمية',
    location: 'عدن',
    type: 'دوام كامل',
    shortDescription: 'نبحث عن محاسب مالي خبرة لا تقل عن 3 سنوات في إعداد التقارير المالية والميزانيات.'
  },
  {
    id: 4,
    title: 'مدير تسويق رقمي',
    company: 'شركة النمو السريع',
    location: 'صنعاء',
    type: 'دوام كامل',
    shortDescription: 'مطلوب مدير تسويق لقيادة الحملات الإعلانية وإدارة فريق التسويق الرقمي بالشركة.'
  },
  {
    id: 5,
    title: 'كاتب محتوى',
    company: 'منصة المعرفة',
    location: 'عن بعد',
    type: 'دوام جزئي',
    shortDescription: 'مطلوب كاتب محتوى لكتابة مقالات متوافقة مع السيو في مجالات التقنية والأعمال.'
  },
  {
    id: 6,
    title: 'مهندس شبكات',
    company: 'شركة الاتصالات المتقدمة',
    location: 'تعز',
    type: 'دوام كامل',
    shortDescription: 'نبحث عن مهندس شبكات لتركيب وصيانة شبكات الشركة وحل المشكلات التقنية.'
  }
]);

// حساب الوظائف المفلترة بناءً على مدخلات المستخدم
const filteredJobs = computed(() => {
  return jobs.value.filter(job => {
    // فلتر البحث بالاسم
    const matchSearch = job.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
    // فلتر الموقع
    const matchLocation = filters.location === '' || job.location === filters.location;
    // فلتر النوع
    const matchType = filters.type === '' || job.type === filters.type;
    
    return matchSearch && matchLocation && matchType;
  });
});

// وظيفة لإعادة ضبط الفلاتر
const resetFilters = () => {
  filters.searchQuery = '';
  filters.location = '';
  filters.type = '';
};
</script>

<style scoped>
.jobs-page {
  padding-top: 40px;
  padding-bottom: 80px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.page-header p {
  color: var(--text-muted);
  font-size: 18px;
}

/* تنسيقات قسم الفلترة */
.filter-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 24px;
  margin-bottom: 40px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-group label {
  font-weight: 600;
  font-size: 14px;
  color: var(--secondary-color);
}

.filter-input {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-family: var(--font-family);
  font-size: 15px;
  outline: none;
  transition: var(--transition);
}

.filter-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(255, 123, 0, 0.1);
}

/* شبكة الوظائف */
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

/* حالة عدم وجود نتائج */
.no-results {
  text-align: center;
  padding: 60px 20px;
}

.no-results h3 {
  margin-bottom: 10px;
}

.no-results p {
  color: var(--text-muted);
  margin-bottom: 24px;
}

/* التجاوب */
@media (max-width: 768px) {
  .filter-section {
    grid-template-columns: 1fr;
  }
}
</style>
