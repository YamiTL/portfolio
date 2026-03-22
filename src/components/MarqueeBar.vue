<template>
  <!-- aria-hidden: decorative repeated text, not meaningful for screen readers -->
  <div class="marquee-wrap" aria-hidden="true" role="presentation">
    <div class="marquee-track">
      <template v-for="_ in 2" :key="_">
        <template v-for="(item, i) in t('marquee.items')" :key="i + '-' + _">
          <span>{{ item }}</span>
          <span class="dot">·</span>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.marquee-wrap {
  background: var(--orange);
  overflow: hidden;
  padding: 0.85rem 0;
  white-space: nowrap;
}
.marquee-track {
  display: inline-flex; gap: 0;
  animation: marqueeScroll 22s linear infinite;
}
.marquee-track span {
  font-size: 0.7rem; font-weight: 500;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(253,251,248,0.85);
  padding: 0 2.5rem;
}
.marquee-track .dot { color: rgba(253,251,248,0.4); padding: 0; letter-spacing: 0; }

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
