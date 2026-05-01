<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Paris. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

// حساب السنة الحالية بشكل ديناميكي
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: auto; /* لضمان بقائه أسفل الصفحة */
}

.footer-content p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}
</style>
