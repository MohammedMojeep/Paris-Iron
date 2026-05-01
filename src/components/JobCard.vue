<template>
  <div class="job-card card">
    <div class="job-header">
      <div class="job-info">
        <h3 class="job-title">{{ job.title }}</h3>
        <p class="company-name">{{ job.company }}</p>
      </div>
      <div class="job-type-badge" :class="job.type === 'دوام كامل' ? 'full-time' : 'part-time'">
        {{ job.type }}
      </div>
    </div>
    
    <div class="job-details">
      <div class="detail-item">
        <span class="icon">📍</span>
        <span>{{ job.location }}</span>
      </div>
    </div>
    
    <p class="job-description">{{ job.shortDescription }}</p>
    
    <div class="job-footer">
      <router-link :to="'/jobs/' + job.id" class="btn-secondary">عرض التفاصيل</router-link>
    </div>
  </div>
</template>

<script setup>
// تعريف الخصائص المستلمة من المكون الأب
const props = defineProps({
  job: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.job-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.job-title {
  font-size: 20px;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.company-name {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 600;
}

.job-type-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.job-type-badge.full-time {
  background-color: rgba(255, 123, 0, 0.1);
  color: var(--primary-color);
}

.job-type-badge.part-time {
  background-color: rgba(102, 102, 102, 0.1);
  color: var(--text-muted);
}

.job-details {
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: var(--text-muted);
}

.job-description {
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 24px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.job-footer {
  margin-top: auto;
}
</style>
